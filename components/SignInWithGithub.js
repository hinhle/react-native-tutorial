import React, { Component } from "react";
import { Image, Text, View, AsyncStorage, StyleSheet } from "react-native";
import firebase from "firebase";
import getGithubTokenAsync from "./getGithubTokenAsync";
import GithubButton from "./GithubButton";
import axios from "axios";

const GithubStorageKey = "@Expo:GithubToken";
const API_URL = "https://api.dev.doramatching.tk";

const firebaseConfig = {
  apiKey: "AIzaSyA98HUOPGvwPJFu753jBWwyjS87U9QNS0w",
  authDomain: "doramatching-auth.firebaseapp.com",
  databaseURL: "https://doramatching-auth.firebaseio.com",
  projectId: "doramatching-auth",
  storageBucket: "doramatching-auth.appspot.com",
  messagingSenderId: "581080199995",
  appId: "1:581080199995:web:2ce7279f4e4366aa643d1e",
  measurementId: "G-1JELJS41G7",
};

function initializeFirebase() {
  // Prevent reinitializing the app in snack.
  if (!firebase.apps.length) {
    return firebase.initializeApp(firebaseConfig);
  }
}

async function signInAsync(token) {
  try {
    if (!token) {
      const token = await getGithubTokenAsync();
      if (token) {
        await AsyncStorage.setItem(GithubStorageKey, token);
        return signInAsync(token);
      } else {
        return;
      }
    }
    const credential = firebase.auth.GithubAuthProvider.credential(token);
    return firebase.auth().signInAndRetrieveDataWithCredential(credential);
  } catch ({ message }) {
    alert(message);
  }
}

async function signOutAsync() {
  try {
    await AsyncStorage.removeItem(GithubStorageKey);
    await firebase.auth().signOut();
  } catch ({ message }) {
    alert("Error: " + message);
  }
}

async function onPressButton() {
  const { credential } = await signInAsync();
  console.log("return", credential);
  const { accessToken } = credential;
  console.log("accessToken", accessToken);
  const data = await axios.post(`${API_URL}/github/langs`, {
    accessToken,
  });
  console.log("RESPONSE FROM API", data);
}

async function attemptToRestoreAuthAsync() {
  let token = await AsyncStorage.getItem(GithubStorageKey);
  if (token) {
    console.log("Sign in with token", token);
    return signInAsync(token);
  }
}

export default class SignInWithGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
    };
  }

  componentDidMount() {
    this.setupFirebaseAsync();
  }

  setupFirebaseAsync = async () => {
    initializeFirebase();

    firebase.auth().onAuthStateChanged(async (auth) => {
      const isSignedIn = !!auth;
      this.setState({ isSignedIn });
      if (!isSignedIn) {
        attemptToRestoreAuthAsync();
      }
    });
  };

  render() {
    if (this.state.isSignedIn) {
      const user = firebase.auth().currentUser;
      console.log("user", firebase.auth().currentUser);

      return (
        <View style={styles.container}>
          <Image source={{ uri: user.photoURL }} style={styles.image} />
          <Text style={styles.paragraph}>Welcome {user.displayName}</Text>
          <Text style={styles.paragraph} onPress={signOutAsync}>
            Logout
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <GithubButton onPress={() => onPressButton()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    borderRadius: 64,
    overflow: "hidden",
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
  },
});

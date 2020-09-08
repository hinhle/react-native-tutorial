import { registerRootComponent } from "expo";

// import App from "./App";
// import HelloWorld from "./components/HelloWorld";
// import Robot from "./components/Robot";
// import MultipleGreetings from "./components/MutipleGreetings";
// import TextBlink from "./components/TextBlink";
// import FixedDimension from "./components/FixedDimension";
// import FlexDimension from "./components/FlexDimension";
// import FlexExample from "./components/FlexExample";
// import JustifyContentExample from "./components/JustifyContentExample";
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
// import TextInputCpn from "./components/TextInputCpn";
//import ButtonCpn from "./components/ButtonCpn";
//import TouchCpn from "./components/TouchCpn";
import BasicFlatList from "./components/BasicFlatList";
registerRootComponent(BasicFlatList);

var horizontalStatus = {
    rainy: {
        ios: 'ios-rainy',
        android: 'md-rainy'
    },
    cloud: {
        ios: 'ios-cloudy',
        android: 'md-cloudy'
    },
    thunderstorm: {
        ios: 'ios-thunderstorm',
        android: 'md-thunderstorm'
    },
    sunny: {
        ios: 'ios-sunny',
        android: 'md-sunny'
    }
}
var horizontalFlatListData = [
    {
        hour: '1 AM',
        status: horizontalStatus.rainy,
        degree: 57
    },
    {
        hour: '2 AM',
        status: horizontalStatus.cloudy,
        degree: 48
    },
    {
        hour: '4 AM',
        status: horizontalStatus.thunderstorm,
        degree: 50
    },
    {
        hour: '5 AM',
        status: horizontalStatus.sunny,
        degree: 55
    },
     {
        hour: '6 AM',
        status: horizontalStatus.rainy,
        degree: 57
    },
    {
        hour: '7 AM',
        status: horizontalStatus.cloudy,
        degree: 48
    },
    {
        hour: '8 AM',
        status: horizontalStatus.thunderstorm,
        degree: 50
    },
    {
        hour: '10 AM',
        status: horizontalStatus.sunny,
        degree: 55
    },
];

export {horizontalStatus};
export {horizontalFlatListData};
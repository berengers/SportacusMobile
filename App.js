import React, { Component } from 'react';
import { View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import theme from './style'
import Programs from './components/programs'
import Player from './components/player'

const navigationOptions = {
  headerStyle: theme.header
}

const AppNavigator = createStackNavigator({
  Programs: {
    screen: Programs,
    navigationOptions
  },
  Player: {
    screen: Player,
    navigationOptions
  },
  initialRouteName: 'Programs'
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}





import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Programs from './components/programs'
import Player from './components/player'

const AppNavigator = createStackNavigator({
  Programs: {
    screen: Programs
  },
  Player: {
    screen: Player
  }
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}





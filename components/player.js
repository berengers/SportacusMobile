import React from 'react'
import { Text } from 'react-native'

export default class Player extends React.Component {

  render () {
    const { navigation } = this.props
    const programId = navigation.getParam('id', null)
    
    return <Text>Program with id : {programId}</Text>
  }
}
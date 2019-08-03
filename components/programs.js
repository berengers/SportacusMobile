import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const programs = [
  { id: 0, title: "Jambes" },
  { id: 1, title: "Bras" },
  { id: 2, title: "Dos" },
  { id: 3, title: "Abdos" },
]

export default class Programs extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        {
          programs.map(program => (
            <Button key={program.id} title={program.title}
              onPress={() => this.props.navigation.navigate('Player', { id: program.id })} />)
          )
        }
      </View> 
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'salmon',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
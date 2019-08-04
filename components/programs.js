import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'

import theme from '../style'
import programs from './fixtures'


export default class Programs extends React.Component {

  static navigationOptions = {
    title: "Workouts",
    headerBackgroundTransitionPreset: 'toggle'
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Choose a program</Text>
        <FlatList
          data={programs}
          keyExtractor={program => program.id.toString()}
          renderItem={({ item: program }) => (
            <TouchableOpacity style={styles.program}
              onPress={() => navigation.navigate('Player', { program })} >
              <View>
                <Text style={styles.text}>{program.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.color.primary,
  },
  title: {
    fontSize: 18,
    color: theme.color.third,
    marginVertical: 12,
    marginLeft: 8
  },
  program: {
    backgroundColor: theme.color.secondary,
    padding: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.primary,
    textAlign: 'center',
  },
  text: {
    fontSize: 18
  }
});
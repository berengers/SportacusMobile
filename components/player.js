import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'

import theme from '../style'
export default class Player extends React.Component {

  constructor(props) {
    super(props)

    this.state = { currentStep: 1, currentSerie: 1, isFinished: false }
  }

  static navigationOptions = {
    title: "Player",
    headerBackgroundTransitionPreset: 'toggle'
  }

  render () {
    const { navigation } = this.props
    const { currentStep, currentSerie, isFinished } = this.state
    const { id, title, exercises } = navigation.getParam('program', {})
    const { image, series, repetitions, weight, rest, restEnd } = exercises[currentStep -1]
    const requireImage = image > -1 ? image : require('../static/images/exercises/default.png')

    nextSerie = () => {
      if (currentSerie < series)
        this.setState({ currentSerie: currentSerie +1 })
      else if (currentSerie === series && currentStep < exercises.length)
        this.setState({ currentSerie: 1, currentStep: currentStep +1 })
      else
        this.setState({ isFinished: true })
    }

    return (
      <View style={style.wrapper}>
          <Text style={theme.title.h2}>{title}</Text>
          
          <Text style={style.step}>{currentSerie}/{series}</Text>
          <Text style={style.title}>{exercises[currentStep -1].title}</Text>
          
          <Image style={{height: 150}} resizeMode='contain' source={requireImage}/>

          <View style={style.paramsWrapper}>
            <Text style={style.param}>Reps {repetitions}</Text>
            <Text style={style.param}>Libs {weight}</Text>
            <Text style={style.param}>Rest {rest}</Text>
          </View>
            
          {!isFinished ?
            <View style={style.nextButton}>
              <Button title="Next serie >" onPress={nextSerie} />
            </View>
            :
            <Text style={style.finished}>It's finish, Bravo!</Text>
          }
      </View>
    )
  }
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.color.primary,
  },
  step : {
    color: theme.color.third
  },
  title: {
    color: theme.color.third,
    fontSize: 25,
    marginBottom: 10
  },
  nextButton: {
    marginTop: 20
  },
  finished: {
    backgroundColor: theme.color.secondary,
    padding: 10,
    marginTop: 15,
    color: theme.color.third,
    fontSize: 20,
    fontWeight: '700'
  },
  paramsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  param: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    color: theme.color.third,
  }
})
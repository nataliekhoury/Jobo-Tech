import { StyleSheet, Text, View,Image,ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'

export default function InterviewMentorScreen() {
  return (
    <SafeAreaView>
    <View>
      <Image source={require('../../assets/interviewBackground.png')} style={styles.ImageBackground} />
      <Text style={styles.interviewText}>Interview</Text>
      <Text style={styles.requestsText} >Requests</Text>

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  ImageBackground: {
    marginTop: '-95%',
    alignItems: 'center',
    alignContent: 'center',
  },
  interviewText: {
    position: 'absolute',
    bottom: '90%',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    fontWeight: "bold",
    fontSize: 26,
    left: 130,
    bottom: -20,
    shadowOffset: {
      width: 6,
      height: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10.0,
    elevation: 111,
  },
  requestsText: {
    fontWeight: "bold",
    fontSize: 26,
    left: 130,
    bottom: -20,
    shadowOffset: {
      width: 6,
      height: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10.0,
    elevation: 111,
  },

})
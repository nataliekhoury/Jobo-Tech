import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground} from 'react-native'
import React from 'react'



const ChatScreen = () => {
  return (
    <SafeAreaView>
      <View>
    <View style={{top:'50%'}}>
      <Image source={require('../../../assets/messageBack.png')} style={styles.ImageBackground} />
      <Text style={styles.message}>Messages</Text>
  

    </View>

    <View>
    <Text style={styles.recent}>Your recent chats </Text>
    </View>
    <View>
    <Image source={require('../../../assets/smallCard.png')} style={styles.recentBack} />


    </View>
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    ImageBackground: {
      marginTop: '-80%',
      alignItems: 'center',
      alignContent: 'center',
    },
    message: {
      position: 'absolute',
      // top: '7%',
      marginTop: '106%',
      fontSize: 38,
      color: 'white',
      textAlign: 'center',
      alignItems: 'center',
      alignContent: 'center',
      left: 130,
      bottom: -25,
     
    },
    recent:{
      color: '#8F8D8D',
       top: '-500%',
      // bottom: '540%',
    
      textAlign: 'center',
      alignItems: 'center',
      alignContent: 'center',
      left: -90,
      // font: 'bold',
      fontSize: 20,

      // bottom: -20,
    },
    recentBack: {
      top: '-100%',
      left: 40,
    }
  })

export default ChatScreen
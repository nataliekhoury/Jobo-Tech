// Welcome.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SignUp from './SignUp';
import Login from './Login';
//android : 40874035944-qqo69r6koq14fo6mrcgthpfs3p2pjfh3.apps.googleusercontent.com
// ios : 
const SquareButton = ({ onPress, title, image }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      <Image source={image} style={styles.Logo} />
    </TouchableOpacity>
  );
};

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button2} onPress={onPress}>
      <Text style={styles.button2Text}>{title}</Text>
    </TouchableOpacity>
  );
};

const Welcome = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/welcomeBack.png')} style={styles.backgroundImage} />
      <Image source={require('../../assets/Welcome.png')} style={styles.overlayImage} />
      <Text style={styles.title}>Welcome to JoboTech</Text>
      <Text style={styles.subtitle}>Create an account to get started</Text>
      <SquareButton title="Continue with Google" image={require('../../assets/googleLogo.png')} />
      <SquareButton title="Continue with Linkedin" image={require('../../assets/LinkedinLogo.png')} />
      <Button onPress={handleSignUpPress} title="Sign up with Email" />
      <View style={styles.container1}>
        <Text style={styles.ready}>Already have an account ?</Text>
        <TouchableOpacity style={styles.login} onPress={handleLoginPress}>
          <Text style={styles.login} >Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <Text style={styles.ready}>By using the app, you agree to our</Text>
        <Text style={styles.login}>Terms of Service</Text>
        <Text style={styles.ready}>and</Text>
        <Text style={styles.login}>Privacy Policy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  backgroundImage: {
    width: '100%',
    height: '45%',
    top:50,
    resizeMode: 'cover',
    position: 'absolute',
  },
  overlayImage: {
    width: '75%', 
    height: '57%', 
    resizeMode: 'contain', 
    position: 'absolute',
    top: 50,
  },

  title:{
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 42,
    color: '#000000',
    top: 160,
    
  },
  subtitle:{
    top:160,
    // fontFamily: 'AbhayaLibre-Medium',
    color: '#808080',
  },
  button: {
    top :180,
    height:47,
    borderRadius: 500,
    width:'80%',
    borderWidth: 1,  
    borderColor: 'black',
    marginBottom: 10,
  },

  button2: {
    top :180,
    height:47,
    borderRadius: 500,
    width:'80%',
    borderWidth: 1,  
    borderColor: 'orange',
    marginBottom: 10,
  },

  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    top:10,
    fontSize:17,
    left:25,
  },

  Logo:{
    width: 30,
    height: 30,
    top:5,
    left:50,
    bottom :10,
    position: 'absolute',
  },
  button2Text:{
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    top:10,
    fontSize:17,
  },
  container1: {
    flexDirection: 'row', 
    top :180,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ready: {
    fontSize: 16,
    color: 'black',
    marginRight: 7, 
  },
  login: {
    fontSize: 16,
    color: 'orange',
    marginRight: 7,
  },
});

export default Welcome;

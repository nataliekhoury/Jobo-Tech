import { View, Text, Image, StyleSheet, TouchableOpacity , TextInput ,Platform } from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SquareButton = ({ onPress, title, image }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };
const Login =({navigation}) => {
  const handleWelcomePress2 = () => {
    navigation.navigate('Welcome');
  };

  
    const handleWelcomePress = () => {
       // Check if password are valid
    const isPasswordValid = Password.length >= 8;

    // Update state to show error messages
    setShowPasswordError(!isPasswordValid);

    // If password is not valid, return without navigating
    if (!isPasswordValid) {
      return;
    }
        navigation.navigate('Welcome');
    };
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [isValidPassword, setValidPassword] = useState(true);
    const [showPasswordError, setShowPasswordError] = useState(false); 

    const handleUserNameChange = (text1) => {
      setName(text1);
      };
      const handlePasswordChange = (text) => {
        setPassword(text);
        // Validate the password length
        const isValid = text.length >= 8;
        setValidPassword(isValid);
      };
      
    
    return (
      <KeyboardAwareScrollView
  contentContainerStyle={styles.scrollContainer}
  enableOnAndroid={true}
  extraScrollHeight={Platform.OS === 'ios' ? 40 : 0} // Adjust as needed 
  style={styles.container}
  >

        <View style={styles.container}>
            <Image source={require('../../assets/LogIn.png')} style={styles.Login} />
            <TouchableOpacity  onPress={handleWelcomePress2}>
               <Image source={require('../../assets/Back.png')} style={styles.Back} />
            </TouchableOpacity>
            <Text  style={[styles.titleInputText]}>User Name</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={handleUserNameChange}
        value={Name}
      />
      <Text  style={[styles.titleInputText]}>Password</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={handlePasswordChange}
        value={Password}
        secureTextEntry
      />
      {!isValidPassword && (
        <Text style={styles.errorEmailMessage}>Password must be at least 8 characters long.</Text>
      )}
    <SquareButton onPress={handleWelcomePress} title="Login" />
        </View>
      </KeyboardAwareScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    Login:{
        top:40,
        width:350,
        height:300,
        left:40,
    },
    Back:{
     width:55,
     height:50,
     top:-250,
    },
    titleInputText:{
        top:50,
        left:55,
        marginTop:5,
        marginBottom:10,
        color:'#808080',
        fontWeight: 'bold',
      },
      textInput: {
        top:50,
        height: 40,
        borderColor: 'rgba(212, 212, 212, 0.35)',
        borderWidth: 1,
        marginBottom: 30,
        left:45,
        width: '75%',
        borderRadius:10,
        backgroundColor:'rgba(212, 212, 212, 0.35)',
      },
      button: {
        top :150,
        height:47,
        borderRadius: 10,
        left:70,
        width:'60%',
        borderWidth: 1,  
        borderColor: 'orange',
        marginBottom: 10,
      },
      buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize:25,
        top:2,
        left:-5,
      },
      errorEmailMessage:{
        top : 105,
        left:50,
        color:'red',
        fontSize:11,
      },
      scrollContainer: {
        flexGrow: 10,
        justifyContent: 'center',
      },
})
export default Login
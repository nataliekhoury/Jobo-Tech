import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
   Platform 

} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Checkbox } from 'react-native-paper';
const SquareButton = ({ onPress, title}) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };
const SignUp = ({ navigation }) => {
  const [Email, setEmail] = useState('');
  const [isValidEmail, setValidEmail] = useState(true);
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [isValidPassword, setValidPassword] = useState(true);
  const [showEmailError, setShowEmailError] = useState(false); // Track whether to show email error
  const [showPasswordError, setShowPasswordError] = useState(false); // Track whether to show password error
  const [Profession, setProfession] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [Description, setDescription] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
    // Validate the email using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(text);
    setValidEmail(isValid);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    // Validate the password length
    const isValid = text.length >= 8;
    setValidPassword(isValid);
  };
  
  const handleChange = () => {
    setChecked(!checked);
  };
  

  const handleWelcomePress = () => {
    navigation.navigate('Welcome');
  };

  const handleSignUpPress = () => {
    // Check if email and password are valid
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);
    const isPasswordValid = Password.length >= 8;

    // Update state to show error messages
    setShowEmailError(!isEmailValid);
    setShowPasswordError(!isPasswordValid);
    
    
    // If either email or password is not valid, return without navigating
    if (!isEmailValid || !isPasswordValid) {
      return;
    }
    navigation.navigate('SignUpCon');
  };

  const handleTextInputChange2 = (text2) => {
    setName(text2);
  };
  
  const handleTextInputChange4 = (text4) => {
    setProfession(text4);
  };
  
  const handleTextInputChange5 = (text4) => {
    setDescription(text4);
  };

  return (
    
<KeyboardAwareScrollView
  contentContainerStyle={styles.scrollContainer}
  enableOnAndroid={true}
  extraScrollHeight={Platform.OS === 'ios' ? 50 : 0} // Adjust as needed 
  style={styles.container}
  >

   <View  style={styles.container}>
   
      <View style={styles.container1}>
        <Image source={require('../../assets/HelpSignUp.png')} style={styles.corner} />
        <Text style={styles.SignUp}>SignUp</Text>
        <TouchableOpacity  style={styles.Back} onPress={handleWelcomePress}>
          <Image source={require('../../assets/Back.png')} style={styles.Back} />
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
          <View style={styles.container3}>
            <Text  style={styles.label}>Searching</Text>
            <View style={styles.container5}>
            <Checkbox
               status={checked ? "checked" : "unchecked"}
               onPress={handleChange}
    
            />
         
            </View>
            <Text   style={styles.label2 }>for a job</Text>

          </View> 

          <View style={styles.container4}>
              <Text  style={styles.label3}>I am</Text>
              <View style={styles.container6}>
              <Checkbox
                  status={!checked ? "checked" : "unchecked"}
                  onPress={handleChange}
               />
               
               </View>
               <Text   style={styles.label4}>a mentor</Text>
          
          </View> 

        </View>
    
      <Text  style={[styles.titleInputText]}>Email</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={handleEmailChange}
        value={Email}
        keyboardType="email-address"
      />
      {!isValidEmail && (
        <Text style={styles.errorEmailMessage}>Invalid email. Please enter a valid email address.</Text>
      )}
     
      <Text  style={[styles.titleInputText]}>What's your name?</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={handleTextInputChange2}
        value={Name}
      />
      <Text style={[styles.Note]}>This name will apper in your profile</Text>
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
         {!checked && (
        <View>
          <Text style={styles.titleInputText}>Profession</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleTextInputChange4}
            value={Profession}
          />
        </View>
      )}
      {checked && (
        <View>
          <Text style={styles.titleInputText}>Description</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleTextInputChange5}
            value={Description}
          />
        </View>
      )}
     <SquareButton onPress={handleSignUpPress} title="continue" />
     
    </View>
    </KeyboardAwareScrollView>
    

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    
  },
  container1: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    marginRight: 7,
    
  },
  container2:{
   top:100,
   flexDirection: 'row',

  },

  container3:{
    left:20,
    flexDirection: 'row',
    marginRight: 30,
    backgroundColor:'rgba(253, 114, 148, 1)',
    height:100,
    width:140,
    borderRadius: 20,
    left:30,
   },
   container4:{
    left:20,
    flexDirection: 'row',
    marginRight: 7,
    backgroundColor:'rgba(212, 212, 212, 0.35)',
    height:100,
    width:140,
    borderRadius: 20,
    left:30,
   },
  corner: {
    position: 'absolute',
    top: 0,
    right: -20,
    width: 125,
    height: 125,
    marginRight: 7,
  },
  SignUp: {
    top: 65,
    left: 110,
    fontSize: 40,
    marginRight: 7,
  },
  Back: {
    position: 'absolute',
    left: 10,
    top: 25,
    width: 50,
    height: 50,
  },
  
  checkbox: {
    right:-30,
    top:10,
    width: 27,
    height: 25,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor:'white',
    marginRight: 10,
    borderRadius:50,
  },

  checkbox2: {
    right:-65,
    top:10,
    width: 27,
    height: 25,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor:'white',
    marginRight: 10,
    borderRadius:50,
  },
  checkedBox: {
    backgroundColor: 'gray', 
  },

  checkedBox2: {
    backgroundColor: 'gray', 
  },
  label: {
    fontSize: 15,
    top : 25,
    left: 10 ,
    color: 'white',
  },
  label3: {
    fontSize: 15,
    top : 25,
    left: 20 ,
    color: '#000000',
    fontWeight: 'bold',
  },
  selectedButton: {
    backgroundColor: '#2ecc71', 
  },
  label2:{
    fontSize: 15,
    top : 50,
    left:-40,
    color: 'white',
  },
  label4:{
    fontSize: 15,
    top : 50,
    left:-20,
    color: 'black',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 10,
    justifyContent: 'center',
  },
  titleInputText:{
    top:120,
    left:55,
    marginTop:5,
    marginBottom:5,
    color:'#808080',
  },
  textInput: {
    top:120,
    height: 40,
    borderColor: 'rgba(212, 212, 212, 0.35)',
    borderWidth: 1,
    marginBottom: 16,
    left:45,
    width: '75%',
    borderRadius:5,
    backgroundColor:'rgba(212, 212, 212, 0.35)',
  },

  Note:{
    top:105,
    left:45,
    fontSize:10,
    fontWeight:'bold',
  },
  button: {
    top :150,
    height:47,
    borderRadius: 500,
    left:70,
    width:'60%',
    borderWidth: 1,  
    borderColor: 'orange',
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize:27,
    left:-5,
  },
  container5:{
    right:-25,
    top:10,
  },
  container6:{
    right:-70,
    top:10,
  },
  errorEmailMessage:{
    top : 105,
    left:50,
    color:'red',
    fontSize:11,
  },
});

export default SignUp;

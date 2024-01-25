import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React  , { useState }from 'react'
import * as ImagePicker from 'expo-image-picker';
const SquareButton = ({ onPress, title, image }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };
const SignUpCon =({navigation}) => {
  const [image, setImage] = useState(null);

  const handleChoosePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      console.error('Permission to access media library was denied');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
    const handleWelcomePress = () => {
        navigation.navigate('Welcome');
      };
    return (
        <View style={styles.container}>
           <View style={styles.container1}>
          <Image source={require('../../assets/HelpSignUp.png')} style={styles.corner} />
        <Text style={styles.SignUp}>SignUp</Text>
        <TouchableOpacity  style={styles.Back} onPress={handleWelcomePress}>
          <Image source={require('../../assets/Back.png')} style={styles.Back} />
        </TouchableOpacity>
      </View> 
      <Text style={styles.TitleI}>Choose you profile picture</Text>
      {image ? (
        <View style={styles.container2}>
          <Image source={{ uri: image }} style={styles.add} />
        </View>
      ) : (
        <View style={styles.container2}>
          <TouchableOpacity onPress={handleChoosePhoto}>
            <Image source={require('../../assets/add.png')} style={styles.add} />
          </TouchableOpacity>
         </View>
      )}
      <Text style={[styles.Note]}>This picture will apper in your profile</Text>
      <SquareButton onPress={handleWelcomePress} title="let's Start" />
        </View>
    
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
      },
      container1: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        marginBottom: 90,
        
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
        top: 70,
        left: 110,
        fontSize: 40,
        marginRight: 7,
      },
      Back: {
        position: 'absolute',
        left: 7,
        top: 25,
        width: 50,
        height: 50,
      },
    
      TitleI:{
        left:30,
        fontSize:20,
        marginTop:5,
        marginBottom:5,
        color:'#808080',
      },
      container2:{
        alignItems: 'center',
        backgroundColor:'#EFF1F0',
        top:40,
        height:250,
        width:350,
        left:25,
        borderRadius:10,
      },
      add:{
        top:40,
        width:150,
        height:150,
      },
      Note:{
         top:50,
         left:25,
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
        top:3,
        textAlign: 'center',
        fontSize:25,
        left:-5,
      },
});
export default SignUpCon
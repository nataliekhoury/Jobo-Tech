import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InterviewMentorScreen from './src/screens/InterviewMentorScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, SignUp , Welcome , SignUpCon} from './src/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName= 'Welcome'
      >
      <Stack.Screen 
      name='Welcome'
      component={Welcome}
      options={{
        headerShown: false
      }}></Stack.Screen>
      <Stack.Screen
      name='Login'
      component={Login}
      options={{
        headerShown: false
      }}>
      </Stack.Screen>
      <Stack.Screen
      name='SignUp'
      component={SignUp}
      options={{
        headerShown: false
      }}>
       </Stack.Screen>
       <Stack.Screen
      name='SignUpCon'
      component={SignUpCon}
      options={{
        headerShown: false
      }}>
       </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

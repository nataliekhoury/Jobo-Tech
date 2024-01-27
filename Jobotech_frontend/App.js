import React from 'react';
import { Text, SafeAreaView, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/loginScreen';
import CallScreen from './src/screens/callScreen';

// // Example LoginScreen component
// const LoginScreen = () => {
//   return (
//     <SafeAreaView>
//       <Text>Login Screen</Text>
//     </SafeAreaView>
//   );
// };

// // Example CallScreen component
// const CallScreen = () => {
//   return (
//     <SafeAreaView>
//       <Text>Call Screen</Text>
//     </SafeAreaView>
//   );
// };

const Stack = createStackNavigator();

AppRegistry.registerComponent(
  'YourAppName', // Replace with your app's name
  () => App
);

export default function App() {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Call" component={CallScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
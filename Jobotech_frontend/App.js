import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InterviewMentorScreen from './src/screens/InterviewMentorScreen';
import ChatScreen from './src/screens/Chat/ChatScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* put the screen that you coded here */}
      {/* <InterviewMentorScreen/> */}
    <ChatScreen/>      
      {/* <StatusBar style="auto" /> */}
    </View>
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

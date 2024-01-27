import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InterviewMentorScreen from './src/screens/InterviewMentorScreen';
export default function App() {
  return (
    <View style={styles.container}>
      {/* put the screen that you coded here */}
      <InterviewMentorScreen/>
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

// 'import { AuthProvider } from './AuthContext'; // Update the path accordingly

// const App = () => {
//   return (
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   );
// };

// const AppContent = () => {
//   const { mentorId } = useAuth();

//   return (
//     <View style={styles.container}>
//       <StudentsList mentorId={mentorId} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios';

const InterviewMentorScreen = () => {
  const [studentsD, setStudents] = useState([]);
  const mentorId = '65afe503f4ccf4426a8e8128';
  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const mentorResponse = await axios.get(`http://172.30.240.1:3000/mentors/${mentorId}`);
        const studentList = mentorResponse.data.studentList || [];

        const studentPromises = studentList.map(async (studentId) => {
          try {
            const studentResponse = await axios.get(`http://172.30.240.1:3000/students/${studentId}`);
            return studentResponse.data;
          } catch (error) {
            if (error.response && error.response.status === 404) {
              console.warn(`Student with ID ${studentId} not found.`);
              return null;
            }
            throw error;
          }
        });

        const validStudentDetails = await Promise.all(studentPromises);
        const filteredStudents = validStudentDetails.filter((student) => student !== null);
        setStudents(filteredStudents);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStudentDetails();
  }, [mentorId]);


  // const handleContactPress = (selectedStudent) => { //navigate handle for the userchat 
  //   navigation.navigate("UserChat", { selectedStudent });
  // };


  return (
    <SafeAreaView>
    <View >
      <View style={{ top: '50%' }}>
        <Image source={require('../../assets/interviewBackground.png')} style={styles.ImageBackground} />
        <Text style={styles.interviewText}>Interview</Text>
        <Text style={styles.requestsText}>Requests</Text>
      </View>
      <View>
      <Text  style={{ top: '850%',left:18,fontSize:18, color:'rgba(0, 0, 0, 0.68)'}} >List of students that Requests for interview :</Text>

      </View>
      <FlatList
       style={{top:'25%'}}
        data={studentsD}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.studentItem}>
            <View style={styles.studentBox}>
              <Text style={styles.studentName}>{item.username}</Text>
              <TouchableOpacity  style={styles.buttonStyle}>
              <Image style={styles.contact} source={require('../../assets/group2.png')} />
              </TouchableOpacity>
                {item.imgUrl && <Image style={styles.studentImage} source={{ uri: item.imgUrl }} />}

              <Text style={styles.studentDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    marginTop: '-105%',
    alignItems: 'center',
    alignContent: 'center',
  },
  interviewText: {
    position: 'absolute',
    bottom: '100%',
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    left: 130,
    bottom: 350,
    shadowOffset: {
      width: 6,
      height: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10.0,
    elevation: 111,
  },
  requestsText: {
    position: 'absolute',
    bottom: '90%',
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    left: 160,
    bottom: 310,
    shadowOffset: {
      width: 6,
      height: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10.0,
    elevation: 111,
  },
  container: {
    flex: 1,  },

  second: {
    fontSize: 18,
    bottom: 510,
  },
  studentItem: {
    marginBottom: 16,
  },
  studentBox: {
    borderWidth: 2,
    borderColor: '#FD7294',
    padding:10,
    borderRadius: 20,
    width:400,
    left:12,
    bottom:-10,

  },
  studentName: {
    fontSize: 15,
    fontWeight: 'normal',
    marginBottom: 8,
    left:60,
  },
  studentDescription: {
    fontSize: 14,
    color: 'gray',
    left:60,

  },
  contact:{
    marginLeft:300,
    marginTop:-20,
  },
  studentImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginVertical: -25,
    bottom:10,
  },

});

export default InterviewMentorScreen;
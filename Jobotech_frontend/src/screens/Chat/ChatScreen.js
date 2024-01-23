import { View, Text, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMsg = async () => {
      try {
        const response = await axios.get('http://10.0.0.47:3000/chat/1/2');
        setData(response.data);
        console.log('Data:', response.data);
      } catch (error) {
        console.error('Error fetching data!', error.message);
      }
    };

    fetchMsg();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <View style={{ top: '50%' }}>
          <Image source={require('../../../assets/messageBack.jpg')} style={styles.ImageBackground} />
          <Text style={styles.message}>Messages</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View key={item._id}>
              <Text style={styles.recent}>{item.text}</Text>
            </View>
          )}
        />

        <View>
          <Image source={require('../../../assets/smallCard.jpg')} style={styles.recentBack} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    marginTop: '-80%',
    alignItems: 'center',
    alignContent: 'center',
  },
  message: {
    position: 'absolute',
    marginTop: '106%',
    fontSize: 38,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    left: 130,
    bottom: -25,
  },
  recent: {
    color: '#8F8D8D',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    left: -90,
    fontSize: 20,
  },
  recentBack: {
    top: '-100%',
    left: 40,
  },
});

export default ChatScreen;

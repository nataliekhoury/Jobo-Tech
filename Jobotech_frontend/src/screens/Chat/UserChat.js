// src/ChatScreen.js

import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text, Image, StyleSheet } from 'react-native';

const UserChat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hello!', sender: 'user', createdAt: new Date(), avatar: 'https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=' },
        { id: 2, text: 'Hi there!', sender: 'other', createdAt: new Date(), otherAvatar: 'https://img.freepik.com/premium-photo/young-happy-attractive-asian-student-smiling-camera_1439-173.jpg'},
      ]);
  const [newMessage, setNewMessage] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Update the current date when the component mounts
    updateCurrentDate();
  }, []);

  const updateCurrentDate = () => {
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
    setCurrentDate(formattedDate);
  };

  const handleSend = () => {
    if (newMessage.trim() === '') return;

    const updatedMessages = [
      ...messages,
      {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        createdAt: new Date(),
        avatar: 'https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=', // Replace with the actual URL

      },
    ];
    setMessages(updatedMessages);
    setNewMessage('');
  };

  const otherParticipantName = 'Student 1'; // Replace with the actual name

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity >    
        <Image source={require('../../../assets/backIcon.png')} style={styles.iconStyle} />
        </TouchableOpacity>
     
        <Image source={{ uri: messages[messages.length - 1].otherAvatar }} style={styles.avatar} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{otherParticipantName}</Text>
          {/* <Text style={styles.dateText}>{currentDate}</Text> */}
        </View>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        extraData={messages}
        renderItem={({ item }) => (
            <View
              style={[
                styles.messageContainer,
                { alignSelf: item.sender === 'user' ? 'flex-end' : 'flex-start',
                backgroundColor: item.sender === 'user' ? 'rgba(158, 158, 158, 0.17)' : '#FFFFFF',  },
              ]}
            >
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.messageContent}>
                <Text style={styles.messageText}>{item.text}</Text>
                <Text style={styles.dateText}>
                  {item.createdAt.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Text>
              </View>
              {item.sender === 'other' && (
                <Image source={{ uri: item.otherAvatar }} style={styles.otherAvatar} />
              )}
            </View>
          )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={{ color: 'black' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  iconStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // marginRight: 10,
    left: -65,


  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // backgroundColor: '#FD7294',
    borderRadius: 25,
    left: 60,
    
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  otherAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    left: -120,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    maxWidth: '80%',
    // backgroundColor: '#9E9E9E',
    elevation: 2,
  },
  messageContent: {
    marginLeft: 10,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // borderTopWidth: 1,
    // borderTopColor: '#ddd',
    // backgroundColor: '#fff',
    minWidth: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    borderRadius: 25,
    borderColor: 'rgba(253, 114, 148, 0.89)',
    borderWidth: 2,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'rgba(253, 114, 148, 0.89)',
    borderRadius: 80,
    
  },
});

export default UserChat;
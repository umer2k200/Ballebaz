import React from 'react';
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function CommunityScreen() {
  const router = useRouter();

  // Sample community messages
  const messages = [
    { username: 'Eagles', message: 'Had a great game today. Won bu 10 Wickets' },
    { username: 'Markhors', message: 'Team fought well.' },
    { username: 'Thunders', message: 'Any team available for sunday?' },
    { username: 'Kings', message: 'Our match got cancelled, we have a ground booking on Saturday 8-12 in Pasban. Any team available?' },
    
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/TeamOwnerHomeScreen')}>
          <Image source={require('@/assets/images/back_arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Community</Text>
      </View>

      {/* Community messages */}
      <ScrollView style={styles.messageContainer}>
        {messages.map((msg, index) => (
          <View key={index} style={styles.messageBox}>
            <Text style={styles.username}>{msg.username}</Text>
            <Text style={styles.message}>{msg.message}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Message Input Button */}
      <View style={styles.messageInputContainer}>
        <TouchableOpacity style={styles.messageButton}>
          <Image source={require('@/assets/images/message_icon.png')} style={styles.messageIcon} />
          <Text style={styles.messageButtonText}>Message</Text>
          <Image source={require('@/assets/images/send.png')} style={styles.sendIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 55,
    paddingBottom: 20,
    
  },
  backIcon: {
    width: 24,
    height: 24,
    marginLeft: 15,
    tintColor: '#fff',
  },
  headerText: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginRight:30,
  },
  messageContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  messageBox: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#1c1c1c', // Dark message box background
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  message: {
    fontSize: 14,
    color: '#b0b0b0', // Light grey text color
  },
  messageInputContainer: {
    padding: 10,
    backgroundColor: '#121212', // Dark background to blend with the main screen
    borderTopWidth: 1,
    borderColor: '#333333', // Border for the top
  },
  messageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444444', // Slightly lighter dark color for the button
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  messageIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#fff',
  },
  sendIcon:{
    width: 24,
    height: 24,
    marginLeft: 210,
    tintColor: '#fff',
  },
  messageButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

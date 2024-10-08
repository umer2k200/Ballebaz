import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Dimensions } from 'react-native'; // To use screen width for responsiveness
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons

export default function PlayerSettingsScreen() {
  const [username, setUsername] = useState('Islamabad United');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/TeamOwnerHomeScreen')}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      <Text style={styles.pageName}>Settings</Text>
</View>
      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
          placeholderTextColor="#999"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={true}
          placeholderTextColor="#999"
        />
      </View>

      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          placeholderTextColor="#999"
        />
      </View>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update Profile</Text>
      </TouchableOpacity>

      {/* New Attributes Button */}
      <TouchableOpacity style={styles.attributesButton} onPress={() => router.push('/TeamOwnerViewPlayers')}>
        <Text style={styles.attributesButtonText}>View Players</Text>
      </TouchableOpacity>

 {/* New Attributes Button */}
 <TouchableOpacity style={styles.attributesButton} onPress={() => router.push('/TeamOwnerHireCoach')}>
        <Text style={styles.attributesButtonText}>Hire Coach</Text>
      </TouchableOpacity>
      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => router.push('/Login')}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background color
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // Light text color for dark mode
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:50,
    marginBottom:50,
  },
  pageName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    flex: 1, // Makes sure the page name is centered
    
  },
  label: {
    fontSize: 16,
    color: '#bbb', // Softer color for labels
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#fff', // Light text color for dark mode
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  updateButton: {
    backgroundColor: '#005B41', // Teal color for the button
    padding: 15,
    borderRadius: 50, // Rounded buttons for aesthetic appeal
    alignItems: 'center',
    //marginBottom: 20,
  },
  updateButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  attributesButton: {
    backgroundColor: '#3498db', // Blue color for the Attributes button
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  attributesButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1e1e1e', // Dark navbar background
    paddingVertical: 7,
    borderTopLeftRadius: 50, // Extra rounded top corners for a sleek look
    borderTopRightRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 20,
    paddingHorizontal: 20,
  },
  navItem: {
    alignItems: 'center',
    padding: 10,
  },
  navIcon: {
    width: 25, // Slightly larger icons
    height: 25,
    tintColor: '#fff', // Light icon color
  },
  highlight: {
    position: 'absolute',
    bottom: 30, // Slightly raised pop-up effect
    backgroundColor: '#005B41', // Teal highlight
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00e676', // Bright shadow effect for the highlight
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
    borderColor: '#1e1e1e',  // Darker border color for contrast
    borderWidth: 5,
  },
});

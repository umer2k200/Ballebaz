import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Dimensions } from 'react-native'; // To use screen width for responsiveness

export default function CoachSettings() {
  const [username, setUsername] = useState('Muhammad Amir');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

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


      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => router.push('/Login')}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>



      {/* Fancy Navbar */}
      <View style={styles.navbar}>
        
        <TouchableOpacity style={styles.navItem} onPress={()=> router.push('/CoachAssignedPlayers')}>
            <Image source={require("@/assets/images/group.png")} style={styles.navIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/CoachUpcomingTrainingSessions")}
        >
          <Image
            source={require("@/assets/images/upcomingmatches.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/CoachHomePage")}
        >
          <Image
            source={require("@/assets/images/home.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/CoachManage&AssignDrills")}
        >
          <Image
            source={require("@/assets/images/assign.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <View style={styles.navItem}>
          <View style={styles.highlight}>
            <Image
              source={require("@/assets/images/settings.png")}
              style={styles.navIcon}
            />
          </View>
        </View>
      </View>
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
    fontSize: 33,
    fontWeight: 'bold',
    color: 'darkgrey', // Light text color for dark mode
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
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
    marginVertical: 7,
    width: '60%',
    justifyContent: 'center',
    alignSelf: 'center',
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
    marginVertical: 7,
    borderRadius: 50,
    width: '60%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
 
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#1e1e1e",
    paddingVertical: 7,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 20,
    paddingHorizontal: 20,
  },
  navItem: {
    alignItems: "center",
    padding: 10,
    paddingLeft: 0,
  },
  navIcon: {
    width: 25,
    height: 25,
    tintColor: "#fff",
  },
  highlight: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#005B41",
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#00e676",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
    borderColor: "#1e1e1e",
    borderWidth: 5,
  },
});

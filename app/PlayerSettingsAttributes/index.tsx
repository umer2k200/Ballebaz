import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation
import { useRouter } from 'expo-router';

export default function PlayerAttributesScreen() {
  const [role, setRole] = useState('');
  const [battingHand, setBattingHand] = useState('');
  const [bowlingHand, setBowlingHand] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [heightFeet, setHeightFeet] = useState('');

  const navigation = useNavigation(); // Hook to handle back navigation
  const router = useRouter();

  return (
    <>
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/PlayerSettings')}>
        <Image source={require('@/assets/images/back.png')} style={styles.navIcon} />
      </TouchableOpacity>

      <Text style={styles.title}>Attributes</Text>

      {/* Role Selection Container */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Role</Text>
        <View style={styles.buttonContainer}>
          {['Batter', 'Bowler', 'Batting Allrounder', 'Bowling Allrounder', 'Wicket Keeper Batter'].map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.button, role === item && styles.selectedButton]}
              onPress={() => setRole(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Batting and Bowling Hand Selection Container */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferred Hand</Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.handLabel}>Batting Hand:</Text>
          {['Right', 'Left'].map((hand) => (
            <TouchableOpacity
              key={hand}
              style={[styles.button, battingHand === hand && styles.selectedButton]}
              onPress={() => setBattingHand(hand)}
            >
              <Text style={styles.buttonText}>{hand}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.handLabel}>Bowling Hand:</Text>
          {['Right', 'Left'].map((hand) => (
            <TouchableOpacity
              key={hand}
              style={[styles.button, bowlingHand === hand && styles.selectedButton]}
              onPress={() => setBowlingHand(hand)}
            >
              <Text style={styles.buttonText}>{hand}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Age, Weight, Height Container */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Age, Weight, Height</Text>
        
        {/* Age Input */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Age"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
            placeholderTextColor="#999"
          />
          <Text style={styles.unit}>yrs</Text>
        </View>

        {/* Weight Input */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Weight"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
            placeholderTextColor="#999"
          />
          <Text style={styles.unit}>kg</Text>
        </View>



        {/* Height Input */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Height"
            keyboardType="numeric"
            value={heightFeet}
            onChangeText={setHeightFeet}
            placeholderTextColor="#999"
          />
          <Text style={styles.unit}>ft</Text>
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Attributes</Text>
      </TouchableOpacity>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background color
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // Light text color for dark mode
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 15,
    left:10,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 30,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#005B41', // Highlight color for selected options
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
  },
  handLabel: {
    fontSize: 16,
    color: '#bbb',  // Softer color for the label text
    marginBottom: 5,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#1e1e1e',
    fontSize: 16,
    color: '#fff', // Light text color for dark mode
    width: 70,
    textAlign: 'center',
  },
  unit: {
    color: '#bbb',
    marginHorizontal: 5,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#005B41', // Save button color
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: -28,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    padding: 10,
    marginTop: 15,
  },
  navIcon: {
    width: 25, // Slightly larger icons
    height: 25,
    tintColor: '#fff', // Light icon color
  },
});

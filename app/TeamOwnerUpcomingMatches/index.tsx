import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons

export default function UpcomingMatchesScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      
      <View style={styles.header}>
        <TouchableOpacity  onPress={() => router.push('/TeamOwnerHomeScreen')}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Upcoming Matches</Text>
</View>
      
    
    {/* Ongoing Match Container  */}
    <View style={styles.matchContainer}>
        <Text style={styles.matchTitle}>United:</Text>
        <Text style={styles.matchDetail2}>20/1 (4/20)</Text>
        <Text style={styles.matchTitle2}>vs</Text>
        <Text style={styles.matchTitle2}>Kings</Text>

        
        <Text style={styles.matchDetail}>Venue: Pasban Cricket Complex</Text>
      </View>

      {/* Match Container 1 */}
      <View style={styles.matchContainer}>
        <Text style={styles.matchTitle}>United vs Markhors</Text>
        <Text style={styles.matchDetail}>Date: 25th September, 2024</Text>
        <Text style={styles.matchDetail}>Time: 11:00 AM</Text>
        <Text style={styles.matchDetail}>Venue: Pasban Cricket Complex</Text>
      </View>

      {/* Match Container 2 */}
      <View style={styles.matchContainer}>
        <Text style={styles.matchTitle}>United vs Qalandars</Text>
        <Text style={styles.matchDetail}>Date: 26th September, 2024</Text>
        <Text style={styles.matchDetail}>Time: 7:00 AM</Text>
        <Text style={styles.matchDetail}>Venue: E9 Cricket Ground</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background color
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:20,
    marginBottom:20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // Light text color for dark mode
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 15,
    marginRight:23,
  },
  matchContainer: {
    backgroundColor: '#1e1e1e',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  matchTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // Light text color for dark mode
    marginBottom: 0,
  },
  matchTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // Light text color for dark mode
    marginBottom: 2,
    bottom:30,
  },
  matchDetail: {
    fontSize: 16,
    color: '#bbb',  // Softer color for the detail text
    marginBottom: 5,
  },
  matchDetail2: {
    fontSize: 16,
    marginLeft:210,
    bottom:27,
    color: '#bbb',  // Softer color for the detail text
    marginBottom: 5,
  },

  navIcon: {
    width: 25, // Icon size
    height: 25,
    tintColor: '#fff', // Light icon color
  },
});

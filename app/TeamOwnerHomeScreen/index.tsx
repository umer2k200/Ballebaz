import React, { useState } from 'react';
import { useRouter } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Dimensions } from 'react-native'; // To use screen width for responsiveness

export default function ProfileScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);

  // Toggle Modal Visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Picture */}
        <View style={styles.profilePicContainer}>
          <Image
            source={require('@/assets/images/Islu.jpg')} // Replace with your profile pic URL
            style={styles.profilePic}
          />
        </View>

        {/* Profile Name */}
        <Text style={styles.profileName}>Islamabad United</Text>
        {/* Profile Bio */}
        <Text style={styles.profileBio}>United We Win</Text>

        {/* Career Stats Card */}
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Stats</Text>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Matches Played</Text>
            <Text style={styles.statValue}>56</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Matches Won</Text>
            <Text style={styles.statValue}>41</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Matches Lost</Text>
            <Text style={styles.statValue}>15</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>W/L Ratio</Text>
            <Text style={styles.statValue}>73.2%</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Highest Score</Text>
            <Text style={styles.statValue}>247</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Most Runs</Text>
            <Text style={styles.statValue}>Alex Hales (145)</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Most Wickets</Text>
            <Text style={styles.statValue}> Rumman Raees (28)</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Captain</Text>
            <Text style={styles.statValue}>Shadab Khan</Text>
          </View>
        </View>
      </ScrollView>

      {/* Upcoming Matches Button */}
      <TouchableOpacity style={styles.matchesButton} onPress={() => router.push('/TeamOwnerUpcomingMatches')}>
        <Text style={styles.matchesButtonText}>Upcoming Matches</Text>
      </TouchableOpacity>

      {/* Fancy Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/TeamOwnerDrills')}>
          <Image
            source={require('@/assets/images/drills.png')} // Replace with your group icon URL
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/TeamOwnerBookGround')}>
          <Image
            source={require('@/assets/images/stadium.png')} // Replace with your group icon URL
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <View style={styles.navItem}>
          <View style={styles.highlight}>
            <Image
              source={require('@/assets/images/home.png')} // Replace with your home icon URL
              style={styles.navIcon}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/TeamOwnerTeamsRanking')}>
          <Image
            source={require('@/assets/images/ranking.png')} // Replace with your group icon URL
            style={styles.navIcon}
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={toggleModal}>
          <Image
            source={require('@/assets/images/more.png')} // Icon for opening modal
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Modal for expanded navigation */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.expandedNavbar}>
            <TouchableOpacity style={styles.navItemExpanded} onPress={() => { toggleModal(); router.push('/TeamOwnerGenerateKit'); }}>

              <Image
            source={require('@/assets/images/kit.png')} // Icon for opening modal
            style={styles.navIcon}
          />
          < Text style={styles.expandedNavText}>AI Kit Generation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItemExpanded} onPress={() => { toggleModal(); router.push('/TeamOwnerCommunity'); }}>
            <Image
            source={require('@/assets/images/community.png')} // Icon for opening modal
            style={styles.navIcon}
          />
          <Text style={styles.expandedNavText}>Community</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItemExpanded} onPress={() => { toggleModal(); router.push('/TeamOwnerHighlightsPage'); }}>
            <Image
            source={require('@/assets/images/cloud.png')} // Icon for opening modal
            style={styles.navIcon}
          />
          <Text style={styles.expandedNavText}>Highlights</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItemExpanded} onPress={() => { toggleModal(); router.push('/TeamOwnerSettings'); }}>
            <Image
            source={require('@/assets/images/settings.png')} // Icon for opening modal
            style={styles.navIcon}
          />
         < Text style={styles.expandedNavText}>Settings</Text>
            </TouchableOpacity>

            {/* Close button */}
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 100, // Add extra padding to avoid content being hidden behind the navbar
  },
  profilePicContainer: {
    borderRadius: 75,
    padding: 5,
    borderColor: '#00bfa5', // Teal border for a highlight effect
    borderWidth: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Adds shadow for Android
    marginBottom: 20,
    marginTop: 100
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75, // Circular profile picture
  },
  profileName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  profileBio: {
    fontSize: 16,
    color: '#00bfa5', // Teal color for bio to match the theme
    marginBottom: 20,
  },
  statsCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    padding: 20,
    width: '110%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // Adds shadow for Android
    marginBottom: 20, // Space between stats and navbar
  },
  statsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'white',
    textAlign: 'center',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  statLabel: {
    fontSize: 16,
    color: 'white',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  matchesButton: {
    backgroundColor: '#005B41', // Blue color for the Attributes button
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 15,
  },
  matchesButtonText: {
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
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  navItem: {
    alignItems: 'center',
    padding: 10,
  },
  highlight: {
    position: 'absolute',
    bottom: 35, // Slightly raised pop-up effect
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
  navIcon: {
    width: 35,
    height: 35,
    tintColor: '#fff', // Make icons white
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background

  },
  expandedNavbar: {
    width: '50%',
    backgroundColor: '#1e1e1e',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  navItemExpanded: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  expandedNavText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#005B41',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 15,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});


import React, { useState } from 'react';
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Modal, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons

interface Team {
  id: number;
  name: string;
  wins: number;
  losses: number;
}

const TeamRanking = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState<number | null>(null); // Manage expanded state
  const [isModalVisible, setModalVisible] = useState(false);

  // Toggle Modal Visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Sample team data
  const teams: Team[] = [
    { id: 1, name: 'Islamabad United', wins: 41, losses: 15 },
    { id: 2, name: 'Mumbai Indians', wins: 34, losses: 16 },
    { id: 3, name: 'Peshawar Zalmi', wins: 39, losses: 19 },
    { id: 4, name: 'Lahore Qalandars', wins: 30, losses: 21 },
    { id: 5, name: 'Nurpur Lions', wins: 33, losses: 20 },
  ];

  // Toggle expand/collapse for each team
  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  // Handle match request
  const sendMatchRequest = () => {
    Alert.alert('Match Request Sent!', 'Your match request has been sent successfully.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageName}>Team Rankings</Text>
      <ScrollView>
        {teams.map((team, index) => ( // Include index for ranking
          <View key={team.id} style={styles.teamContainer}>
            <TouchableOpacity onPress={() => toggleExpand(team.id)}>
              <Text style={styles.teamName}>
                {index + 1}. {team.name} {/* Add ranking number here */}
              </Text>
              <Text style={styles.winLossRatio}>
                W/L Ratio: {team.wins}/{team.losses}
              </Text>
            </TouchableOpacity>
            {expanded === team.id && (
              <View style={styles.expandedContainer}>
                <TouchableOpacity style={styles.requestButton} onPress={sendMatchRequest}>
                  <Text style={styles.requestButtonText}>Send Match Request</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/TeamOwnerDrills')}>
          <Image source={require('@/assets/images/drills.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/TeamOwnerBookGround')}>
          <Image source={require('@/assets/images/stadium.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/TeamOwnerHomeScreen')}>
          <Image source={require('@/assets/images/home.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <View style={styles.navItem}>
          <View style={styles.highlight}>
            <Image source={require('@/assets/images/ranking.png')} style={styles.navIcon} />
          </View>
        </View>
        <TouchableOpacity style={styles.navItem} onPress={toggleModal}>
          <Image source={require('@/assets/images/more.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>

      {/* Modal for Additional Navigation Options */}
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.expandedNavbar}>
            <TouchableOpacity style={styles.navItemExpanded} onPress={() => { toggleModal(); router.push('/TeamOwnerGenerateKit'); }}>
              <Image source={require('@/assets/images/kit.png')} style={styles.navIcon} />
              <Text style={styles.expandedNavText}>AI Kit Generation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItemExpanded} onPress={() => { toggleModal(); router.push('/TeamOwnerCommunity'); }}>
              <Image source={require('@/assets/images/community.png')} style={styles.navIcon} />
              <Text style={styles.expandedNavText}>Community</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItemExpanded} onPress={() => { toggleModal(); router.push('/TeamOwnerHighlightsPage'); }}>
              <Image source={require('@/assets/images/cloud.png')} style={styles.navIcon} />
              <Text style={styles.expandedNavText}>Highlights</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItemExpanded} onPress={() => { toggleModal(); router.push('/TeamOwnerSettings'); }}>
              <Image source={require('@/assets/images/settings.png')} style={styles.navIcon} />
              <Text style={styles.expandedNavText}>Settings</Text>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  pageName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  teamContainer: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  teamName: {
    fontSize: 20,
    color: '#fff',
  },
  winLossRatio: {
    fontSize: 16,
    color: '#00e676',
  },
  expandedContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  requestButton: {
    backgroundColor: '#005B41',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  requestButtonText: {
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
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TeamRanking;

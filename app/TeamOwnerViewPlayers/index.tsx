import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons

// Define the Player type
type Player = {
  name: string;
  Role: string;
  battingStyle: string;
  bowlingStyle: string;

  battingAverage: number;
  bowlingEconomy: number;
};

export default function CoachAssignedPlayers() {
  const router = useRouter();
  const navigation = useNavigation();

  const assignedPlayers: Player[] = [
    {
      name: "Sanaullah Momin",
      Role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm medium',

        battingAverage: 50.06,
        bowlingEconomy: 6.08,
 
    },
    {
      name: "Ibrahim Saqib",
        Role: 'Bowler',
            battingStyle: 'Left-hand bat',
            bowlingStyle: 'Left-arm fast',
        
            battingAverage: 30.18,
            bowlingEconomy: 5.20,
     
      
    },
    {
      name: "Umar Zeeshan",
      Role: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm medium',
  
        battingAverage: 40.67,
        bowlingEconomy: 7.96,
   
    },
    {
      name: "Ahsan Iqbal",
      Role: 'Bowler',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm fast',
       
        battingAverage: 35.23,
        bowlingEconomy: 6.23,
 
    },
    {
      name: "Nasir Mehmood",
        Role: 'Batsman',
            battingStyle: 'Right-hand bat',
            bowlingStyle: 'Right-arm medium',
            
            battingAverage: 45.12,
            bowlingEconomy: 6.57,

    },

    {
      name: "Rohail Nazir",
        Role: 'Batsman',
            battingStyle: 'Right-hand bat',
            bowlingStyle: 'Right-arm Offspin',
            
            battingAverage: 25.2,
            bowlingEconomy: 8.3,

    },

    {
      name: "Omair Bin Yousaf",
        Role: 'Batsman',
            battingStyle: 'Right-hand bat',
            bowlingStyle: 'Right-arm Offspin',
            
            battingAverage: 31.2,
            bowlingEconomy: 8.5,

    },

    {
      name: "Shaheen Shah",
        Role: 'Bowler',
            battingStyle: 'Left-hand bat',
            bowlingStyle: 'Left-arm Fast',
            
            battingAverage: 11.6,
            bowlingEconomy: 4.1,

    },

    {
      name: "Ubaid Shah",
        Role: 'Bowler',
            battingStyle: 'Right-hand bat',
            bowlingStyle: 'Right-arm Fast',
            
            battingAverage: 1.2,
            bowlingEconomy: 5.9,

    },

    {
      name: "Usama Mir",
        Role: 'Bowler',
            battingStyle: 'Right-hand bat',
            bowlingStyle: 'Right-arm Legspin',
            
            battingAverage: 15.2,
            bowlingEconomy: 6.1,

    },

    {
      name: "Yasir Ali",
        Role: 'Batsman',
            battingStyle: 'Right-hand bat',
            bowlingStyle: 'Right-arm Offspin',
            
            battingAverage: 34.6,
            bowlingEconomy: 21.3,

    },

    {
      name: "Haider Ali",
        Role: 'Batsman',
            battingStyle: 'Right-hand bat',
            bowlingStyle: 'Right-arm Offspin',
            
            battingAverage: 29.4,
            bowlingEconomy: 8.7,

    },

    {
      name: "Adeel Ahmed",
        Role: 'Batsman',
            battingStyle: 'Right-hand bat',
            bowlingStyle: 'Right-arm Offspin',
            
            battingAverage: 45.2,
            bowlingEconomy: 9.3,

    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null); // Specify type for selectedPlayer

  const handlePlayerPress = (player: Player) => {
    // Specify type for player parameter
    setSelectedPlayer(player);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPlayer(null);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/TeamOwnerSettings')}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.pageName}>Current Players</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {assignedPlayers.map((player, index) => (
          <TouchableOpacity
            key={index}
            style={styles.playerCard}
            onPress={() => handlePlayerPress(player)}
          >
            <View style={styles.playerInfoContainer}>
              <Image
                source={require("@/assets/images/assignedplayer.png")}
                style={styles.playerImage}
              />
              <View style={styles.playerDetails}>
                <Text style={styles.playerName}>{player.name}</Text>
               
                <Text style={styles.RoleDetails}>Role: {player.Role}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Player Details Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            {selectedPlayer && (
              <>
                <Text style={styles.modalTitle}>{selectedPlayer.name}</Text>
                <Text style={styles.modalDetails}>
                  Role: {selectedPlayer.Role}
                </Text>
                <Text style={styles.modalDetails}>
                    Batting Style: {selectedPlayer.battingStyle}
                </Text>
                <Text style={styles.modalDetails}>
                   Bowling Style: {selectedPlayer.bowlingStyle}
                </Text>
                
                <Text style={styles.modalDetails}>
                    Batting avg: {selectedPlayer.battingAverage}
                </Text>
                <Text style={styles.modalDetails}>
                    Bowling economy: {selectedPlayer.bowlingEconomy}
                </Text>
                
              
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={closeModal}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingBottom: 100,
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
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 100,
  },
  titleContainer: {
    marginTop:70,
    marginBottom: 40,
    alignItems: "center",
  },
  pageTitle: {
    fontSize: 33,
    color: "darkgrey",
    fontWeight: "bold",
  },
  playerCard: {
    backgroundColor: "#005B41",
    borderRadius: 20,
    marginBottom: 25,
    padding: 10,
    width: "95%",
    alignSelf: "center",
  },
  playerInfoContainer: {
    flexDirection: "row", // Align image and text horizontally
    alignItems: "center",
  },
  playerImage: {
    width: 80,
    height: 80,
    marginRight: 10, // Add space between the image and the text
  },
  playerDetails: {
    flex: 1, // Take up the remaining space
  },
  playerName: {
    color: "#fff",
    fontSize: 18,
  },
  sessionDetails: {
    color: "#aaa",
    fontSize: 14,
  },
  RoleDetails: {
    color: "#ccc",
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
  },
  modalView: {
    width: "90%",
    backgroundColor: "#1e1e1e",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 15,
  },
  modalDetails: {
    color: "#aaa",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#005B41",
    borderRadius: 10,
    padding: 10,
    width:100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

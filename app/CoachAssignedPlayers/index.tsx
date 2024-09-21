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

// Define the Player type
type Player = {
  name: string;
  position: string;
  battingStyle: string;
  bowlingStyle: string;
  Team: string;
  battingAverage: number;
  bowlingEconomy: number;
  session: string;
  injury: string;
};

export default function CoachAssignedPlayers() {
  const router = useRouter();
  const navigation = useNavigation();

  const assignedPlayers: Player[] = [
    {
      name: "Sanaullah Momin",
      position: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm medium',
        Team: 'Pakistan',
        battingAverage: 50.06,
        bowlingEconomy: 6.08,
      session: "Cover Drive Session",
      injury: 'none',
    },
    {
      name: "Ibrahim Saqib",
        position: 'Bowler',
            battingStyle: 'Left-hand bat',
            bowlingStyle: 'Left-arm fast',
            Team: 'Pakistan',
            battingAverage: 30.18,
            bowlingEconomy: 5.20,
      session: "Fielding Session & Bowling",
      injury: 'none',
      
    },
    {
      name: "Umar Zeeshan",
      position: 'Batsman',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm medium',
        Team: 'Pakistan',
        battingAverage: 40.67,
        bowlingEconomy: 7.96,
      session: "Batting Practice",
      injury: 'right shoulder dislocated',
    },
    {
      name: "Ahsan Iqbal",
      position: 'Bowler',
        battingStyle: 'Right-hand bat',
        bowlingStyle: 'Right-arm fast',
        Team: 'Pakistan',
        battingAverage: 35.23,
        bowlingEconomy: 6.23,
      session: "Batting Practice",
      injury: 'leg injured',
    },
    {
      name: "Nasir Mehmood",
        position: 'Batsman',
            battingStyle: 'Right-hand bat',
            bowlingStyle: 'Right-arm medium',
            Team: 'Pakistan',
            battingAverage: 45.12,
            bowlingEconomy: 6.57,
      session: "Batting Practice",
      injury: 'none',
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
      <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>Assigned Players</Text>
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
                <Text style={styles.sessionDetails}>{player.session}</Text>
                <Text style={styles.positionDetails}>Position: {player.position}</Text>
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
                  Position: {selectedPlayer.position}
                </Text>
                <Text style={styles.modalDetails}>
                    Batting Style: {selectedPlayer.battingStyle}
                </Text>
                <Text style={styles.modalDetails}>
                   Bowling Style: {selectedPlayer.bowlingStyle}
                </Text>
                <Text style={styles.modalDetails}>
                    Team: {selectedPlayer.Team}
                </Text>
                <Text style={styles.modalDetails}>
                    Batting avg: {selectedPlayer.battingAverage}
                </Text>
                <Text style={styles.modalDetails}>
                    Bowling economy: {selectedPlayer.bowlingEconomy}
                </Text>
                <Text style={styles.modalDetails}>
                  Training session: {selectedPlayer.session}
                </Text>
                <Text style={styles.modalDetails}>
                  Injury: {selectedPlayer.injury}
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

      {/* Fancy Navbar */}
      <View style={styles.navbar}>
        <View style={styles.navItem}>
          <View style={styles.highlight}>
            <Image
              source={require("@/assets/images/group.png")}
              style={styles.navIcon}
            />
          </View>
        </View>

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

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/CoachSettings")}
        >
          <Image
            source={require("@/assets/images/settings.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
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
  positionDetails: {
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
    paddingRight: 5,
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

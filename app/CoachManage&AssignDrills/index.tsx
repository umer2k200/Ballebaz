import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

// Define the Player and Drill types
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
  notes?:string;

};

type Drill = {
  id: number;
  name: string;
};

export default function CoachManageandAssignDrills() {
  const router = useRouter();

  const assignedPlayers: Player[] = [
    {
      name: "Sanaullah Momin",
      position: "Batsman",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm medium",
      Team: "Pakistan",
      battingAverage: 50.06,
      bowlingEconomy: 6.08,
      session: "Cover Drive Session",
      injury: "none",
      notes: "Needs to work on his cover drive",
    },
    {
      name: "Ibrahim Saqib",
      position: "Bowler",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Left-arm fast",
      Team: "Pakistan",
      battingAverage: 30.18,
      bowlingEconomy: 5.2,
      session: "Fielding Session & Bowling",
      injury: "none",
      notes: "Needs to work on his fielding and bowling",
    },
    {
      name: "Umar Zeeshan",
      position: "Batsman",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm medium",
      Team: "Pakistan",
      battingAverage: 40.67,
      bowlingEconomy: 7.96,
      session: "Batting Practice",
      injury: "right shoulder dislocated",
      notes: "Needs to work on Batting",
    },
    {
      name: "Ahsan Iqbal",
      position: "Bowler",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm fast",
      Team: "Pakistan",
      battingAverage: 35.23,
      bowlingEconomy: 6.23,
      session: "Batting Practice",
      injury: "leg injured",
      notes: "Needs to work on Pull"
    },
    {
      name: "Nasir Mehmood",
      position: "Batsman",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm medium",
      Team: "Pakistan",
      battingAverage: 45.12,
      bowlingEconomy: 6.57,
      session: "Batting Practice",
      injury: "none",
      notes: "Needs to work on Cover drive",
    },
  ];

  const drills: Drill[] = [
    { id: 1, name: "Batting Practice" },
    { id: 2, name: "Bowling Session" },
    { id: 3, name: "Fielding Drills" },
    { id: 4, name: "Fitness Training" },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [assignedDrill, setAssignedDrill] = useState<string | null>(null);
  const [drillDetails, setDrillDetails] = useState({
    duration: "",
    intensity: "",
    notes: "",
  });

  const handlePlayerPress = (player: Player) => {
    setSelectedPlayer(player);
    setModalVisible(true);
  };

  const handleDrillSelection = (drillName: string) => {
    setAssignedDrill(drillName);
  };

  const handleAssignDrill = () => {
    if (selectedPlayer && assignedDrill) {
      setSelectedPlayer({
        ...selectedPlayer,
        session: assignedDrill,
        notes: drillDetails.notes,
      });
      setModalVisible(false);
      setDrillDetails({ duration: "", intensity: "", notes: "" });
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPlayer(null);
    setDrillDetails({ duration: "", intensity: "", notes: "" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>Manage Drills</Text>
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
                <Text style={styles.positionDetails}>
                  Position: {player.position}
                </Text>
                <Text style={styles.notesDetails}>
                  Notes: {player.notes ? player.notes : "No notes yet"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Drills Selection Modal */}
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
                <Text style={styles.modalTitle}>
                  {selectedPlayer.name}
                </Text>

                {drills.map((drill) => (
                  <TouchableOpacity
                    key={drill.id}
                    style={styles.drillOption}
                    onPress={() => handleDrillSelection(drill.name)}
                  >
                    <Text style={styles.drillText}>{drill.name}</Text>
                  </TouchableOpacity>
                ))}
                <TextInput
                  style={styles.input}
                  placeholder="Duration (mins)"
                  placeholderTextColor="#aaa"
                  value={drillDetails.duration}
                  onChangeText={(text) =>
                    setDrillDetails({ ...drillDetails, duration: text })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Intensity (e.g. low, medium, high)"
                  placeholderTextColor="#aaa"
                  value={drillDetails.intensity}
                  onChangeText={(text) =>
                    setDrillDetails({ ...drillDetails, intensity: text })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Notes (optional)"
                  placeholderTextColor="#aaa"
                  value={drillDetails.notes}
                  onChangeText={(text) =>
                    setDrillDetails({ ...drillDetails, notes: text })
                  }
                />


                <TouchableOpacity
                  style={styles.assignButton}
                  onPress={handleAssignDrill}
                >
                  <Text style={styles.assignButtonText}>Assign Drill</Text>
                </TouchableOpacity>
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
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/CoachAssignedPlayers")}
        >
          <Image
            source={require("@/assets/images/group.png")}
            style={styles.navIcon}
          />
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

        <View style={styles.navItem}>
          <View style={styles.highlight}>
            <Image
              source={require("@/assets/images/assign.png")}
              style={styles.navIcon}
            />
          </View>
        </View>

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
    marginTop: 70,
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
    flexDirection: "row",
    alignItems: "center",
  },
  playerImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  playerDetails: {
    flex: 1,
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
  notesDetails: {
    color: "#ccc",
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalView: {
    width: "90%",
    backgroundColor: "#1e1e1e",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    color: "#fff",
    marginVertical: 15,
  },
  drillOption: {
    backgroundColor: "#005B41",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: "60%",
    alignItems: "center",
  },
  drillText: {
    color: "#fff",
    fontSize: 14,
  },
  input: {
    backgroundColor: "#333",
    borderRadius: 10,
    color: "#fff",
    padding: 10,
    marginTop: 10,
    width: "80%",
  },
  assignButton: {
    backgroundColor: "#005B41",
    borderRadius: 10,
    padding: 10,
    width: 150,
    alignItems: "center",
    marginTop: 20,
  },
  assignButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#e74c3c",
    borderRadius: 10,
    padding: 10,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginTop: 10,
    marginBottom: 20,
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

import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
  TextInput,
} from "react-native";

// Define the Session type
type Session = {
  playerName: string;
  sessionType: string;
  date: string;
  time: string;
  location: string;
  status: string;
};

export default function CoachTrainingSessions() {
  const router = useRouter();
  const navigation = useNavigation();

  // Sample data for training sessions
  const trainingSessions: Session[] = [
    {
      playerName: "Sanaullah Momin",
      sessionType: "Cover Drive Practice",
      date: "2024-09-24",
      time: "10:00 AM",
      location: "Field A",
      status: "Completed",
    },
    {
      playerName: "Ibrahim Saqib",
      sessionType: "Bowling Practice",
      date: "2024-09-25",
      time: "12:00 PM",
      location: "Field B",
      status: "Incompleted",
    },
    {
      playerName: "Umar Zeeshan",
      sessionType: "Batting Practice",
      date: "2024-09-26",
      time: "2:00 PM",
      location: "Field C",
      status: 'Incompleted'
    },
    {
      playerName: "Muneeb Ahmed",
      sessionType: "Fielding Practice",
      date: "2024-09-27",
      time: "4:00 PM",
      location: "Field D",
      status: 'Completed',
    },
    {
      playerName: "Ibrahim Nasir",
      sessionType: "Batting Practice",
      date: "2024-10-17",
      time: "5:00 PM",
      location: "Field C",
      status: 'Incompleted',
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [newSession, setNewSession] = useState<Partial<Session>>({});

  const filteredSessions = trainingSessions.filter(
    (session) =>
      session.playerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.sessionType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddSession = () => {
    // Logic to handle adding a new session (you can modify this for real backend functionality)
    if (
      newSession.playerName &&
      newSession.sessionType &&
      newSession.date &&
      newSession.time &&
      newSession.location
    ) {
      trainingSessions.push(newSession as Session);
      setModalVisible(false);
      setNewSession({});
    } else {
      alert("Please fill in all the fields");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>Training Sessions</Text>
      </View>

      {/* Search Filter */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search sessions..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredSessions.map((session, index) => (
          <View key={index} style={styles.sessionCard}>
            <Text style={styles.sessionInfo}>
              Player:{" "}
              <Text style={styles.sessionInfo2}>{session.playerName}</Text>
            </Text>
            <Text style={styles.sessionInfo}>
              Session:{" "}
              <Text style={styles.sessionInfo3}>{session.sessionType}</Text>
            </Text>
            <Text style={styles.sessionInfo}>
              Date: <Text style={styles.sessionInfo3}>{session.date}</Text> |
              Time: <Text style={styles.sessionInfo3}>{session.time}</Text>
            </Text>
            <Text style={styles.sessionInfo}>
              Location:{" "}
              <Text style={styles.sessionInfo3}>{session.location}</Text>
            </Text>
            <Text style={styles.sessionInfo}>
              Status:{" "}
              <Text style={styles.sessionInfo3}>{session.status}</Text>
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Button to Add New Session */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Next Session</Text>
      </TouchableOpacity>

      {/* Modal for Adding a New Session */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Add next session</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Player Name"
              placeholderTextColor="#888"
              value={newSession.playerName || ""}
              onChangeText={(text) =>
                setNewSession({ ...newSession, playerName: text })
              }
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Session Type"
              placeholderTextColor="#888"
              value={newSession.sessionType || ""}
              onChangeText={(text) =>
                setNewSession({ ...newSession, sessionType: text })
              }
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Date"
              placeholderTextColor="#888"
              value={newSession.date || ""}
              onChangeText={(text) =>
                setNewSession({ ...newSession, date: text })
              }
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Time"
              placeholderTextColor="#888"
              value={newSession.time || ""}
              onChangeText={(text) =>
                setNewSession({ ...newSession, time: text })
              }
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Location"
              placeholderTextColor="#888"
              value={newSession.location || ""}
              onChangeText={(text) =>
                setNewSession({ ...newSession, location: text })
              }
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.addButtonModal}
                onPress={handleAddSession}
              >
                <Text style={styles.addButtonTextModal}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
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

        <View style={styles.navItem}>
          <View style={styles.highlight}>
            <Image
              source={require("@/assets/images/upcomingmatches.png")}
              style={styles.navIcon}
            />
          </View>
        </View>

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
  titleContainer: {
    marginTop: 70,
    marginBottom: 20,
    alignItems: "center",
  },
  pageTitle: {
    fontSize: 33,
    color: "darkgrey",
    fontWeight: "bold",
  },
  searchContainer: {
    marginBottom: 30,
  },
  searchInput: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    color: "#fff",
    paddingHorizontal: 20,
    height: 40,
  },
  scrollContainer: {
    alignItems: "center",
  },
  sessionCard: {
    backgroundColor: "#1e1e1e",
    borderRadius: 20,
    padding: 15,
    width: "95%",
    marginBottom: 15,
  },
  sessionInfo: {
    color: "white",
    fontSize: 16,
  },
  sessionInfo2: {
    color: "#005B41",
    fontWeight: "bold",
  },
  sessionInfo3: {
    color: "darkgrey",
  },
  addButton: {
    backgroundColor: "#005B41",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
    padding: 35,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 30,
  },
  modalInput: {
    backgroundColor: "#333",
    borderRadius: 10,
    color: "#fff",
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },

  closeButton: {
    backgroundColor: "#f00",
    borderRadius: 10,
    padding: 10,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  addButtonModal: {
    backgroundColor: "#005B41",
    borderRadius: 10,
    padding: 10,
    width: 100,
    marginRight:15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  addButtonTextModal: {
    color: "#fff",
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: "row",
    
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

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
  Dimensions,
} from "react-native";

export default function CoachHomeScreen() {
  const router = useRouter();
  const navigation = useNavigation(); // Used to navigate between screens

  const assignedPlayers = [
    { name: "Momin", session: "Cover Drive Session" },
    { name: "Ibrahim", session: "Fielding Session & Bowling" },
    { name: "Umar", session: "Batting Practice" },
    { name: "Ahsan", session: "Batting Practice" },
    { name: "Nasir", session: "Batting Practice" }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>
          Welcome, <Text style={styles.coachText}>Coach!</Text>
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Assigned Players Section */}
        <TouchableOpacity style={styles.section} onPress={() => router.push("/CoachAssignedPlayers")}>
          <Text style={styles.sectionTitle}>Assigned Players</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {assignedPlayers.map((player, index) => (
              <TouchableOpacity key={index} onPress={() => router.push("/CoachAssignedPlayers")}>
                <View style={styles.playerCard}>
                  <Image
                    source={require("@/assets/images/assignedplayer.png")} // Replace with player image URL
                    style={styles.playerImage}
                  />
                  <Text style={styles.playerName}>{player.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </TouchableOpacity>

        {/* Training Sessions Section */}
        <TouchableOpacity style={styles.section} onPress={() => router.push("/CoachUpcomingTrainingSessions")}>
          <Text style={styles.sectionTitle}>Training Sessions</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {assignedPlayers.map((player, index) => (
              <TouchableOpacity key={index} style={styles.sessionCard} onPress={() => router.push("/CoachUpcomingTrainingSessions")}>
                <Image
                  source={require("@/assets/images/assignedplayer.png")} // Replace with player image URL
                  style={styles.sessionImage}
                />
                <Text style={styles.sessionName}>{player.name}</Text>
                <Text style={styles.sessionDetails}>{player.session}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </TouchableOpacity>
      </ScrollView>

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

        <View style={styles.navItem}>
          <View style={styles.highlight}>
            <Image
              source={require("@/assets/images/home.png")}
              style={styles.navIcon}
            />
          </View>
        </View>

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
    backgroundColor: "#121212", // Dark background color
    paddingHorizontal: 25,
    paddingBottom: 100,
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 100, // Padding to avoid navbar overlap
  },
  section: {
    marginBottom: 20,
    width: "100%",
  },
  titleContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 33,
    color: 'darkgrey', // General text color (white or any color)
    fontWeight: 'bold',
  },
  coachText: {
    color: '#005B41', // Green color for 'Coach'
  },
  sectionTitle: {
    color: "darkgrey",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 30,
    textAlign: "center",
  },
  playerCard: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    marginRight: 10,
    paddingVertical: 15,
    alignItems: "center",
    width: 120,
  },
  playerImage: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  playerName: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  sessionCard: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    marginRight: 10,
    padding: 18,
    alignItems: "center",
    width: 150,
  },
  sessionImage: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  sessionName: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  sessionDetails: {
    color: "#aaa",
    fontSize: 14,
    textAlign: "center",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#1e1e1e", // Dark navbar background
    paddingVertical: 7,
    borderTopLeftRadius: 50, // Extra rounded top corners for a sleek look
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
  },
  navIcon: {
    width: 25,
    height: 25,
    tintColor: "#fff",
  },
  highlight: {
    position: "absolute",
    bottom: 30, // Slightly raised pop-up effect
    backgroundColor: "#005B41", // Teal highlight
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#00e676", // Bright shadow effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
    borderColor: "#1e1e1e",
    borderWidth: 5,
  },
});

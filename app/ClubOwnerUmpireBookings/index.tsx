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
  Modal,
} from "react-native";

export default function ClubOwnerUmpireBookings() {
  const router = useRouter();
  const navigation = useNavigation(); // Used to navigate between screens

  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showUmpireModal, setShowUmpireModal] = useState(false);
  const [assignedUmpire, setAssignedUmpire] = useState("");

  // Sample data for bookings and available umpires
  type Booking = {
    id: number;
    date: string;
    time: string;
    ground: string;
    teamA: string;
    teamB: string;
    status: string;
    umpire: string;
    revenue: string;
  };
  
  const recentBookings = [
    { id: 1, date: "2024-09-23", time: "10:00 AM", ground: "Ground A", teamA: "Team A", teamB: "Team B", status: "Pending", umpire: "", revenue: "1000" },
    { id: 2, date: "2024-09-24", time: "2:00 PM", ground: "Ground B", teamA: "Team A", teamB: "Team B", status: "Pending", umpire: "", revenue: "1000" },
    { id: 3, date: "2024-09-25", time: "6:00 PM", ground: "Ground C", teamA: "Team A", teamB: "Team B", status: "Pending", umpire: "", revenue: "1000" },
  ];
  type Umpire = {
    id: number;
    name: string;
  };
  const umpires = [
    { id: 1, name: "Umpire A" },
    { id: 2, name: "Umpire B" },
    { id: 3, name: "Umpire C" },
  ];

  const groundDetails = {
    groundName: "Gawadar Ground",
    location: "Gawadar",
    capacity: 5000,
  };
  const handleAssignUmpire = (umpire: Umpire) => {
    setAssignedUmpire(umpire.name);
    setShowUmpireModal(false);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>
          Book <Text style={styles.coachText}>Umpire</Text>
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        

        {/* Recent Bookings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Bookings</Text>
          {recentBookings.map((booking) => (
            <TouchableOpacity
              key={booking.id}
              style={styles.bookingCard}
              onPress={() => {
                setSelectedBooking(booking); // `booking` now matches the Booking type
                setShowUmpireModal(true);
              }}
            >
              <Text style={styles.bookingText}>
                {booking.teamA} vs {booking.teamB} - {booking.ground}
              </Text>
              <Text style={styles.bookingText}>
                {booking.time}, {booking.date}
              </Text>
              <Text style={styles.bookingText}>
                Umpire: {booking.umpire || "Not Assigned"}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={() => router.push("/ClubOwnerGroundBookings")}
          >
            <Text style={styles.viewAllText}>View All Bookings</Text>
          </TouchableOpacity>
        </View>

        {/* Modal to select Umpire */}
        {showUmpireModal && (
          <Modal
            transparent={true}
            animationType="slide"
            visible={showUmpireModal}
            onRequestClose={() => setShowUmpireModal(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Umpire</Text>
                {umpires.map((umpire) => (
                  <TouchableOpacity
                    key={umpire.id}
                    style={styles.umpireOption}
                    onPress={() => handleAssignUmpire(umpire)}
                  >
                    <Text style={styles.umpireText}>{umpire.name}</Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setShowUmpireModal(false)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </ScrollView>

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
          onPress={() => router.push("/ClubOwnerGroundBookings")}
        >
          <Image
            source={require("@/assets/images/upcomingmatches.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/ClubOwnerHomePage")}
        >
          <Image
            source={require("@/assets/images/home.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/ClubOwnerRevenue")}
        >
          <Image
            source={require("@/assets/images/money.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/ClubOwnerSettings")}
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
    paddingBottom: 30,
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
    marginBottom: 20,
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
    marginVertical: 20,
    textAlign: "center",
  },
  bookingCard: {
    backgroundColor: "#005B41",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: "100%",
    justifyContent:"center",
  },
  bookingText: {
    color: "#fff",
    fontSize: 16,
  },
  viewAllButton: {
    marginTop: 20,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal:20,
    backgroundColor: "#005B41",
    borderRadius: 5,
  },
  viewAllText: {
    color: "#fff",
    fontSize: 16,
  },
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  cardText: {
    color: "lightgrey",
    fontSize: 16,
    textAlign: "center",
  },
  groundImage: {
    width:310,
    height:310,
    borderRadius: 15,
    marginBottom:20,
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    color: "lightgrey",
    marginBottom: 20,
  },
  umpireOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    backgroundColor: "#005B41",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  umpireText: {
    color: "#fff",
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ff6347",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

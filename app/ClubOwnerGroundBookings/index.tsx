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
  Button,
  TextInput,
} from "react-native";

export default function ClubOwnerGroundBookings() {
  const router = useRouter();
  const navigation = useNavigation(); // Used to navigate between screens

  // State for modal visibility, selected booking, and search filter
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchDate, setSearchDate] = useState(""); // State for date filter

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
    paid: boolean;
  };

  // Sample data for bookings
  const recentBookings = [
    {
      id: 1,
      date: "2024-09-23",
      time: "10:00 AM",
      ground: "Ground A",
      teamA: "Team A",
      teamB: "Team B",
      status: "Pending",
      umpire: "Umpire A",
      revenue: "1000",
      paid: false,
    },
    {
      id: 2,
      date: "2024-09-24",
      time: "2:00 PM",
      ground: "Ground B",
      teamA: "Team A",
      teamB: "Team B",
      status: "Confirmed",
      umpire: "Umpire A",
      revenue: "1500",
      paid: true,
    },
    {
      id: 3,
      date: "2024-09-25",
      time: "6:00 PM",
      ground: "Ground C",
      teamA: "Team A",
      teamB: "Team B",
      status: "Pending",
      umpire: "Umpire A",
      revenue: "1200",
      paid: false,
    },
  ];

  // Function to handle booking click (open modal with details)
  const handleBookingPress = (booking: Booking) => {
    setSelectedBooking(booking);
    setModalVisible(true);
  };

  // Function to filter bookings based on searchDate
  const filteredBookings = searchDate
    ? recentBookings.filter((booking) => booking.date === searchDate)
    : recentBookings;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>Ground Bookings</Text>
      </View>

      {/* Search Input for filtering by date */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by date (YYYY-MM-DD)"
          placeholderTextColor="#888"
          value={searchDate}
          onChangeText={(text) => setSearchDate(text)}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Recent Bookings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Bookings</Text>
          {filteredBookings.map((booking) => (
            <TouchableOpacity
              key={booking.id}
              style={styles.bookingCard}
              onPress={() => handleBookingPress(booking)}
            >
              <Text style={styles.bookingText}>
                {booking.teamA} vs {booking.teamB} - {booking.ground}
              </Text>
              <Text style={styles.bookingText}>
                {booking.time}, {booking.date}
              </Text>
              <Text style={styles.bookingText}>
                Status: {booking.status} | Payment:{" "}
                {booking.paid ? "Paid" : "Unpaid"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Booking Details Modal */}
      {selectedBooking && (
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Booking Details</Text>
              <Text style={styles.modalText}>
                Ground: {selectedBooking.ground}
              </Text>
              <Text style={styles.modalText}>
                Teams: {selectedBooking.teamA} vs {selectedBooking.teamB}
              </Text>
              <Text style={styles.modalText}>Time: {selectedBooking.time}</Text>
              <Text style={styles.modalText}>Date: {selectedBooking.date}</Text>
              <Text style={styles.modalText}>
                Umpire: {selectedBooking.umpire}
              </Text>
              <Text style={styles.modalText}>
                Revenue: {selectedBooking.revenue}
              </Text>
              <Text style={styles.modalText}>
                Status: {selectedBooking.status}
              </Text>
              <Text style={styles.modalText}>
                Payment: {selectedBooking.paid ? "Paid" : "Unpaid"}
              </Text>
              

              <TouchableOpacity
                  style={styles.paymentButton}
                  
                >
                  <Text style={styles.paymentButtonText}>Payment Done</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>

            </View>
          </View>
        </Modal>
      )}

      {/* Fancy Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/ClubOwnerUmpireBookings")}
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
    backgroundColor: "#121212",
    paddingHorizontal: 25,
    paddingBottom: 30,
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 100,
  },
  section: {
    marginBottom: 20,
    width: "100%",
  },
  titleContainer: {
    marginTop: 80,
    alignItems: "center",
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 33,
    color: "darkgrey",
    fontWeight: "bold",
  },
  searchContainer: {
    marginBottom: 10,
    width: "100%",
  },
  searchInput: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    color: "#fff",
    paddingHorizontal: 20,
    height: 40,
    width: "100%",
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
  },
  bookingText: {
    color: "#fff",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)", // Semi-transparent background
  },
  modalView: {
    width: "90%",
   
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
    fontSize: 35,
    color: "#005B41",
    marginBottom: 15,
    fontWeight: "bold",
  },
  modalText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  paymentButton: {
    backgroundColor: "#005B41",
    borderRadius: 10,
    padding: 10,
    width: 150,
    alignItems: "center",
    marginTop: 20,
  },
  paymentButtonText: {
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

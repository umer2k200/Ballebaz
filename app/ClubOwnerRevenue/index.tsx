import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { Dimensions, ScrollView } from "react-native"; // To use screen width for responsiveness

export default function ClubOwnerRevenue() {
  const router = useRouter();
  const [revenue, setRevenue] = useState(100000); // Total Revenue Example
  const [bookingDetails, setBookingDetails] = useState([
    { id: 1, date: "2024-09-25", amount: 5000, status: "Completed" },
    { id: 2, date: "2024-09-20", amount: 3000, status: "Pending" },
    { id: 3, date: "2024-09-15", amount: 4000, status: "Completed" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Revenue Details</Text>

      <View style={styles.summaryBox}>
        <Text style={styles.summaryText}>Total Revenue: Rs {revenue}</Text>
        <Text style={styles.subText}>Monthly Revenue: Rs {revenue / 12}</Text>
      </View>

      <ScrollView style={styles.scroll}>
        <Text style={styles.sectionTitle}>Recent Bookings</Text>
        {bookingDetails.map((booking) => (
          <View key={booking.id} style={styles.bookingBox}>
            <Text style={styles.bookingText}>Date: {booking.date}</Text>
            <Text style={styles.bookingText}>Amount: Rs {booking.amount}</Text>
            <Text style={styles.bookingText}>Status: {booking.status}</Text>
          </View>
        ))}
      </ScrollView>

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

        <View style={styles.navItem}>
          <View style={styles.highlight}>
            <Image
              source={require("@/assets/images/money.png")}
              style={styles.navIcon}
            />
          </View>
        </View>
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
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  scroll: {
    flex: 1,
    marginBottom: 20, // Adjust as necessary
  },

  title: {
    fontSize: 33,
    fontWeight: "bold",
    color: "darkgrey", // Light text color for dark mode
    textAlign: "center",
    marginTop: 80,
    marginBottom: 20,
  },
  summaryBox: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 20,
    color: "#00e676",
    fontWeight: "bold",
  },
  subText: {
    fontSize: 16,
    color: "#ccc",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 25,
    color: "darkgrey",
    marginVertical: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  bookingBox: {
    backgroundColor: "#1e1e1e",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  bookingText: {
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

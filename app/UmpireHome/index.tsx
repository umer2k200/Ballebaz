import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

// Define the Match type
type Match = {
  id: string;
  title: string;
  date: string;
  location: string;
  price: string;
  participants: string;
  paymentType: string;
  organizer: string;
};

// Dummy data for upcoming matches
const matchesData = [
  {
    id: '1',
    title: 'KKR vs Kings X1',
    date: '24 Sep 2024 10:45 PM',
    location: 'Murghzar Cricket Ground',
    price: 'Rs. 360',
    participants: '18/22',
    paymentType: 'Manual Payment',
    organizer: 'Sami azizi',
  },
  {
    id: '2',
    title: 'Thunder X1 vs Man City',
    date: '28 Sep 2024 11:00 PM',
    location: 'KRL Cricket Ground',
    price: 'Rs. 400',
    participants: '19/22',
    paymentType: 'Manual Payment',
    organizer: 'Umer Z',
  },
  // Add more matches if needed
];

const UmpireScreen = () => {
    const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleMatchPress = () => {
    router.push('/MatchDetails');
  };

  const handleViewAllPress = () => {
    router.push('/UmpireUpcomingMatches');
  };

  const renderMatchItem = ({ item }: { item: Match }) => (
    <TouchableOpacity 
    style={styles.matchCard}
    onPress={handleMatchPress}
    >
      <View style={styles.matchHeader}>
        <Image
          style={styles.matchImage}
          source={require('@/assets/images/upcomingMatchBoxpic.jpg')}
        />
        <View style={styles.matchDetails}>
          <Text style={styles.matchTitle}>{item.title}</Text>
          <Text style={styles.matchOrganizer}>by {item.organizer}</Text>
        </View>
        <Text style={styles.matchParticipants}>{item.participants}</Text>
      </View>
      <Text style={styles.matchDate}>{item.date}</Text>
      <Text style={styles.matchLocation}>{item.location}</Text>
      <Text style={styles.matchPrice}>
        {item.price} <Text style={styles.paymentType}>per person ({item.paymentType})</Text>
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#006837" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Welcome, Aleem Daar</Text>
        <View style={styles.headerIcons}>
          <Icon name="bar-chart" size={24} color="white" />
          <Icon name="notifications" size={24} color="white" style={styles.iconSpacing} />
          <Icon name="person-circle" size={24} color="white" />
        </View>
      </View>

      {/* Search by Date */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchLabel}>Search by Date</Text>
        
        <TouchableOpacity style={styles.datePicker}>
          <Icon name="calendar" size={20} color="white" />
          <Text style={styles.selectDateText}>{selectedDate || 'Select'}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.clearFilter}>Clear Filter</Text>
        </TouchableOpacity>
        </View>


      {/* Upcoming Matches */}
      <Text style={styles.upcomingMatchesTitle}>Upcoming Matches</Text>
      <TouchableOpacity
      onPress={handleViewAllPress}
      >
        <Text style={styles.viewAll}>View all</Text>
      </TouchableOpacity>

      <FlatList
        data={matchesData}
        horizontal
        renderItem={renderMatchItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.matchList}
      />

      {/* News and Events */}
      <TouchableOpacity style={styles.newsButton}>
        <Text style={styles.newsText}>Match History</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/UmpireHome")}
        >
          <Image
            source={require("@/assets/images/group.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/UmpireUpcomingMatches")}
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
          onPress={() => router.push("/UmpireHome")}
        >
          <Image
            source={require("@/assets/images/assign.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/UmpireSettings")}
        >
          <Image
            source={require("@/assets/images/settings.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#005b41',
    paddingTop: 30,
    paddingHorizontal: 16,
    paddingBottom: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginHorizontal: 16,
  },
  searchContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchLabel: {
    color: 'white',
    fontSize: 16,
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
  },
  selectDateText: {
    color: 'white',
    marginLeft: 8,
  },
  clearFilter: {
    color: '#f00',
    fontSize: 14,
  },
  upcomingMatchesTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  viewAll: {
    color: 'yellow',
    fontSize: 14,
    marginRight: 16,
    alignSelf: 'flex-end',
  },
  matchList: {
    marginVertical: 16,
    paddingLeft: 16,
  },
  matchCard: {
    backgroundColor: '#111',
    padding: 16,
    marginRight: 16,
    borderRadius: 8,
    width: 300,
    height: 220,
    borderWidth: 0.3,
    borderColor: '#fff',
  },
  matchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  matchImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  matchDetails: {
    flex: 1,
    marginLeft: 8,
  },
  matchTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  matchOrganizer: {
    color: 'grey',
    fontSize: 14,
  },
  matchParticipants: {
    color: '#00ff00',
    fontSize: 16,
    fontWeight: 'bold',
  },
  matchDate: {
    color: 'white',
    marginTop: 8,
  },
  matchLocation: {
    color: 'grey',
  },
  matchPrice: {
    color: 'white',
    marginTop: 8,
  },
  paymentType: {
    color: 'orange',
    fontSize: 12,
  },
  newsButton: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 8,
    position: 'absolute',
    bottom: 250, // Adjusted to move the button up from the bottom
    left: '50%',
    transform: [{ translateX: -100 }], // Centers the button
    width: 200, // Adjust the width if needed
  },
  newsText: {
    color: 'black',
    fontWeight: 'semibold',
    textAlign: 'center',
    fontSize: 18,
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

export default UmpireScreen;

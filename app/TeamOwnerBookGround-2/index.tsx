import React, { useState } from 'react';
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons

// Define the Ground interface
interface Ground {
  id: number;
  name: string;
  price: string;
  picture: any; // Use 'any' for local images
  availableTimes: string[];
  availableDates: string[];
}

// Sample ground data
const grounds: Ground[] = [
  {
    id: 1,
    name: 'Naval Ground',
    price: '3500 RS/hour',
    picture: require('@/assets/images/ground-1.jpeg'),
    availableTimes: ['10:00 AM', '12:00 PM', '02:00 PM'],
    availableDates: ['23/09/24', '24/09/24', '25/09/24'],
  },
  {
    id: 2,
    name: 'Pasban Ground',
    price: '2500 RS/hour',
    picture: require('@/assets/images/ground-2.jpeg'),
    availableTimes: ['09:00 AM', '11:00 AM', '03:00 PM'],
    availableDates: ['26/09/24', '27/09/24', '28/09/24'],
  },
];

export default function GroundBooking() {
  const [expanded, setExpanded] = useState<number | null>(null); // For managing expanded state
  const [selectedTime, setSelectedTime] = useState<string | null>(null); // For managing selected time
  const [selectedDate, setSelectedDate] = useState<string | null>(null); // For managing selected date
  const router = useRouter();
  // Toggle expand/collapse for each ground
  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id); // Toggle expansion for a particular ground
    setSelectedTime(null); // Reset selected time when changing ground
    setSelectedDate(null); // Reset selected date when changing ground
  };

  const bookGround = (id: number) => {
    if (selectedTime && selectedDate) {
      alert(`Ground with id ${id} has been booked for ${selectedTime} on ${selectedDate}!`);
    } else {
      alert('Please select a time and a date before booking.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button and Page Name */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/TeamOwnerBookGround')}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.pageName}>Ground Booking</Text>
      </View>

      {grounds.map((ground) => (
        <View key={ground.id} style={styles.groundContainer}>
          <TouchableOpacity onPress={() => toggleExpand(ground.id)}>
            <View style={styles.headerContainer}>
              <View>
                <Text style={[styles.groundName, expanded === ground.id && styles.groundNameExpanded]}>
                  {ground.name}
                </Text>
                <Text style={styles.groundPrice}>{ground.price}</Text>
              </View>

              <Image
                source={ground.picture}
                style={[styles.groundImage, expanded === ground.id && styles.groundImageExpanded]}
              />

              {/* Arrow down/up button */}
              <Icon
                name={expanded === ground.id ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                size={24}
                color="#fff"
              />
            </View>
          </TouchableOpacity>

          {expanded === ground.id && (
            <View style={styles.expandedContainer}>
              <Text style={styles.availableTimesLabel}>Available Times:</Text>
              {ground.availableTimes.map((time) => (
                <TouchableOpacity
                  key={time}
                  onPress={() => setSelectedTime(time)}
                  style={[styles.time, selectedTime === time && styles.selectedTime]}
                >
                  <Text style={{ color: selectedTime === time ? '#fff' : '#fff' }}>{time}</Text>
                </TouchableOpacity>
              ))}

              <Text style={styles.availableTimesLabel}>Available Dates:</Text>
              {ground.availableDates.map((date) => (
                <TouchableOpacity
                  key={date}
                  onPress={() => setSelectedDate(date)}
                  style={[styles.time, selectedDate === date && styles.selectedDate]}
                >
                  <Text style={{ color: selectedDate === date ? '#fff' : '#fff' }}>{date}</Text>
                </TouchableOpacity>
              ))}

              <TouchableOpacity
                style={styles.bookButton}
                onPress={() => bookGround(ground.id)}
              >
                <Text style={styles.bookButtonText}>Book Ground</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
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
  groundContainer: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  groundName: {
    fontSize: 18,
    color: '#fff',
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 10,
  },
  groundNameExpanded: {
    fontSize: 22,
  },
  groundPrice: {
    fontSize: 16,
    color: '#00e676',
  },
  groundImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  groundImageExpanded: {
    width: 150,
    height: 150,
  },
  expandedContainer: {
    marginTop: 10,
  },
  availableTimesLabel: {
    color: '#fff',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  time: {
    color: 'white',
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
  },
  selectedTime: {
    backgroundColor: '#005B41',
    color: '#fff',
  },
  selectedDate: {
    backgroundColor: '#005B41',
  },
  bookButton: {
    backgroundColor: '#005B41',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

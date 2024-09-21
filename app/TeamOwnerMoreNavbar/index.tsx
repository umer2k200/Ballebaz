import React from 'react';
import { useRouter } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function TeamOwnerTeamsRanking() {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('@/assets/images/back_arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>More Features</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Drills List */}
      <ScrollView contentContainerStyle={styles.drillList}>
        {/* Drill Item 1 */}
        <TouchableOpacity style={styles.drillItem}>
          <Image source={require('../../assets/images/d1.jpg')} style={styles.drillThumbnail} />
          <View style={styles.drillDetails}>
            <Text style={styles.drillTitle}>How to bowl Inswing - Brett Lee</Text>
          </View>
        </TouchableOpacity>

        {/* Drill Item 2 */}
        <TouchableOpacity style={styles.drillItem}>
          <Image source={require('../../assets/images/d2.jpg')} style={styles.drillThumbnail} />
          <View style={styles.drillDetails}>
            <Text style={styles.drillTitle}>How to inswing tapeball - Arsl</Text>
          </View>
        </TouchableOpacity>

        {/* Drill Item 3 */}
        <TouchableOpacity style={styles.drillItem}>
          <Image source={require('../../assets/images/d3.jpg')} style={styles.drillThumbnail} />
          <View style={styles.drillDetails}>
            <Text style={styles.drillTitle}>How to put reverse swing - cricket tag</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Navbar */}
      <View style={styles.navbar}>
        <View style={styles.navItem}>
          <View style={styles.highlight}>
            <Image
              source={require('@/assets/images/drills.png')}
              style={styles.navIcon}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/PlayerFitness')}>
          <Image source={require('@/assets/images/fitness.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/PlayerHomePage')}>
          <Image source={require('@/assets/images/home.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/PlayerCommunity')}>
          <Image source={require('@/assets/images/group.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/PlayerHighlightsPage')}>
          <Image source={require('@/assets/images/cloud.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/PlayerSettings')}>
          <Image source={require('@/assets/images/settings.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background for the drills section
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 55,
    backgroundColor: '#005B41',
  },
  backIcon: {
    width: 24,
    height: 24,
    marginLeft:15,
    tintColor: '#fff',
  },
  headerText: {
    flex: 1,
    fontSize: 30,
    paddingRight:35,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  searchContainer: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: '#005B41',
  },
  searchInput: {
    backgroundColor: '#1e1e1e',
    borderRadius: 20,
    height:35,
    paddingHorizontal: 15,
    color: '#000',
  },
  drillList: {
    paddingHorizontal: 15,
    paddingVertical:10
  },
  drillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  drillThumbnail: {
    width: 100,
    height: 50,
    borderRadius: 10,
  },
  drillDetails: {
    flex: 1,
    marginLeft: 20,
  },
  drillTitle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1e1e1e', // Dark navbar background
    paddingVertical: 7,
    borderTopLeftRadius: 50, // Extra rounded top corners for a sleek look
    borderTopRightRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 20,
    paddingHorizontal:20,
  },
  navItem: {
    alignItems: 'center',
    padding: 10,
  },
  navIcon: {
    width: 25, // Slightly larger icons
    height: 25,
    tintColor: '#fff', // Light icon color
  },
  highlight: {
    position: 'absolute',
    bottom: 30, // Slightly raised pop-up effect
    backgroundColor: '#005B41', // Teal highlight
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00e676', // Bright shadow effect for the highlight
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
    borderColor: '#1e1e1e',  // Darker border color for contrast
    borderWidth: 5,
  },
});

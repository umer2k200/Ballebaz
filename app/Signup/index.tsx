import { useState } from "react"; // Import useState for form handling
import { Link, useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import RNPickerSelect from "react-native-picker-select";
import { db } from "@/firebaseConfig"; // Import Firebase configuration
import { collection, addDoc } from "firebase/firestore"; // Firestore methods

export default function Signup() {
  const router = useRouter();

  // Define state variables for form inputs
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle the signup process
  const handleSignup = async () => {
    if (password.length < 8){
      Alert.alert("Error", "Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    if (role === "player") {
      const playerData = {
        name: username,
        username: username,
        phone_no: phone,
        role: "",
        password: password,
        player_id: "P" + Math.floor(Math.random() * 1000), 
        strike_rate: 0,
        fitness_status: "",
        matches_played: 0,
        best_bowling: "",
        economy: 0,
        highlights: [],
        team_id: "",
        preferred_hand: "",
        average: 0,
        training_sessions: [],
        assigned_drills: "",
        wickets_taken: 0,
        weight: 0,
        height: 0,
        age: 0,
        email: "",
        fiveWickets: 0,
      };
      try {
        // await addDoc(collection(db, "player"), playerData);
        const docRef = await addDoc(collection(db, "player"), playerData);
        console.log("Document written with ID: ", docRef.id);
        
        Alert.alert("Success", "Account created successfully!");
        router.push("/Login"); // Redirect to login after signup
      } catch (error) {
        console.error("Error adding document: ", error);
        Alert.alert("Error", "Failed to create account");
      }
      return;
    }

    if (role === "coach") {
      const coachData = {
        assigned_players: [],
        coach_id: "C" + Math.floor(Math.random() * 1000),
        coach_name: username,
        email: "",
        experience: 0,
        team_id: "",
        phone_no: phone,
        password: password,
      };
      try {
        // await addDoc(collection(db, "player"), playerData);
        const docRef = await addDoc(collection(db, "coach"), coachData);
        console.log("Document written with ID: ", docRef.id);
        
        Alert.alert("Success", "Account created successfully!");
        router.push("/Login"); // Redirect to login after signup
      } catch (error) {
        console.error("Error adding document: ", error);
        Alert.alert("Error", "Failed to create account");
      }
      return;
    }

    if (role === "umpire") {
      const umpireData = {
        umpire_id: "U" + Math.floor(Math.random() * 1000),
        umpire_name: username,
        email: "",
        matches_officiated: [],
        phone_no: phone,
        password: password,
      };
      try {
        // await addDoc(collection(db, "player"), playerData);
        const docRef = await addDoc(collection(db, "umpire"), umpireData);
        console.log("Document written with ID: ", docRef.id);
        
        Alert.alert("Success", "Account created successfully!");
        router.push("/Login"); // Redirect to login after signup
      } catch (error) {
        console.error("Error adding document: ", error);
        Alert.alert("Error", "Failed to create account");
      }
      return;
    }

    if (role === "club_owner") {
      const clubOwnerData = {
        clubOwner_id: "CO" + Math.floor(Math.random() * 1000),
        clubOwner_name: username,
        email: "",
        ground_id: "",
        revenue: 0,
        bookings: [],
        phone_no: phone,
        password: password,
      };
      try {
        // await addDoc(collection(db, "player"), playerData);
        const docRef = await addDoc(collection(db, "clubOwner"), clubOwnerData);
        console.log("Document written with ID: ", docRef.id);
        
        Alert.alert("Success", "Account created successfully!");
        router.push("/Login"); // Redirect to login after signup
      } catch (error) {
        console.error("Error adding document: ", error);
        Alert.alert("Error", "Failed to create account");
      }
      return;
    }

    
    

    
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/logo.png")} // Make sure to add your logo image in assets
        style={styles.logo}
      />
      <Text style={styles.title}>SIGN UP</Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="grey" />
        <TextInput
          placeholder="Username"
          placeholderTextColor={"grey"} // Contrast color
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="grey" />
        <TextInput
          placeholder="Phone no"
          placeholderTextColor={"grey"}
          style={styles.input}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* Role Input with Dropdown */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="grey" style={{ paddingBottom: 5 }} />
        <RNPickerSelect
          onValueChange={setRole}
          items={[
            { label: "Player", value: "player" },
            { label: "Coach", value: "coach" },
            { label: "Umpire", value: "umpire" },
            { label: "Club Owner", value: "club_owner" },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: "Select Role", value: null }}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="grey" />
        <TextInput
          placeholder="Password"
          placeholderTextColor={"grey"}
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="grey" />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor={"grey"}
          secureTextEntry
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword} 
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>

      {/* Google Sign-Up Button */}
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require("@/assets/images/google-icon.png")}
          style={styles.googleicon}
        />
        <Text style={styles.googleButtonText}>Sign up with Google</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/Login")}>
          <Text style={styles.signupButton}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  googleicon: {
    width: 20,
    height: 20,
    marginRight: 10, // Adds space between the icon and text
  },
  title: {
    fontSize: 24,
    color: "darkgrey",
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginBottom: 20,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    width: "80%", // Set a wider width for input fields
  },
  input: {
    flex: 1,
    color: "white",
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#005B41",
    padding: 10,
    borderRadius: 50,
    width: "60%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  googleButton: {
    backgroundColor: "#121212",
    flexDirection: "row", // Ensures the icon and text are in one line
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    width: "90%",
    justifyContent: "center", // Center content horizontally
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#DDD", // Optional styling for the button
  },
  googleButtonText: {
    fontSize: 18,
    color: "darkgrey",
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  signupText: {
    color: "darkgrey",
  },
  signupButton: {
    color: "#005B41",
  },
});

// Styles for the picker select
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: "black",
    width: "100%", // Make the picker span the width of the container
    textAlign: "left", // Align text to the left
    paddingRight: 30, // To ensure the text is never behind the icon
  },
  inputAndroid: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "black",
    width: "100%", // Make the picker span the width of the container
    textAlign: "left", // Align text to the left
    paddingRight: 30, // To ensure the text is never behind the icon
  },
});

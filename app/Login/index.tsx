import { useState } from "react";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import RNPickerSelect from "react-native-picker-select";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { db } from '@/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";
import CustomAlert from "@/components/CustomAlert";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");


  const handleLogin = async () => {
    if (!username || !password || !role) {
      setAlertMessage("Please fill all fields");
      setAlertVisible(true);
      return;
    }

    setLoading(true);

    try {
      let collectionName = "";

      switch (role) {
        case "player":
          collectionName = "player";
          break;
        case "coach":
          collectionName = "coach";
          break;
        case "umpire":
          collectionName = "umpire";
          break;
        case "club_owner":
          collectionName = "clubOwner";
          break;
        default:
          setAlertMessage("Invalid role selected");
          setAlertVisible(true);
          setLoading(false);
          return;
      }

      const userQuery = query(
        collection(db, collectionName),
        where("username", "==", username),
        where("password", "==", password)
      );

      const querySnapshot = await getDocs(userQuery);

      if (!querySnapshot.empty) {

        const userData = querySnapshot.docs[0].data();
        console.log("UserData: ", userData);
        await AsyncStorage.setItem("userData", JSON.stringify(userData));
        setAlertMessage("Welcome " + username + "!");
        setAlertVisible(true);
        setTimeout(() => {
          router.push("/PlayerHomePage");
        }, 1000);
      } else {
        setAlertMessage("Invalid username or password!");
        setAlertVisible(true);
      }
    } catch (error) {
      console.error("Error logging in: ", error);
      setAlertMessage("Login failed");
      setAlertVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const handleAlertConfirm = () => {
    setAlertVisible(false);
  };

  return (
    <View style={styles.container}>
      {loading ? ( 
        <View style={styles.loaderContainer}>
          <ActivityIndicator size='large' color='#005B41' />
        </View>
      ) : (
        <>
      <Image
        source={require("@/assets/images/logo.png")} // Make sure to add your logo image in assets
        style={styles.logo}
      />
      <Text style={styles.title}>SIGN IN</Text>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="grey" />
        <TextInput
          placeholder="Username"
          placeholderTextColor="grey" // Contrast color
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="grey" />
        <TextInput
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="grey" // Contrast color
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

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

      
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      {/* Google Sign-In Button */}
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require("@/assets/images/google-icon.png")}
          style={styles.googleicon}
        />
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>forgot password?</Text>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Not registered? </Text>
        <TouchableOpacity onPress={() => router.push("/Signup")}>
          <Text style={styles.signupButton}>Create account</Text>
        </TouchableOpacity>
      </View>
      </>
      )}
       <CustomAlert 
        visible={alertVisible} 
        message={alertMessage} 
        onConfirm={handleAlertConfirm} 
        onCancel={handleAlertConfirm}
      />
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
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:1000,
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
    marginBottom: 25,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    width: "85%",
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
    width: "40%",
    alignItems: "center",
    marginVertical:15,
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
    width: "80%",
    justifyContent: "center", // Center content horizontally
    marginBottom: 10,
    
    borderWidth: 1,
    borderColor: "#DDD", // Optional styling for the button
  },
  googleButtonText: {
    fontSize: 18,
    color: "darkgrey",
  },
  forgotPassword: {
    color: "darkgrey",
    marginBottom: 20,
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
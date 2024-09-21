import { Link, useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Login() {
  const router = useRouter();
  return (
    <View style={styles.container}>
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
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="grey" />
        <TextInput
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="grey" // Contrast color
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/TeamOwnerHomeScreen")}
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
    marginBottom: 25,
    marginHorizontal: 25,
    paddingHorizontal: 10,
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

import { Link, useRouter } from "expo-router";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';  // Import the picker component

export default function Signup() {
    const router = useRouter();

    return (
      <View style={styles.container}>
      <Image
        source={require('@/assets/images/logo.png')}  // Make sure to add your logo image in assets
        style={styles.logo}
      />
      <Text style={styles.title}>SIGN UP</Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="grey" />
        <TextInput
          placeholder="Username"
          placeholderTextColor={'grey'}  // Contrast color
          style={styles.input}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="grey" />
        <TextInput
          placeholder="Phone no"
          placeholderTextColor={'grey'} 
          style={styles.input}
        />
      </View>

      {/* Role Input with Dropdown */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="grey" style={{paddingBottom:5}} />
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Player', value: 'player' },
            { label: 'Coach', value: 'coach' },
            { label: 'Admin', value: 'admin' },
            { label: 'Umpire', value: 'umpire' },
            { label: 'Club Owner', value: 'club_owner' },
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
          placeholderTextColor={'grey'} 
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="grey" />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor={'grey'} 
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>
      
      {/* Google Sign-Up Button */}
      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('@/assets/images/google-icon.png')} style={styles.googleicon} />
        <Text style={styles.googleButtonText}>Sign up with Google</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/Login')}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  googleicon: {
    width: 20,
    height: 20,
    marginRight: 10,  // Adds space between the icon and text
  },
  title: {
    fontSize: 24,
    color: 'darkgrey',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 20,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    width: '80%',  // Set a wider width for input fields
  },
  input: {
    flex: 1,
    color: 'white',
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#005B41',
    padding: 10,
    borderRadius: 50,
    width: '60%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  googleButton: {
    backgroundColor: '#121212',
    flexDirection: 'row',  // Ensures the icon and text are in one line
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    width: '90%',
    justifyContent: 'center',  // Center content horizontally
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DDD',  // Optional styling for the button
  },
  googleButtonText: {
    fontSize: 18,
    color: 'darkgrey',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    color: 'darkgrey',
  },
  signupButton: {
    color: '#005B41',
  },
});

// Styles for the picker select
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: 'black', 
    width: '100%',  // Make the picker span the width of the container
    textAlign: 'left',  // Align text to the left
    paddingRight: 30, // To ensure the text is never behind the icon
  },
  inputAndroid: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: 'black', 
    width: '100%',  // Make the picker span the width of the container
    textAlign: 'left',  // Align text to the left
    paddingRight: 30, // To ensure the text is never behind the icon
  },
});

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../utils/firebase'; // Import your authentication module

const ProfileScreen = () => {
  const user = auth.currentUser; // Get the currently authenticated user

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      // Handle successful sign-out
    } catch (error) {
      // Handle error
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Email: {user.email}</Text>
      {/* Display other user information here */}
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProfileScreen;

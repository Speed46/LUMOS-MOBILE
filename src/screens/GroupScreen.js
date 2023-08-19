import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../utils/firebase'; // Import your authentication module

const GroupScreen = () => {
  const [groupName, setGroupName] = useState('');
  const [isMarketplaceEnabled, setIsMarketplaceEnabled] = useState(false);

  const handleCreateGroup = () => {
    // Implement logic to create a group and enable marketplace
    // You would interact with your database here to store the group details
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Group</Text>
      <TextInput
        style={styles.input}
        placeholder="Group Name"
        value={groupName}
        onChangeText={setGroupName}
      />
      <View style={styles.switchContainer}>
        <Text>Enable Marketplace:</Text>
        <Switch
          value={isMarketplaceEnabled}
          onValueChange={value => setIsMarketplaceEnabled(value)}
        />
      </View>
      <Button title="Create Group" onPress={handleCreateGroup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default GroupScreen;

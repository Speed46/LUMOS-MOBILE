import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ItemDetailScreen = ({ route }) => {
  const { item } = route.params;

  const handleBuyItem = () => {
    // Implement logic to handle the purchase process
    // You might navigate to a payment screen or perform other actions
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>Price: ${item.price}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Button title="Buy" onPress={handleBuyItem} />
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ItemDetailScreen;

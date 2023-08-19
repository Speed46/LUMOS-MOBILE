import React from 'react';
import { View, Text, Image, Button } from 'react-native';

function ItemCard({ item }) {
  return (
    <View>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
      <Button title="Buy" onPress={() => handleBuy(item)} />
    </View>
  );
}

export default ItemCard;

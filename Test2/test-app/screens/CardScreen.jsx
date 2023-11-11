// CardScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

const CardScreen = () => {
  return (
    <View>
      <Text>Card Example</Text>
      <Card>
        <Card.Title>Card Title</Card.Title>
        <Card.Divider />
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Card Item</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <Button title="Button" />
      </Card>
    </View>
  );
};

export default CardScreen;

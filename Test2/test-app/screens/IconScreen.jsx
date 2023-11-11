// IconScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const IconScreen = () => {

  return (
    <View>
      <Text>Icon Example</Text>
      <Icon name="heart" type="font-awesome" color="red" size={30} />
    </View>
  );
};

export default IconScreen;

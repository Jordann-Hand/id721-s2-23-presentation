// AvatarScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';


const AvatarScreen = () => {

  return (
    <View>
      <Text>Avatar Example</Text>
      <Avatar
        rounded
        source={require('../fashion-boy-with-yellow-jacket-blue-pants.jpg')}
        size="large"
      />
    </View>
  );
};

export default AvatarScreen;

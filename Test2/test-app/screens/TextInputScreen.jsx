// TextInputScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';

const TextInputScreen = () => {

  return (
    <View>
      <Text>TextInput Example</Text>
      <Input placeholder="Enter text" />
    </View>
  );
};

export default TextInputScreen;

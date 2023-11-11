import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToButtonScreen = () => {
    navigation.navigate('Button');
  };

  const navigateToTextInputScreen = () => {
    navigation.navigate('Text Input'); 
  };

  const navigateToCardScreen = () => {
    navigation.navigate('Card'); 
  };

  const navigateToIconScreen = () => {
    navigation.navigate('Icon'); 
  };

  const navigateToAvatarScreen = () => {
    navigation.navigate('Avatar'); 
  };

  return (
    <View>
      <Text>Welcome to React Native Elements Examples</Text>
      <Button title="Go to Button Example" onPress={navigateToButtonScreen} />
      <Button title="Go to Text Input Example" onPress={navigateToTextInputScreen} />
      <Button title="Go to Card Example" onPress={navigateToCardScreen} />
      <Button title="Go to Icon Example" onPress={navigateToIconScreen} />
      <Button title="Go to Avatar Example" onPress={navigateToAvatarScreen} />
    </View>
  );
};

export default HomeScreen;

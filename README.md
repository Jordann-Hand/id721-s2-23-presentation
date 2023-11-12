# React Native Elements

## Link to full presentation

[Full presentation](https://otagopoly-my.sharepoint.com/:v:/g/personal/handjw1_student_op_ac_nz/EX5rzES9vGxOjJ2HlnYjPDMBdQhULOiKSxe7LQUMZCgYRA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=OhGxbI)

## Quick Overview

**React Native Elements** is a popular open-source UI library for building mobile applications using the React Native framework. It provides a collection of pre-designed and customizable UI components that can be easily integrated into your React Native app, simplifying the process of creating a consistent and visually appealing user interface.

The library is designed to help developers save time and effort by offering a wide range of common mobile UI elements such as buttons, navigation bars, input fields, cards, and more. These components are styled to follow modern design trends, ensuring a contemporary and aesthetically pleasing look for your app.

**React Native Elements** is highly customizable, allowing developers to tailor the appearance and behavior of the UI components to match their specific app's design and functionality requirements. It uses the power of the React Native ecosystem, enabling developers to combine these components with their own custom components seamlessly.

### Key Features

1. **Cross-platform compatibility:** React Native Elements components work on both iOS and Android, making it easy to develop a single codebase for both platforms.
2. **Theming support:** The library provides a theming system, allowing you to maintain a consistent visual style throughout your app and adapt it to your branding.
3. **Accessibility:** It prioritizes accessibility, making it easier for developers to create apps that are inclusive and user-friendly.
4. **Rapid development:** With a wide variety of pre-designed components, developers can quickly build feature-rich applications without starting from scratch.

*In summary,* React Native Elements is a valuable tool for React Native developers, offering a comprehensive set of customizable UI components to streamline mobile app development and create visually appealing, user-friendly interfaces. It simplifies the process of building cross-platform applications, reduces development time, and ensures a consistent and modern look for your app's user interface.

## How to Install

1. **Install Expo CLI (if not already installed):**
   - If you haven't already installed Expo CLI, you can do so with npm or yarn. Open a terminal and run one of the following commands:
     - Using npm: `npm install -g expo-cli`
     - Using yarn: `yarn global add expo-cli`

2. **Create a New Expo App with React Native Elements:**
   - Once you have Expo CLI installed, create a new Expo app with the React Native Elements template using the following command:
     - Run: `npx create-expo-app`

3. **Follow the On-Screen Instructions:**
   - After running the command, Expo CLI will prompt you to provide a name for your project. Follow the on-screen instructions to set up your project.

4. **Change to your project's directory:**
   - Run: `cd YourProjectName`

5. **Install React-Native-Elements package:**
   - Run: `npm install react-native-elements@3.4.2` (you can use any version; this is just an example)

6. **Start Your Expo Development Server:**
   - Once your project is created, navigate to the project's directory and start the Expo development server:
     - Run: `expo start` or `npm run start`

   This will launch the Expo DevTools in your web browser and provide you with a QR code that you can scan using the Expo Go app on your mobile device to view and test your app. If you have Android Studio set up with an active virtual device, you can now press `a` in the terminal to open in Android.

7. **Begin Building with React Native Elements:**
   - Now that you have your Expo project with React Native Elements, you can start building your app by using the React Native Elements components. Import and use these components in your app's code as needed.

   Using Expo allows you to develop and test your app on both iOS and Android devices easily. You can also publish your app through Expo's platform when you're ready to share it with others.

So now that you have successfully created an Expo app using React Native Elements, you can find a full step-by-step guide in the [full presentation](https://otagopoly-my.sharepoint.com/:v:/g/personal/handjw1_student_op_ac_nz/EX5rzES9vGxOjJ2HlnYjPDMBdQhULOiKSxe7LQUMZCgYRA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=OhGxbI) included below:

## Code Examples

### Button

Buttons play a crucial role in any app, serving as essential UI elements for triggering actions or navigation. React Native Elements provides a streamlined Button component that easily integrates into your app. Users can effortlessly customize the button's text, style, and behavior to align with their app's design and functionality. Various props, such as title, type, icon, and onPress, offer control over the button's appearance and actions. These buttons simplify the process of incorporating interactive elements, making it easier for users to create call-to-action buttons, submit forms, and more.

```jsx
import { Button } from 'react-native-elements';

const App = () => {
  return <Button title="Hello World" />;
};
```

## Text Input

Text inputs are foundational to user interaction, allowing users to input data. React Native Elements' Input component facilitates the integration of text input fields in your app. Users can easily specify properties like placeholder, value, and onChangeText to tailor the input field's behavior and appearance. The component supports features such as input validation, password visibility toggles, and customizable keyboard types. These input fields simplify the process of collecting data, such as login credentials, search queries, or user-generated content.

```jsx
import { Input } from 'react-native-elements';

const App = () => {
  return <Input placeholder="Enter text" />;
};
```

## Card

Cards are a versatile tool for presenting organized information, such as news articles or product details. React Native Elements' Card component simplifies the creation of card-based interfaces. Users can easily include titles, content, and action elements within the card, promoting visual separation of content for enhanced presentation. The component's flexibility allows it to be used for a wide range of content, from product listings to event details.

```jsx
import { Card, ListItem, Button } from 'react-native-elements';

const App = () => {
  return (
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
  );
};
```

## Icon

Icons serve as valuable visual cues in apps, aiding in navigation and information conveyance. React Native Elements' Icon component simplifies the integration of icons from various libraries, such as FontAwesome. Users can easily customize the icon's appearance using props like name, type, color, and size. Icons are effective for improving the user interface by providing visual indications of specific actions, such as liking a post with a heart icon. React Native Elements' streamlined approach makes the addition of icons straightforward, enhancing both visual appeal and usability.

```jsx
import { Icon } from 'react-native-elements';

const App = () => {
  return <Icon name="heart" type="font-awesome" color="red" size={30} />;
};
```

## Avatar

Avatars, commonly used for user profiles, contribute to personalizing and humanizing the user experience. React Native Elements' Avatar component simplifies the incorporation of user profile images. Users can effortlessly customize avatars by specifying properties like rounded, source, and size. Avatars are particularly beneficial for user recognition, chat applications, and social networking platforms. React Native Elements provides an uncomplicated method for displaying user avatars, enhancing user engagement and identification within the app.

```jsx
import { Avatar } from 'react-native-elements';

const App = () => {
  return (
    <Avatar
      rounded
      source={{ uri: 'https://example.com/avatar.jpg' }}
      size="large"
    />
  );
};
```

## Closing Statement

In conclusion, React Native Elements stands as a versatile and powerful ally for developers venturing into mobile app development using React Native. By offering a rich collection of pre-designed and customizable UI components, it streamlines the process of crafting visually appealing, user-friendly interfaces. The library's commitment to cross-platform compatibility, theming support, and accessibility ensures that developers can create applications that not only look modern but also cater to a diverse user base.

As you embark on your journey with React Native Elements, may your development process be efficient, and your applications be both functional and aesthetically pleasing. Explore the vast possibilities these components offer, and leverage the robust features to enhance your users' experience. Happy coding! 🚀

## References

1. React Native Elements. (n.d.). Retrieved from https://reactnativeelements.com/docs#:~:text=The%20aim%20of%20React%20Native,developers%20all%20around%20open%20source.
2. React Native Elements - Code Examples. (n.d.). Retrieved from https://react-native-elements.js.org/#/
3. React Native Elements. (n.d.). Retrieved from https://reactnativeelements.com/

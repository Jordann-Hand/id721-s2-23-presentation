### React Native Elements

Quick Overview:

React Native Elements is a popular open-source UI library for building mobile applications using the React Native framework. It provides a collection of pre-designed and customizable UI components that can be easily integrated into your React Native app, simplifying the process of creating a consistent and visually appealing user interface.

The library is designed to help developers save time and effort by offering a wide range of common mobile UI elements such as buttons, navigation bars, input fields, cards, and more. These components are styled to follow modern design trends, ensuring a contemporary and aesthetically pleasing look for your app.

React Native Elements is highly customizable, allowing developers to tailor the appearance and behavior of the UI components to match their specific app's design and functionality requirements. It uses the power of the React Native ecosystem, enabling developers to combine these components with their own custom components seamlessly.

Key features of React Native Elements include:

1. Cross-platform compatibility: React Native Elements components work on both iOS and Android, making it easy to develop a single codebase for both platforms.

2. Theming support: The library provides a theming system, allowing you to maintain a consistent visual style throughout your app and adapt it to your branding.

3. Accessibility: It prioritizes accessibility, making it easier for developers to create apps that are inclusive and user-friendly.

4. Rapid development: With a wide variety of pre-designed components, developers can quickly build feature-rich applications without starting from scratch.

In summary, React Native Elements is a valuable tool for React Native developers, offering a comprehensive set of customizable UI components to streamline mobile app development and create visually appealing, user-friendly interfaces. It simplifies the process of building cross-platform applications, reduces development time, and ensures a consistent and modern look for your app's user interface.




How to install:

Install Expo CLI (if not already installed):
If you haven't already installed Expo CLI, you can do so with npm or yarn. Open a terminal and run one of the following commands:

Using npm: `npm install -g expo-cli`
Using yarn: `yarn global add expo-cli`
Create a New Expo App with React Native Elements:
Once you have Expo CLI installed, you can create a new Expo app with the React Native Elements template using the following command:

Run: `npx create-expo-app --template @rneui/template`
This command will create a new Expo project based on the React Native Elements template, which includes the library pre-configured and ready to use.

Follow the On-Screen Instructions:
After running the command, Expo CLI will prompt you to provide some information about your project, such as the name and description. Follow the on-screen instructions to set up your project.

Start Your Expo Development Server:
Once your project is created, navigate to the project's directory and start the Expo development server:

Change to your project's directory: `cd YourProjectName`
Start the Expo development server: `expo start` or `npm run start`
This will launch the Expo DevTools in your web browser and provide you with a QR code that you can scan using the Expo Go app on your mobile device to view and test your app.

Alternatively if you do not wish to use the prebuilt template or you already have an applikcation setup you can just install the following package to your applicaiton using: `npm install react-native-elements@3.4.2`

Begin Building with React Native Elements:
Now that you have your Expo project with the React Native Elements template set up, you can start building your app by using the React Native Elements components. You can import and use these components in your app's code as needed.

Using Expo allows you to develop and test your app on both iOS and Android devices easily. You can also publish your app through Expo's platform when you're ready to share it with others.

With these steps, you should be all set to start developing your React Native app with the React Native Elements UI library within the Expo environment.

So now that you have succesfully created an expo app using the react-native-elements template (@rneui/template) 

You can find a full step by step guide in the full presentation included below:

Quick example:

`import { Button } from '@rneui/base';

const App = () => {
  return <Button title="Hello World" />;
};`


References Links: 
Overview/ installation: https://reactnativeelements.com/docs#:~:text=The%20aim%20of%20React%20Native,developers%20all%20around%20open%20source.

Code examples: https://react-native-elements.js.org/#/

React Native Elements: https://reactnativeelements.com/

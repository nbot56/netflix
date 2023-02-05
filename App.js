

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import StartupScreen from "./Screens/StartupScreen"
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Apps() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name='SignupScreen' component={SignupScreen} options={{headerShown:false}}/> */}
      <Stack.Screen name='LoginScreen' component={LoginScreen}/>
      <Stack.Screen name='StartupScreen' component={StartupScreen}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
  }
});

export default App;

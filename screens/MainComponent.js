import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import DirectoryScreen from './DirectoryScreen';
import AttractionInfoScreen from './AttractionInfoScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#ec1d1d'
  },
  headerTintColor: '#fff'
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  );
};

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Directory' screenOptions={screenOptions}>
      <Stack.Screen
        name='Directory'
        component={DirectoryScreen}
        options={{ title: 'Attraction Directory' }}
      />
      <Stack.Screen
        name='AttractionInfo'
        component={AttractionInfoScreen}
        options={({ route }) => ({
          title: route.params.attraction.name
        })}
      />
    </Stack.Navigator>
  );
};

const MainComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
      }}
    >
      <Drawer.Navigator
        initialRouteName='Home'
        drawerStyle={{ backgroundColor: '#CEC8FF' }}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name='Home' component={HomeNavigator} />
        <Drawer.Screen name='Directory' component={DirectoryNavigator} />
      </Drawer.Navigator>
    </View>
  );
};
export default MainComponent;

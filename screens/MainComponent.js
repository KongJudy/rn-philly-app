import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

import { ATTRACTIONS } from '../shared/attractions';
import DirectoryScreen from './DirectoryScreen';
import AttractionInfoScreen from './AttractionInfoScreen';

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName='Directory'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ec1d1d'
        },
        headerTintColor: '#fff'
      }}
    >
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
      <DirectoryNavigator />
    </View>
  );
};
export default MainComponent;

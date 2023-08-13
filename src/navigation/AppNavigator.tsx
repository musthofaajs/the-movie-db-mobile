import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

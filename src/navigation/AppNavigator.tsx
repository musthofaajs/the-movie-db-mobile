import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {Movie} from '../redux/types';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';

export type RootStackParamList = {
  Home: undefined;
  MovieDetail: {movie: Movie};
};

const Stack = createStackNavigator<RootStackParamList>();

interface NavigationOption {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
  options?: StackNavigationOptions;
}

const screenOptions: NavigationOption[] = [
  {name: 'Home', component: HomeScreen, options: {headerShown: false}},
  {
    name: 'MovieDetail',
    component: MovieDetailScreen,
    options: {headerShown: false},
  },
];

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      {screenOptions.map(option => (
        <Stack.Screen key={option.name} {...option} />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigator;

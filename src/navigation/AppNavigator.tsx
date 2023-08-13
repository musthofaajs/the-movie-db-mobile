import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';

export type RootStackParamList = {
  Home: undefined;
  MovieDetail: {movieId: number};
};

const Stack = createStackNavigator<RootStackParamList>();

type ScreenOption = {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
};

const screenOptions: ScreenOption[] = [
  {name: 'Home', component: HomeScreen},
  {name: 'MovieDetail', component: MovieDetailScreen},
];

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {screenOptions.map(option => (
        <Stack.Screen
          key={option.name}
          name={option.name}
          component={option.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigator;

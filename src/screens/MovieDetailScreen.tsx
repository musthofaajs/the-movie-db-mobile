import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootStackParamList} from '../navigation/AppNavigator';
import {RootState} from '../store';

type MovieDetailScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;
type MovieDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MovieDetail'
>;

type Props = {
  route: MovieDetailScreenRouteProp;
  navigation: MovieDetailScreenNavigationProp;
};

const MovieDetailScreen: React.FC<Props> = ({route}) => {
  const {movieId} = route.params;
  const movies = useSelector((state: RootState) => state.movie.movies);
  const movie = movies.find(item => item.id === movieId);

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text>Movie not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}
        style={styles.poster}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  poster: {
    width: 200,
    height: 300,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  overview: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MovieDetailScreen;

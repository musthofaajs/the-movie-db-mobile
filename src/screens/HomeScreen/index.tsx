import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {fetchMovies} from '../../redux/actions';
import MovieSlider from './components/MovieSlider';
import {Dispatch} from 'redux';
import {RootState} from '../../store';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<Dispatch<any>>();
  const movies = useTypedSelector(state => state.movie.movies);

  useEffect(() => {
    dispatch(fetchMovies() as any);
  }, [dispatch]);

  const navigateToMovieDetail = (movieId: number) => {
    navigation.navigate('MovieDetail', {movieId});
  };

  return (
    <View style={styles.container}>
      <MovieSlider
        title="Now Playing"
        movies={movies}
        onMoviePress={navigateToMovieDetail}
      />
      <MovieSlider
        title="Popular Movies"
        movies={movies}
        onMoviePress={navigateToMovieDetail}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default HomeScreen;

import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {Container, Content} from '../../components/Organism';
import {
  MOVIE_LIST_TYPE_NOW_PLAYING,
  MOVIE_LIST_TYPE_POPULAR,
  MOVIE_LIST_TYPE_TOP_RATED,
  MOVIE_LIST_TYPE_UPCOMING,
} from '../../constant/movie';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {fetchMovies} from '../../redux/actions';
import {Movie} from '../../redux/types';
import store, {RootState} from '../../store';
import MovieSlider from './components/MovieSlider';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {dispatch} = store;
  const {now_playing, popular, upcoming, top_rated} = useTypedSelector(
    state => state.movie.movieSlider,
  );

  useEffect(() => {
    dispatch(fetchMovies(MOVIE_LIST_TYPE_NOW_PLAYING) as any);
    dispatch(fetchMovies(MOVIE_LIST_TYPE_POPULAR) as any);
    dispatch(fetchMovies(MOVIE_LIST_TYPE_UPCOMING) as any);
    dispatch(fetchMovies(MOVIE_LIST_TYPE_TOP_RATED) as any);
  }, [dispatch]);

  const navigateToMovieDetail = (movie: Movie) => {
    navigation.navigate('MovieDetail', {movie});
  };

  return (
    <Container style={styles.container}>
      <Content>
        <MovieSlider
          title="Now Playing"
          movies={now_playing}
          onMoviePress={navigateToMovieDetail}
        />
        <MovieSlider
          title="Popular Movies"
          movies={popular}
          onMoviePress={navigateToMovieDetail}
        />
        <MovieSlider
          title="Upcoming"
          movies={upcoming}
          onMoviePress={navigateToMovieDetail}
        />
        <MovieSlider
          title="Top Rated"
          movies={top_rated}
          onMoviePress={navigateToMovieDetail}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default HomeScreen;

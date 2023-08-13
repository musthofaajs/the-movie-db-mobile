/* eslint-disable react-hooks/exhaustive-deps */
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useIsFocused,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {width} from '../../Theme/Layout';
import {FocusAwareStatusBar} from '../../components/Atom';
import {Container, Content} from '../../components/Organism';
import {
  MOVIE_LIST_TYPE_NOW_PLAYING,
  MOVIE_LIST_TYPE_POPULAR,
  MOVIE_LIST_TYPE_TOP_RATED,
  MOVIE_LIST_TYPE_UPCOMING,
} from '../../constant/movie';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {fetchMovieDetail, fetchMovies} from '../../redux/actions';
import {Movie, MovieDetail, MovieDetailType} from '../../redux/types';
import store, {RootState} from '../../store';
import {humanizeDate} from '../../utils/helpers';
import MovieSlider from './components/MovieSlider';

type HomeScreenNavigationProp = RouteProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: NavigationProp<ParamListBase>;
  route: HomeScreenNavigationProp;
};

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const isFocused = useIsFocused();
  const {dispatch} = store;
  const {now_playing, popular, upcoming, top_rated} = useTypedSelector(
    state => state.movie.movieSlider,
  );

  const featuredMovie = useTypedSelector(state => state.movie.featuredMovie);

  useEffect(() => {
    if (isFocused) {
      dispatch(fetchMovies(MOVIE_LIST_TYPE_NOW_PLAYING) as any);
      dispatch(fetchMovies(MOVIE_LIST_TYPE_POPULAR) as any);
      dispatch(fetchMovies(MOVIE_LIST_TYPE_UPCOMING) as any);
      dispatch(fetchMovies(MOVIE_LIST_TYPE_TOP_RATED) as any);
    }
  }, [isFocused]);

  useEffect(() => {
    if (popular && popular.length > 0) {
      const randomIndex = Math.floor(Math.random() * popular.length);
      const featured = popular[randomIndex];
      dispatch(
        fetchMovieDetail(featured.id, MovieDetailType.FeaturedMovie) as any,
      );
    }
  }, [popular]);

  const navigateToMovieDetail = (movie: Movie | MovieDetail) => {
    navigation.navigate('MovieDetail', {movie});
  };

  return (
    <Container style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <Content>
        {featuredMovie && (
          <TouchableOpacity
            style={styles.featuredContainer}
            onPress={() => navigateToMovieDetail(featuredMovie)}>
            <FastImage
              source={{
                uri: `https://image.tmdb.org/t/p/w1280${featuredMovie.backdrop_path}`,
              }}
              style={styles.featuredImage}
              resizeMode={FastImage.resizeMode.cover}>
              <Text style={styles.featuredTagline}>
                "{featuredMovie.tagline}"
              </Text>
              <Text style={styles.featuredTitle}>
                {featuredMovie.title} | {featuredMovie.vote_average.toFixed(2)}
              </Text>
              <Text style={styles.featuredRelease}>
                Released |{' '}
                {!featuredMovie.release_date
                  ? 'Release Data Unknown'
                  : `${humanizeDate(featuredMovie.release_date)}`}
              </Text>
            </FastImage>
          </TouchableOpacity>
        )}
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
  featuredContainer: {
    overflow: 'hidden',
    paddingTop: width * 0.0795,
    paddingHorizontal: width * 0.025,
    paddingBottom: width * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredImage: {
    flex: 1,
    borderWidth: 0.1,
    borderColor: '#b8b8b8',
    width: width * (1 - 0.025),
    height: undefined,
    aspectRatio: 9 / 16,
    justifyContent: 'flex-end',
    padding: 16,
    borderRadius: width * 0.015,
    shadowColor: '#b8b8b8',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  featuredTagline: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    fontStyle: 'italic',
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  featuredRelease: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HomeScreen;

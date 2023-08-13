/* eslint-disable react-hooks/exhaustive-deps */
import {RouteProp, useIsFocused} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {width} from '../Theme/Layout';
import {FocusAwareStatusBar} from '../components/Atom';
import {Container, Content} from '../components/Organism';
import {RootStackParamList} from '../navigation/AppNavigator';
import {fetchMovieDetail} from '../redux/actions';
import store, {RootState} from '../store';
import {calcTime} from '../utils/helpers';

type MovieDetailScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;

type Props = {
  route: MovieDetailScreenRouteProp;
};
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const MovieDetailScreen: React.FC<Props> = ({route}) => {
  const {dispatch} = store;
  const isFocused = useIsFocused();

  const {movie: movieFromParams} = route.params;
  const {id} = movieFromParams;

  const movie = useTypedSelector(state => state.movie.movieDetail);

  React.useEffect(() => {
    if (isFocused) {
      dispatch(fetchMovieDetail(id) as any);
    } else {
      //
    }
  }, [isFocused]);

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Movie not found.</Text>
      </View>
    );
  }

  return (
    <Container style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <Content>
        <FastImage
          source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}
          style={styles.poster}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <View style={styles.infoGroup}>
            <Text style={[styles.subtitle, styles.infoGroupGap]}>
              {movie.release_date.split('-')[0]}
            </Text>
            <Text style={[styles.subtitle, styles.infoGroupGap]}>
              {calcTime(movie.runtime)}
            </Text>
            {movie.genres?.map((genre, index) => {
              const isEndofArray = index === movie.genres.length - 1;

              return (
                <Text style={styles.subtitle} key={genre.id}>
                  {genre.name}
                  {isEndofArray ? '' : ', '}
                </Text>
              );
            })}
          </View>
          <Text style={styles.title}>{movie.vote_average.toFixed(2)}</Text>
          <Text style={styles.overview}>{movie.overview}</Text>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  errorText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 100,
  },
  poster: {
    width: '100%',
    aspectRatio: 2 / 3,
  },
  infoContainer: {
    padding: 16,
  },
  infoGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  infoGroupGap: {
    paddingRight: width * 0.02,
    marginRight: width * 0.02,
    borderRightWidth: 1,
    borderRightColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 16,
  },
  overview: {
    fontSize: 18,
    color: '#fff',
  },
});

export default MovieDetailScreen;

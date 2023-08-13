import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {fetchMovies} from '../redux/actions';
import {RootState} from '../store';
import {Movie} from '../redux/types';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const movies = useTypedSelector(state => state.movie.movies);

  useEffect(() => {
    dispatch(fetchMovies() as any);
  }, [dispatch]);

  const renderMovieItem = ({item}: {item: Movie}) => (
    <View style={styles.movieItem}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
        style={styles.poster}
      />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  poster: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {width} from '../Theme/Layout';
import {RootStackParamList} from '../navigation/AppNavigator';
import {fetchMovies} from '../redux/actions';
import {Movie} from '../redux/types';
import {RootState} from '../store';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<Dispatch<any>>();
  const movies = useTypedSelector(state => state.movie.movies.slice(0, 10));

  useEffect(() => {
    dispatch(fetchMovies() as any);
  }, [dispatch]);

  const navigateToMovieDetail = (movieId: number) => {
    navigation.navigate('MovieDetail', {movieId});
  };

  const renderMovieItem = ({item}: {item: Movie; index: number}) => (
    <TouchableOpacity onPress={() => navigateToMovieDetail(item.id)}>
      <View style={styles.movieItem}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
          style={styles.poster}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Popular Movies</Text>
      <Carousel
        data={movies}
        renderItem={renderMovieItem}
        sliderWidth={width}
        itemWidth={width * 0.285}
        inactiveSlideScale={1}
        activeSlideAlignment="start"
        activeSlideOffset={10}
        enableMomentum
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 6,
    marginLeft: width * 0.01,
  },
  carouselContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  movieItem: {
    width: width * 0.265,
    aspectRatio: 2 / 3,
    borderRadius: 8,
    marginRight: 16,
    marginLeft: width * 0.01,
  },
  title: {
    fontSize: 14,
    marginTop: 8,
    color: '#fff',
    textAlign: 'center',
  },
  poster: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default HomeScreen;

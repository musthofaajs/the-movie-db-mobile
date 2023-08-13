import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {width} from '../../../Theme/Layout';
import {Movie} from '../../../redux/types';
import SliderItem from './SliderItem';

type MovieSliderProps = {
  title: string;
  movies: Movie[];
  onMoviePress: (movie: Movie) => void;
};

const MovieSlider: React.FC<MovieSliderProps> = ({
  title,
  movies,
  onMoviePress,
}) => {
  const renderMovieItem = ({item}: {item: Movie}) => (
    <SliderItem item={item} onPress={() => onMoviePress(item)} />
  );
  return (
    <View style={styles.movieSlider}>
      <Text style={styles.sectionTitle}>{title}</Text>
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
  movieSlider: {
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 6,
    marginLeft: width * 0.01,
  },
});

export default React.memo(MovieSlider);

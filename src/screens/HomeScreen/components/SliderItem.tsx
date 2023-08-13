import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {width} from '../../../Theme/Layout';
import {Movie} from '../../../redux/types';

type SliderItemProps = {
  item: Movie;
  onPress: () => void;
};

const SliderItem: React.FC<SliderItemProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.movieItem}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
          style={styles.poster}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieItem: {
    width: width * 0.265,
    aspectRatio: 2 / 3,
    borderRadius: 8,
    marginRight: 16,
    marginLeft: width * 0.01,
  },
  poster: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default React.memo(SliderItem);

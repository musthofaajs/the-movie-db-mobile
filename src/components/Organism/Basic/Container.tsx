import React from 'react';
import {View} from 'react-native';
import {IContainer} from '../';

const Container = ({children, style}: IContainer) => {
  return <View style={style}>{children}</View>;
};

export default Container;

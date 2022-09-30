import React from 'react';
import {StyleSheet, View} from 'react-native';
import {wp} from '../../helpers/resDimensions';

const Separator = ({style}) => {
  return <View style={[styles.separator, style]} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    height: wp(3),
    backgroundColor: '#1E1E1E50',
    marginTop: wp(2),
    marginBottom: wp(2),
  },
});

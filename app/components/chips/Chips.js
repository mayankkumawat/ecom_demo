import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants';

import {wp} from '../../helpers/resDimensions';

const Chips = ({style, title, selected}) => {
  return (
    <View style={[style, styles.chips]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Chips;

const styles = StyleSheet.create({
  chips: {
    height: wp(10),
    width: wp(43),
    marginVertical: wp(2),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.WHITE,
    fontWeight: '600',
  },
});

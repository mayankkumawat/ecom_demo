import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Colors} from '../../constants';
import {fp, wp} from '../../helpers/resDimensions';
import Separator from '../separator/Separator';

const OfferCard = () => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}> Offer Name</Text>
      </View>
      <View style={styles.reward}>
        <Text style={[styles.title, {color: Colors.DARK_GRAY}]}>
          {' '}
          Offer Reward
        </Text>
        <Text style={[styles.title, {color: Colors.DARK_GRAY}]}>
          {' '}
          Time Remaining
        </Text>
      </View>
      <View style={styles.rewards}>
        <Text style={[styles.title]}> 0.13</Text>
        <Text style={[styles.title]}> 00 : 00 : 00</Text>
      </View>
      <View style={styles.status}>
        <Text style={[styles.title, {color: Colors.DARK_GRAY}]}> Status</Text>
        <Text
          style={[styles.title, {color: Colors.DARK_GRAY, fontSize: fp(1.3)}]}>
          days hours min
        </Text>
      </View>
      <View style={styles.status}>
        <Text style={[styles.title, {color: Colors.GREEN, fontSize: fp(2)}]}>
          {' '}
          Claimed
        </Text>
      </View>
      <Separator style={styles.sep} />

      <View style={styles.reward}>
        <Text style={[styles.title, {color: Colors.DARK_GRAY}]}>
          {' '}
          Number of direction req
        </Text>
        <Text style={[styles.title]}> 10</Text>
      </View>
      <Separator
        style={[styles.progress, {backgroundColor: Colors.BRINK_PINK}]}
      />
      <View style={styles.dire}>
        <Text
          style={[styles.title, {fontSize: fp(1.2), color: Colors.DARK_GRAY}]}>
          50% complete
        </Text>
        <Text
          style={[styles.title, {fontSize: fp(1.2), color: Colors.DARK_GRAY}]}>
          {' '}
          5/10
        </Text>
      </View>
      <View style={styles.reward}>
        <Text style={[styles.title, {color: Colors.DARK_GRAY}]}>
          {' '}
          Direct volume req
        </Text>
        <Text style={[styles.title]}> 10</Text>
      </View>
      <Separator
        style={[styles.progress, {backgroundColor: Colors.BRINK_PINK}]}
      />
      <View style={styles.dire}>
        <Text
          style={[styles.title, {fontSize: fp(1.2), color: Colors.DARK_GRAY}]}>
          50% complete
        </Text>
        <Text
          style={[styles.title, {fontSize: fp(1.2), color: Colors.DARK_GRAY}]}>
          {' '}
          5/10
        </Text>
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  card: {
    marginTop: wp(2),
    borderRadius: wp(2),
    marginBottom: wp(2),
    paddingHorizontal: wp(2),
    paddingVertical: wp(3),
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontWeight: '800',
    color: Colors.BLACK,
    letterSpacing: wp(0.2),
  },
  reward: {
    marginTop: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rewards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sep: {
    height: wp(0.2),
  },
  progress: {
    height: wp(1.5),
    borderRadius: wp(2),
  },
  dire: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

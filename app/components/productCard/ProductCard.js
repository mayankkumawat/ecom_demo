import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {Colors} from '../../constants';
import {Icon} from '../../assets/icon';
import {fp, hp, wp} from '../../helpers/resDimensions';

export const Star = () => {
  return (
    <Icon type={'AntDesign'} name={'star'} size={wp(3)} color={'#FF9529'} />
  );
};

const ProductCard = ({item}) => {
  const handleItem = () => Alert.alert(item?.title, item?.description);
  return (
    <TouchableOpacity style={styles.card} onPress={handleItem}>
      <View style={styles.imgCon}>
        <Image
          source={{
            uri: item?.image,
          }}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View style={styles.productInfo}>
        <View style={styles.rating}>
          <Star />
          <Text style={styles.ratingText} numberOfLines={1}>
            {' '}
            {item?.rating?.rate}
          </Text>
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {item?.title}
        </Text>
        <Text style={styles.description} numberOfLines={1}>
          {item?.description}
        </Text>
        <View style={styles.price}>
          <View style={styles.price}>
            <Text
              style={[styles.priceText, {fontWeight: '800'}]}
              numberOfLines={1}>
              {item?.price}{' '}
              <Text
                style={[
                  styles.priceText,
                  {
                    textDecorationLine: 'line-through',
                    color: Colors.DARK_GRAY,
                    fontSize: fp(1.2),
                  },
                ]}
                numberOfLines={1}>
                {item?.price + 1000}
              </Text>
            </Text>
          </View>
          <View style={styles.price}>
            <Text
              style={[
                styles.priceText,
                {color: Colors.DARK_GRAY, fontSize: fp(1.2)},
              ]}
              numberOfLines={1}>
              Save{' '}
              <Text
                style={[
                  styles.priceText,
                  {color: Colors.DARK_GRAY, fontSize: fp(1.2)},
                ]}
                numberOfLines={1}>
                100 (35%)
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: wp(45),
    marginEnd: wp(3),
    marginBottom: wp(3),
    backgroundColor: Colors.WHITE,
    elevation: 2,
  },
  img: {
    width: wp(40),
    height: hp(20),
  },
  productInfo: {
    padding: wp(2),
  },
  title: {
    fontWeight: '600',
    color: Colors.BLACK,
  },
  description: {
    color: Colors.DARK_GRAY,
    fontWeight: '500',
  },
  price: {
    marginTop: wp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: fp(1.6),
    color: Colors.BLACK,
    fontWeight: '600',
  },
  imgCon: {
    padding: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp(3),
  },
  ratingText: {
    color: Colors.DARK_GRAY,
    fontSize: fp(1.5),
  },
});

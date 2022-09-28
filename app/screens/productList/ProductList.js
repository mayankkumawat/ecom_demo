import {
  View,
  Text,
  Modal,
  Alert,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {styles} from './styles';
import {Colors} from '../../constants';
import {Icon} from '../../assets/icon';
import {wp} from '../../helpers/resDimensions';
import ProductCard from '../../components/productCard/ProductCard';

export const MenuIcon = () => {
  return (
    <Icon type={'Feather'} name={'menu'} size={wp(6)} color={Colors.BLACK} />
  );
};
export const Search = () => {
  return (
    <Icon type={'Feather'} name={'search'} size={wp(6)} color={Colors.BLACK} />
  );
};
export const Heart = () => {
  return (
    <Icon type={'Feather'} name={'heart'} size={wp(6)} color={Colors.BLACK} />
  );
};
export const Filter = () => {
  return (
    <Icon
      type={'Feather'}
      name={'filter'}
      size={wp(4)}
      color={Colors.DARK_GRAY}
    />
  );
};
export const Bag = () => {
  return (
    <Icon
      type={'Feather'}
      name={'shopping-bag'}
      size={wp(6)}
      color={Colors.BLACK}
    />
  );
};

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(r => r.json())
      .then(res => {
        setData(res);
        setIsLoading(false);
      });
  }, []);

  const renderItem = ({item}) => {
    return <ProductCard item={item} />;
  };

  const handleMenu = () => Alert.alert('Menu', 'Drawer menu');
  const handleCart = () => Alert.alert('CART', 'Open cart');
  const handleFilter = () => Alert.alert('FILTER', 'Filter out products');
  const handleSearch = () => Alert.alert('SEARCH', 'Search out products');
  const handleFav = () => Alert.alert('FAVOURITE', 'Add favourite products');

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={isLoading}>
        <View style={styles.centeredView}>
          <ActivityIndicator size={'large'} color={Colors.BRINK_PINK} />
        </View>
      </Modal>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <TouchableOpacity onPress={handleMenu}>
              <MenuIcon />
            </TouchableOpacity>
            <Text style={styles.headerTitle}> Womens</Text>
          </View>
          <View style={styles.rightHeader}>
            <TouchableOpacity onPress={handleSearch}>
              <Search />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFav}>
              <Heart />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCart}>
              <Bag />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listHeader}>
          <Text style={styles.listHeadText}>{data.length} Items</Text>
          <TouchableOpacity style={styles.filter} onPress={handleFilter}>
            <Filter />
            <Text style={styles.listHeadText}>Filter</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
    </>
  );
};

export default ProductList;

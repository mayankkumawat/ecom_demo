import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {Icon} from '../../assets/icon';
import {Colors} from '../../constants';
import {wp} from '../../helpers/resDimensions';
import {Chips, OfferCard, Separator} from '../../components';

export const BackIcon = () => {
  return (
    <Icon
      type={'Ionicons'}
      name={'chevron-back-outline'}
      size={wp(6)}
      color={Colors.WHITE}
    />
  );
};

export const Filter = () => {
  return (
    <Icon type={'Feather'} name={'filter'} size={wp(4)} color={Colors.WHITE} />
  );
};

export const Search = () => {
  return (
    <Icon type={'Feather'} name={'search'} size={wp(6)} color={Colors.WHITE} />
  );
};

const offerArr = [
  {id: 1, title: 'Current Offers'},
  {id: 2, title: 'Offers Claimed'},
];

const Offers = () => {
  const [selected, setSelected] = useState(2);
  const handleBack = () => Alert.alert('BACK', 'go back');
  const handleChip = id => setSelected(id);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle} onPress={handleBack}>
        <BackIcon />
      </TouchableOpacity>
      <Separator />
      <View style={styles.chipsCon}>
        {offerArr.map(({id, title}) => {
          return (
            <TouchableOpacity onPress={() => handleChip(id)}>
              <Chips
                title={title}
                style={{
                  backgroundColor: selected === id ? Colors.BLACK : '#1E1E1E50',
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.filter}>
        <Filter />
        <Text style={styles.filterText}>Date</Text>
        <TextInput
          style={styles.input}
          cursorColor={Colors.WHITE}
          placeholder={'Current Offers'}
          placeholderTextColor={Colors.WHITE}
        />
        <TextInput
          style={styles.input}
          cursorColor={Colors.WHITE}
          placeholder={'Claimed'}
          placeholderTextColor={Colors.WHITE}
        />
        <View style={styles.pipe} />
        <Search />
      </View>
      <View style={styles.cardCon}>
        <OfferCard />
        <OfferCard />
      </View>
    </View>
  );
};

export default Offers;

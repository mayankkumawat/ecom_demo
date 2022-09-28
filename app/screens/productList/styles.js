import {StyleSheet} from 'react-native';

import {Colors} from '../../constants';
import {fp, hp, wp} from '../../helpers/resDimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: wp(2),
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listHeader: {
    paddingLeft: wp(2),
    paddingRight: wp(5),
    flexDirection: 'row',
    paddingVertical: wp(2),
    justifyContent: 'space-between',
  },
  listHeadText: {
    color: Colors.DARK_GRAY,
    fontWeight: '600',
  },
  header: {
    height: hp(6),
    elevation: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(2),
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: Colors.BLACK,
    marginHorizontal: wp(2),
    fontSize: fp(2),
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightHeader: {
    flexDirection: 'row',
    width: wp(30),
    justifyContent: 'space-around',
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(15),
    justifyContent: 'space-around',
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

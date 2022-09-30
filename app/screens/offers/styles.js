import {StyleSheet} from 'react-native';

import {Colors} from '../../constants';
import {fp, hp, wp} from '../../helpers/resDimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E90',
  },
  circle: {
    width: wp(15),
    height: wp(15),
    backgroundColor: Colors.BLACK,
    borderRadius: wp(100),
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(5),
    marginVertical: wp(5),
  },
  chipsCon: {
    paddingHorizontal: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(8),
    marginBottom: wp(5),
  },
  filterText: {
    marginHorizontal: wp(2),
    color: Colors.WHITE,
    marginVertical: wp(2),
    fontWeight: '600',
  },
  input: {
    width: wp(25),
    height: wp(8),
    backgroundColor: '#1E1E1E50',
    borderColor: Colors.WHITE,
    borderRadius: wp(5),
    color: Colors.WHITE,
    fontSize: fp(1.2),
    paddingHorizontal: wp(4),
    fontWeight: '600',
    marginHorizontal: wp(1),
  },
  pipe: {
    width: wp(1),
    height: wp(7),
    backgroundColor: Colors.WHITE,
    borderRadius: wp(1),
    marginHorizontal: wp(3),
  },
  cardCon: {
    paddingHorizontal: wp(4),
  },
});

import {StyleSheet, Dimensions} from 'react-native';
const w = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  item: {
    width: w / 2 - 40,
    marginRight: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  imageStyle: {
    height: (w / 4 / 210) * 297,
    width: w / 4,
    resizeMode: 'cover',
    position: 'absolute',
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  infoSection: {
    borderWidth: 1,
    borderColor: '#bcbcbc',
    marginTop: (w / 4 / 210) * 297 - 50,
    padding: 10,
    paddingTop: 60,
    height: (w / 4 / 210) * 297 + 10,
    justifyContent: 'space-between',
  },
  publicName: {
    fontSize: 11,
    color: 'gray',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 11,
  },
});

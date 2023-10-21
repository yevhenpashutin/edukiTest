import {StyleSheet, Dimensions} from 'react-native';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  backButton: {
    backgroundColor: '#5cbcbe',
    height: 40,
    width: 90,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    marginLeft: 10,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    width: w / 2 - 40,
    marginRight: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  imageStyleLandscape: {
    height: (h / 2 / 210) * 297,
    width: h / 2,
    resizeMode: 'cover',
  },
  imageStyle: {
    height: (w / 210) * 297,
    width: w,
    resizeMode: 'cover',
  },
  infoSection: {
    padding: 10,
    flex: 1,
    marginBottom: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  publicName: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 20,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 11,
  },
});

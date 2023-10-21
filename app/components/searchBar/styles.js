import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    marginVertical: 25,
    height: 40,
    marginRight: 15,
    flexDirection: 'row',
  },

  inputInner: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    borderWidth: 1,
    borderColor: '#98a7a7',
    paddingLeft: 10,
  },

  searchText: {
    marginTop: -2,
    fontSize: 15,
    letterSpacing: -0.3,
    color: 'blue',
  },

  magnifyGlass: {
    position: 'absolute',
    right: 18,
    width: 18,
    height: 18,
    borderRadius: 18,
    borderColor: 'white',
    borderWidth: 1,
  },

  line: {
    position: 'absolute',
    left: -4,
    bottom: -1,
    width: 6,
    borderTopColor: 'white',
    borderTopWidth: 1,
    transform: [{rotateZ: '135deg'}],
  },
  searchRightBar: {
    backgroundColor: '#5cbcbe',
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
});

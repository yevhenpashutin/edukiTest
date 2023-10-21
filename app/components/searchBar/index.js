import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {styles} from './styles';

const SearchBarContainer = props => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.inputInner}
        placeholder={'Suche...'}
        autoFocus={true}
        value={props.text}
        onChangeText={text => {
          props.setSearchInput(text);
        }}
      />
      <TouchableOpacity
        style={styles.searchRightBar}
        onPress={() => props.onSearch()}>
        <View style={styles.magnifyGlass}>
          <View style={styles.line} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBarContainer;

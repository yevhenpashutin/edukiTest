import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const SearchItem = ({e, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ItemDetails', {item: e})}>
      <View style={styles.infoSection}>
        <View>
          <Text style={styles.title} numberOfLines={3}>
            {e.title}
          </Text>
          <Text style={styles.publicName} numberOfLines={1}>
            {e?.author?.details?.publicName}
          </Text>
        </View>
        <Text style={styles.price}>{`${e?.price
          .toString()
          .replace('.', ',')} €`}</Text>
      </View>
      <Image
        source={{uri: e?.firstPreviewImage?.watermarked}}
        style={styles.imageStyle}
      />
    </TouchableOpacity>
  );
};

export default SearchItem;

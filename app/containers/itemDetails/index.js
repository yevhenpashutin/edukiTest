import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {styles} from './styles';

const ItemDetailsContainer = ({route, navigation}) => {
  const {item} = route.params;
  const [portait, setPortrait] = useState(true);

  useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setPortrait(true);
      } else {
        setPortrait(false);
      }
    });
  }, []);

  if (portait) {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>{`BACK`}</Text>
        </TouchableOpacity>

        <Image
          source={{uri: item?.firstPreviewImage?.watermarked}}
          style={styles.imageStyle}
        />
        <View style={styles.infoSection}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.publicName}>
              {item?.author?.details?.publicName}
            </Text>
          </View>
          <Text style={styles.price}>{`${item?.price
            .toString()
            .replace('.', ',')} €`}</Text>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>{`BACK`}</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Image
            source={{uri: item?.firstPreviewImage?.watermarked}}
            style={styles.imageStyleLandscape}
          />
          <View style={styles.infoSection}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.publicName}>
                {item?.author?.details?.publicName}
              </Text>
            </View>
            <Text style={styles.price}>{`${item?.price
              .toString()
              .replace('.', ',')} €`}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default ItemDetailsContainer;

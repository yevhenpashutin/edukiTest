import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import SearchBar from './components/searchBar';
import SearchItem from './components/searchItem';

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getData(0);
  }, []);

  const getData = async increment => {
    function objToQueryString(obj) {
      const keyValuePairs = [];
      for (const key in obj) {
        keyValuePairs.push(
          encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]),
        );
      }
      return keyValuePairs.join('&');
    }

    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsVjZvNzJJQjd3cGdsRHhCIiwianRpIjoiNGFiZjA1MTI2NzNhY2ZkZTI5NTcxMGU3NjgxNjVjMmY1MWFjNzNlNTFkOWUwNWFkZmZjMjUyNzFkODY1ZDc4ZTYxM2FjZTNkNDYxNjhhZWYiLCJpYXQiOjE2Nzg2NjAxMjcuODIzNDcyLCJuYmYiOjE2Nzg2NjAxMjcuODIzNDc5LCJleHAiOjE3NDE4MTg1MjcuODIyNDUzLCJzdWIiOiIiLCJzY29wZXMiOlsicHVibGljIl19.uEaoxhTTfWqCoANRnNAwJaFU7Q0vz4K43XjYY3IwaXTeaydmcCgq1iPKpxrLsJ0Nrf8IPtyzYVFBiLDest-SkS76-Hbs75HMG66Wnl8WOyp5m8Uxc5KzAs6kzBwmhfr5b0TQEoLBVEEV5KSTJHWDTQlGlOJUwCRhoNHjqXJs9L4t_WOyKNE9y_Q2ED_z1dsEBNCl-HIiZ6c2Dci4pXZKs8-9jUpiaCga2tfjO6SvNqVkGle408p-9TRYD1BMTI1s7R1e8BbsTSo5FQJUgi6qUVapQCxu4WU3i3Wil1jjDKHqkSkafBl6VMX2ci-pj9fLKsUzuNSxCOUu9Jo8sbAE8e6VPOK3RxivIWN6BCX5sPBQIIWeS_bAjZ0vNBcubrJF4wwRwiUnSsgGKt3XnI9KhGsjaY5kmbqSnuQ6WdAvDkfvSA-HiX1xOCGmfQDXoGNrRR706bs7wlpqIbNF7lZZFjocfmiODif3rPj0QWf2amlSuCmlZzkyCoveNp43b2xYFQxcA1PlvAtchFTW6qA6vmqax7zoRfF1kQZg46P1pHimK3UchquAzeS4fALP0G93XQCprvN5iwNL9SuXgADlI-2QR1hWQ-i7RW2ElUhLt7PDQlEw5y49OLe5nhOMOxaSVRV8sbk5lX9CS28cJBezbg0ArLgFOv1nH88VNBZQKdM';
    try {
      const queryString = objToQueryString({
        limit: 20,
        p: page + increment,
        q: searchInput,
        world: 'de',
      });

      const response = await fetch(
        `https://api.eduki.com/api/v1/elastic?${queryString}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const json = await response.json();
      if (increment === 0) {
        setItems(json?.data?.items?.materials || []);
      } else {
        var newItems = [...items, ...json?.data?.items?.materials];
        setItems(newItems);
        increment !== 0 && setPage(page + increment);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            getData(1);
          }
        }}
        scrollEventThrottle={400}>
        <SearchBar
          text={searchInput}
          setSearchInput={setSearchInput}
          onSearch={getData}
        />
        <View style={styles.itemsContainer}>
          {items.map(e => {
            return <SearchItem e={e} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
  },
});

export default App;

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { useSelector } from 'react-redux';
import { RootState } from '../app/store'

import CardList from '../components/CardList';

const Home: React.FC = (): JSX.Element => {

  const { errorMessage } = useSelector((state: RootState) => state.news)

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <CardList />
          
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;

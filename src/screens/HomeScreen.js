import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { useSelector } from 'react-redux';

import CardList from '../components/CardList';

const HomeScreen = () => {

  const { errorMessage } = useSelector(state => state.news)

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
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

export default HomeScreen;

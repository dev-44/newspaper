import React, { useEffect, lazy, Suspense, FlatList } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

//const Card = lazy(() => import('./src/components/Card'))
import Card from './src/components/Card';

import { getNews } from './src/features/news/newsSlice'
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  const { news, isLoading, isSuccess, isError, errorMessage } = useSelector(state => state.news)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNews())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

/*   useEffect(() => {
    if (news.length) {
      console.log(news)
    }
  }, [news]) */

  return (
    <View style={styles.container}>
      <SafeAreaView> 
        <ScrollView>
          <View>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
{/*             <FlatList 
              data={news}
              renderItem={({ item }) => (
                <Card key={index} news={item} />
              )}
              keyExtractor={(item,index) => index.toString()}
            /> */}

            {news.length ? news.map((item, index) => <Card key={index} news={item} /> ) : null}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;

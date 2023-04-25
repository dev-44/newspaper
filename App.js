import React, { useState, useEffect, lazy, Suspense } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  FlatList
} from 'react-native';

//const Card = lazy(() => import('./src/components/Card'))
import Card from './src/components/Card';

import { getNews } from './src/features/news/newsSlice'
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  const [page, setPage] = useState(1)

  const { news, isLoading, isSuccess, isError, errorMessage } = useSelector(state => state.news)
  const dispatch = useDispatch()

  useEffect(() => {

    if (page < 10) {
      dispatch(getNews(page))
      console.log('CALL')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const renderFooter = () => {
    return (
      isLoading ? 
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View> : null
    )
  }

  const renderMoreData = () => {
    setPage(page + 1)
  }

  const renderEmpty = () => {
    return (
      page === 10 ?
      <View style={styles.emptyText}>
          <Text>No Data at the moment</Text>
      </View> : null
    )
  }


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
       
        {errorMessage ? <Text>{errorMessage}</Text> : null}
            
        <FlatList 
          data={news}
          renderItem={({item}) => {
            return <Card news={item} />
          }}
          keyExtractor={(_, index) => index.toString()}
          ListEmptyComponent={renderEmpty}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={0}
          onEndReached={renderMoreData}
        />         
        {/* {news.length ? news.map((item, index) => <Card key={index} news={item} /> ) : null} */}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
  emptyText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;

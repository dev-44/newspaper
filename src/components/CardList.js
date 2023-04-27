import React, { useState, useEffect, memo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  FlatList
} from 'react-native';

import { FlashList } from "@shopify/flash-list";

import Card from './Card';

import { getNews } from '../features/news/newsSlice'
import { useSelector, useDispatch } from 'react-redux';

const CardList = () => {

  const [page, setPage] = useState(1)

  const { news, isLoading, isSuccess, isError, errorMessage } = useSelector(state => state.news)
  const dispatch = useDispatch()

  useEffect(() => {

    /*if (page < 5) {
      dispatch(getNews())
      console.log('CALL')
    } */

    dispatch(getNews())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

        <FlashList
          data={news}
          renderItem={({item}) => {
            return <Card news={item} />
          }}
          estimatedItemSize={100}
        />
  );
};

const styles = StyleSheet.create({
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

export default memo(CardList);

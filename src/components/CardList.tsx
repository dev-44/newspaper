import React, { useState, useEffect, memo } from 'react';
import { FlashList } from "@shopify/flash-list";

import Card from './Card';

import { getNews } from '../features/news/newsSlice'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store'

const CardList: React.FC = (): JSX.Element => {

  const { news } = useSelector((state: RootState) => state.news)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    
      dispatch(getNews())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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

export default memo(CardList);

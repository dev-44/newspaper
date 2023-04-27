import React from 'react';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import newsService from './newsService';
import { AxiosError } from 'axios';

type MyAxiosError = AxiosError<{ message?: string }>;

interface Source {
    name: string;
}

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  content: string;
  url: string;
  source?: Source;
  [key: string]: string | unknown;
}

interface News { 
  news: Article[]; 
  isError: boolean; 
  isSuccess: boolean; 
  isLoading: boolean; 
  errorMessage: string; 
}

const initialState: News = {
  news: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: ''
};

// Get all news
export const getNews = createAsyncThunk<Article[], void, { rejectValue: string }>(
  'news/get',
  async (_, thunkAPI) => {
    try {
      return await newsService.getNews();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) =>{
    builder
      .addCase(getNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.news = state.news.concat(action.payload);
      })
      .addCase(getNews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload ?? 'Unknown error';
      });
  }
});

export const { reset } = newsSlice.actions;
export default newsSlice.reducer;

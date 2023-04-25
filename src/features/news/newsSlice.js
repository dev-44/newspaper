import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import newsService from './newsService'

const initialState = {
   news: [],
   isError: false,
   isSuccess: false,
   isLoading: false,
   errorMessage: ''
}

//Get all news
export const getNews = createAsyncThunk('news/get', async(page, thunkAPI) => {
    try {
        return await newsService.getNews(page)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}) 

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        reset: (state) => initialState,

    },
    extraReducers: (builder) =>{
        builder
            .addCase(getNews.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getNews.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.news = state.news.concat(action.payload)
            })
            .addCase(getNews.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.errorMessage = action.payload
            })
    }
})

export const {reset} = newsSlice.actions
export default newsSlice.reducer

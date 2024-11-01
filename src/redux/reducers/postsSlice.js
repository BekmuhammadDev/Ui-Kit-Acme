import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    } catch (error) {
        throw new Error('Failed to fetch posts')
    }

})

const initialState = {
    posts: [],
    error: null,
    status: 'idle'
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'success';
            state.posts = action.payload;
        }),
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })
    }

});

export default postsSlice.reducer;
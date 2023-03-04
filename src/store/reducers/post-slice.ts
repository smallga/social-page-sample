import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { PostModel } from '../../utility/interface/post-model';

interface PostSliceModel {
  currentPosts: PostModel[], //目前的 Post,
  newPost: PostModel[], //新的 Post
  isLoading: boolean,
}

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    isLoading: false,
    currentPosts: [],
    newPost: [],
  } as PostSliceModel,
  reducers: {
    getPostsFirst: (state) => {
    },
    setPostIsFetching: (state) => {
      state.isLoading = true
    },
    setPostIsFetchComplete: (state) => {
      state.isLoading = false
    },
    getPreviosPost: (state) => {
    },
    setPosts:(state: PostSliceModel, action: PayloadAction<PostModel[]>) => {
      state.currentPosts = action.payload;
    },
    addPost:(state: PostSliceModel, action: PayloadAction<PostModel[]>) => {
      state.currentPosts.push(...action.payload);
    },
  },
})

export const { addPost, setPosts, getPreviosPost, getPostsFirst, setPostIsFetching, setPostIsFetchComplete} = postSlice.actions

export const getPosts = (state: RootState) => state.post.currentPosts;
export const getPostIsLoading = (state: RootState) => state.post.isLoading;

export default postSlice.reducer

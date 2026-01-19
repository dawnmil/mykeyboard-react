import { configureStore } from '@reduxjs/toolkit'
import keyboardReducer from './slices/keyboardSlice';
import displayReducer from './slices/displaySlice';

export const store = configureStore({
  reducer: {
    keyboard: keyboardReducer,
    display: displayReducer
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
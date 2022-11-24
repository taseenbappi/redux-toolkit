import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";
import postsReducer from "../features/Posts/postsSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer
    }
})
export default store;
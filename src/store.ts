import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "./redux/ui/NavbarSlice";
import HeaderSlice from "./redux/cv/HeaderSlice";
import SummarySlice from "./redux/cv/SummarySlice";
import ExperienceSlice from "./redux/cv/ExperienceSlice";

const store = configureStore({
  reducer: {
    navbar: NavbarSlice,
    cvHeader: HeaderSlice,
    summary: SummarySlice,
    experience: ExperienceSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;

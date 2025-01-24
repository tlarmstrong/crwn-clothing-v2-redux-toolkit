import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
};

// createSlice namespaces actions for us
// creates reducer as well as actions and action types
export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      // mutationesque, but under the hood, this is still returning a new object
      // we're not mutating the state
      state.currentUser = action.payload
    }
  }
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

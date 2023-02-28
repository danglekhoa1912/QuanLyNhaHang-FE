import {createSlice} from '@reduxjs/toolkit';
import {reducer} from './reducer';

export interface IUserState {
  token: string;
}

const initialState = {
  token: '',
} as IUserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: reducer,
  // extraReducers:''
});

export const {} = userSlice.actions;

export default userSlice.reducer;

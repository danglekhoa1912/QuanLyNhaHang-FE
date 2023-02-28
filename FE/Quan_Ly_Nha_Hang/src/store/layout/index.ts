import {reducer} from './reducer';
import {createSlice} from '@reduxjs/toolkit';

export interface ILayoutState {
  loading: number;
}

const initialState = {
  loading: 0,
} as ILayoutState;

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: reducer,
});

export const {resetSpinner, showSpinner, hideSpinner} = layoutSlice.actions;

export default layoutSlice.reducer;

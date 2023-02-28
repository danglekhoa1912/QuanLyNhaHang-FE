import {createSelector} from '@reduxjs/toolkit';
import {AppState} from 'store';

const getLoading = (state: AppState) => state.layout?.loading;

export const sIsLoading = createSelector(
  getLoading,
  (loading: number) => loading > 0,
);

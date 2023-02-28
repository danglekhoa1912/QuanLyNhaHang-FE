import {ILayoutState} from '.';

export const reducer = {
  resetSpinner: (state: ILayoutState) => {
    state.loading = 0;
  },
  showSpinner: (state: ILayoutState) => {
    state.loading++;
  },
  hideSpinner: (state: ILayoutState) => {
    const tmpLoading = state.loading - 1;
    state.loading = tmpLoading < 0 ? 0 : tmpLoading;
  },
};

import { Reducer } from 'redux';
import { ACTIONS } from './application.actions';

export interface ApplicationState {
  showSidebar: boolean;
}

const defaultState: ApplicationState = {
  showSidebar: false,
};

const reducer: Reducer<ApplicationState> = (state: ApplicationState = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_SIDEBAR:
      return { ...state, showSidebar: !state.showSidebar };
    default: return state;
  }
};

export default reducer;

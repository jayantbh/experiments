import { AnyAction, applyMiddleware, combineReducers, createStore, Dispatch, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import application, { ApplicationState } from './application.reducer';

const isNotProd = process.env.NODE_ENV !== 'production';

export interface ReduxState {
  application: ApplicationState;
}

const rootReducer = combineReducers<ReduxState>({
  application,
});

let middlewares: Array<Middleware<{}, any, Dispatch<AnyAction>>> = [];
middlewares = isNotProd ? [reduxImmutableStateInvariant(), ...middlewares] : middlewares;

export default () => createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

import { combineReducers } from 'redux';

import posts from './activityReducer';

export const reducers = combineReducers({ posts });
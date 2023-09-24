import { combineReducers } from 'redux';


import auth from './auth';
import posts from './posts';
import userinfo from "./userinfo"

export const reducers = combineReducers({ auth, posts,userinfo });


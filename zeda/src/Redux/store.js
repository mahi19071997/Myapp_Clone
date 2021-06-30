import {appReducer} from "./appRedux/reducer"
import { createStore, applyMiddleware, compose,combineReducers } from 'redux'
import thunk from "redux-thunk";



const rootReducer = combineReducers({
  app: appReducer
  });
export const store  = createStore(rootReducer, applyMiddleware(thunk));
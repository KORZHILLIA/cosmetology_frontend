import { combineReducers } from '@reduxjs/toolkit';

import { authPersistReducer } from './auth/auth-slice';

const rootReducer = combineReducers({
  auth: authPersistReducer,
});

export default rootReducer;

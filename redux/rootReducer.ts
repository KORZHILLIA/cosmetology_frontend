import { combineReducers } from '@reduxjs/toolkit';

import { authPersistReducer } from './auth/auth-slice';
import { datesPersistReducer } from './dates/dates-slice';

const rootReducer = combineReducers({
  auth: authPersistReducer,
  dates: datesPersistReducer,
});

export default rootReducer;

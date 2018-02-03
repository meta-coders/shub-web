import { combineReducers } from 'redux';
import sessionInfo from './sessionInfo.js';
import schedule from './schedule.js';
import homeWork from './homeWork.js';
import events from './events.js';

const reducer = combineReducers({
  sessionInfo,
  schedule,
  homeWork,
  events,
});

export default reducer;

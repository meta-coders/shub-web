import { combineReducers } from 'redux';
import sessionInfo from './sessionInfo.js';
import schedule from './schedule.js';
import homeWork from './homeWork.js';
import events from './events.js';
import pathname from './pathname.js';

const reducer = combineReducers({
  sessionInfo,
  schedule,
  homeWork,
  events,
  pathname,
});

export default reducer;

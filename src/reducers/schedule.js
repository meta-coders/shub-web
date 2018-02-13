const initialState = {
  'schedule': [],
  'timetable': [],
};

export default function sch(state = initialState, action) {
  console.dir(action);
  if (action.type === 'FETCH_SCHEDULE_POST') {
    console.log('FETCH_SCHEDULE_POST');
    return action.data;
  }
  return state;
}

const initialState = {
  'schedule': [],
  'timetable': [
    { 'id': 1, 'start': '08:00', 'end': '08:45' },
    { 'id': 2, 'start': '08:55', 'end': '09:40' },
    { 'id': 3, 'start': '09:50', 'end': '10:35' },
    { 'id': 4, 'start': '10:55', 'end': '11:40' },
    { 'id': 5, 'start': '11:50', 'end': '12:35' },
    { 'id': 6, 'start': '12:45', 'end': '13:30' },
    { 'id': 7, 'start': '13:50', 'end': '14:35' },
    { 'id': 8, 'start': '14:45', 'end': '15:30' },
    { 'id': 9, 'start': '15:40', 'end': '16:25' },
    { 'id': 10, 'start': '16:45', 'end': '17:30' },
  ],
};

export default function sch(state = initialState, action) {
  console.dir(action);
  if (action.type === 'FETCH_SCHEDULE_POST') {
    console.log('FETCH_SCHEDULE_POST');
    return action.data;
  }
  return state;
}

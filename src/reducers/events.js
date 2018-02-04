const initialState =  [
    ];

export default (state = initialState, action) => {
  if (action.type === 'FETCH_EVENT_POST') {
    return action.data;
  }
  return state;
};

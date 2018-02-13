const initialState =  [{}];

export default (state = initialState, action) => {
  if (action.type === 'FETCH_PINNED') {
    return action.data;
  }
  return state;
};

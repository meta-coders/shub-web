const initialState =  [];

export default (state = initialState, action) => {
  if (action.type === 'FETCH_HOMEWORK') {
    return action.data;
  }
  return state;
};

const initialState =  [];

export default (state = initialState, action) => {
  if (action.type === 'POST_HOMEWORK') {
    return action.data;
  }
  return state;
};

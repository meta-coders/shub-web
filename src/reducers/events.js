const initialState =  [];

export default (state = initialState, action) => {
  if (action.type === 'POST_EVENT') {
    return action.data;
  }
  return state;
};

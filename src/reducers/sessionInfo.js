const initialState =  {
  sessionId: false,
  userId: false,
};

export default (state = initialState, action) => {
  if (action.type === 'POST_LOGIN_INFO') {
    return action.data;
  }
  if (action.type === 'LOG_OUT') {
    console.log(initialState);
    return initialState;
  }
  return state;
};

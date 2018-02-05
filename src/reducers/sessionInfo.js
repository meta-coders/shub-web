const initialState =  {
  sessionId: false,
  name: '',
};

export default (state = initialState, action) => {
  if (action.type === 'POST_LOGIN_INFO') {
    localStorage.setItem('sessionId', action.data.sessionId);
    localStorage.setItem('name', action.data.name);
    return action.data;
  }
  if (action.type === 'POST_LOGOUT_INFO') {
    localStorage.setItem('sessionId', initialState.sessionId);
    localStorage.setItem('name', initialState.name);
    return initialState;
  }
  if (action.type === 'RENDER_PAGE') {
    return {
      sessionId: localStorage.getItem('sessionId'),
      name: localStorage.getItem('name'),
    };
  }
  return state;
};

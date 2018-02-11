const initialState =  window.location.pathname;

export default (state = initialState, action) => {
  if (action.type === 'CHANGE_PATH') {
    return action.pathname;
  }
  return state;
};

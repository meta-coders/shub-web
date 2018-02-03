const initialState =  {
  timeTable:{
    1:['8:30','9:15'],
    1:['8:30','9:15'],
    1:['8:30','9:15'],
    1:['8:30','9:15'],
    1:['8:30','9:15'],
    1:['8:30','9:15'],
    1:['8:30','9:15'],
  },
  schedule:{
    1:[],
    2:[],
    3:[],
    4:[],
    5:[],
    6:[],
  }
};

export default (state = initialState, action) => {
  if (action.type === 'POST_HOMEWORK') {
    return action.data;
  }
  return state;
};

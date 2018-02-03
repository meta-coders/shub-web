const initialState =  {
  timeTable:{
    1:['8:30','9:15'],
    2:['8:30','9:15'],
    3:['8:30','9:15'],
    4:['8:30','9:15'],
    5:['8:30','9:15'],
    6:['8:30','9:15'],
    7:['8:30','9:15'],
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

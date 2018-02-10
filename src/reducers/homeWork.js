const initialState =  [
  {
    'id': 1,
    'done': false,
    'date': '2018-03-01',
    'lesson_id': 10,
    'desc': 'Nullam molestie nibh in lectus. Pellentesque at nulla.\
     Suspendisse potenti.',
  },
  {
    'id': 2,
    'done': true,
    'date': '2018-03-12',
    'lesson_id': 33,
    'desc': 'Vestibulum rutrum rutrum neque. Aenean auctor\
     gravida sem.',
  },
  {
    'id': 3,
    'done': false,
    'date': '2018-02-14',
    'lesson_id': 8,
    'desc': 'Nulla mollis molestie lorem. Quisque ut erat.',
  },
  {
    'id': 4,
    'done': false,
    'date': '2018-03-01',
    'lesson_id': 2,
    'desc': 'Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
  },
  {
    'id': 5,
    'done': true,
    'date': '2018-02-17',
    'lesson_id': 4,
    'desc': 'Sed accumsan felis. Ut at dolor quis odio consequat varius.\
     Integer ac leo.',
  },
  {
    'id': 6,
    'done': true,
    'date': '2018-02-10',
    'lesson_id': 31,
    'desc': 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit\
     amet eros. Suspendisse accumsan tortor quis turpis.',
  },
  {
    'id': 7,
    'done': false,
    'date': '2018-03-10',
    'lesson_id': 12,
    'desc': 'Quisque ut erat.',
  },
  {
    'id': 8,
    'done': true,
    'date': '2018-02-14',
    'lesson_id': 31,
    'desc': 'Mauris sit amet eros. Suspendisse accumsan tortor quis\
     turpis. Sed ante.',
  },
];

export default (state = initialState, action) => {
  if (action.type === 'FETCH_HOMEWORK') {
    return action.data;
  }
  return state;
};

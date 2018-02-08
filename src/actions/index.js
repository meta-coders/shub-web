const Actions = {
  homeworkAction: (homeworkId, sessionId, homework) => (dispatch) => {
    const newHomework = homework.map((task) =>{
      if(task.id!==homeworkId) {
        return task
      } else {
        const newTask = { ...task, done:!task.done,}
        return newTask
      }}
    )
    // let currentTask = homework.filter((task, i) => task.id===homeworkId);
    console.log(sessionId);
    dispatch ({
    type:'FETCH_HOMEWORK',
    data: newHomework
    })
  },
  timetableAction: sessionId => (dispatch) => {
    console.log('timetableAction' + sessionId);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const myInit = {
      method: 'POST',
      body: JSON.stringify({
        sessionId,
      }),
      headers,
    };

    fetch('/api/getSchedule.json', myInit).catch(err => {
      console.log(err)
      dispatch({
        type:'FETCH_SCHEDULE_POST',
        data:[]
      })
    }).then((response) => {
      console.log('Fetch');
      return response.json();
    }).then(
      (result) => {
        console.log(result);
        const data = result;
        const dispatchObj = {
          type: 'FETCH_SCHEDULE_POST',
          data,
        };
        console.log(dispatchObj);
        dispatch(dispatchObj);
      }
    );
  },

  eventsAction: sessionId => (dispatch) => {
    console.log('eventsAction' + sessionId);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const myInit = {
      method: 'POST',
      body: JSON.stringify({
        sessionId,
      }),
      headers,
    };

    fetch('/api/getEvents.json', myInit).catch(err => {
      console.log(err)
      dispatch({
        type:'FETCH_EVENT_POST',
        data:[]
      })
    }).then((response) => {
      console.log('Fetch');
      return response.json();
    }).then(
      (result) => {
        console.log(result);
        const data = result;
        const dispatchObj = {
          type: 'FETCH_EVENT_POST',
          data,
        };
        console.log(dispatchObj);
        dispatch(dispatchObj);
      }
    );
  },

  signInAction: (nickname, password) => (dispatch) => {

    console.log('signInAction: ' + nickname + ' : ' + password);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const myInit = {
      method: 'POST',
      body: JSON.stringify({
        login: nickname,
        password,
      }),
      headers,
    };

    fetch('/auth/signIn.json', myInit).then((response) => {
      console.log('Fetch');
      return response.json();
    }).then(
      (result) => {
        result.name = nickname;
        const dispatchAbleSessionInfo = {
          type: 'POST_LOGIN_INFO',
          data: result,
        };
        console.log(dispatchAbleSessionInfo);
        dispatch(dispatchAbleSessionInfo);
      }
    ).catch(
      (err) => {
        console.log('SignIn Err: '+err);
        alert('You need to log in!');
      }
    );
  },

  logOutAction: sessionId => (dispatch) => {

    console.dir({ sessionId });

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const myInit = {
      method: 'POST',
      body: JSON.stringify({
        sessionId: localStorage.getItem('sessionId'),
      }),
      headers,
    };

    fetch('/auth/signOut.json', myInit).then(() => {
      console.log('Fetch');
      return {};
    }).then(
      () => {
        const dispatchAbleSessionInfo = {
          type: 'POST_LOGOUT_INFO',
          data: {},
        };
        console.log(dispatchAbleSessionInfo);
        dispatch(dispatchAbleSessionInfo);
      }
    ).catch(
      (err) => {
        alert('You haven`t log out!');
        console.log(err);
      }
    );
  },
};

export default Actions;

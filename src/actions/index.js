const Actions = {
  getPinnedAction: sessionId => (dispatch) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const myInit = {
      method: 'POST',
      body: JSON.stringify({
        sessionId,
      }),
      headers,
    };

    fetch('api/getPinnedMessages.json', myInit).then(
      (response) => {
        console.log('FETCH_PINNED');
        return response.json();
      }).then(
      (result) => {
        console.log(result);
        const data = result;
        const dispatchObj = {
          type: 'FETCH_PINNED',
          data,
        };
        console.log(dispatchObj);
        dispatch(dispatchObj);
      }
    );
  },
  homeworkAction: (homeworkId, sessionId, done) => (dispatch) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const myInit = {
      method: 'POST',
      body: JSON.stringify({
        sessionId,
        homeworkId,
        done: !done,
      }),
      headers,
    };

    fetch('api/getHomework.json', myInit).catch((err) => {
      console.log(err);
      dispatch({
        type: 'FETCH_HOMEWORK',
        data: [],
      });
    }).then(
      (response) => {
        console.log('FETCH_HOMEWORK');
        return response.json();
      }).then(
      (result) => {
        console.log(result);
        const data = result;
        const dispatchObj = {
          type: 'FETCH_HOMEWORK',
          data,
        };
        console.log(dispatchObj);
        dispatch(dispatchObj);
      }
    );
  },


  // const newHomework = homework.map((task) => {
  //   if (task.id !== homeworkId) {
  //     return task;
  //     } else {
  //       const newTask = { ...task, done: !task.done };
  //       return newTask;
  //     }
  //   });
  // console.log(sessionId);
  // dispatch({
  //   type: 'FETCH_HOMEWORK',
  //   data: newHomework,
  // });
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

    fetch('/api/getSchedule.json', myInit).catch((err) => {
      console.log(err);
      dispatch({
        type: 'FETCH_SCHEDULE_POST',
        data: [],
      });
    }).then((response) => {
      console.log('FETCH_SCHEDULE_POST');
      return response.json();
    }).then(
      (result) => {
        console.log(result);
        const data = (
          result === 'Not Authorized' ?
            { schedule: [], timetable: [] } :
            result
        );
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

    fetch('/api/getEvents.json', myInit).catch((err) => {
      console.log(err);
      dispatch({
        type: 'FETCH_EVENT_POST',
        data: [],
      });
    }).then((response) => {
      console.log('FETCH_EVENT_POST');
      return response.json();
    }).then(
      (result) => {
        console.log(result);
        const data = (result === 'Not authorized' ? [] : result);
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

    fetch('/auth/signIn.json', myInit).catch(
      (err) => {
        console.log('SignIn Err: ' + err);
        alert('You need to log in!');
      }
    ).then((response) => {
      console.log('POST_LOGIN_INFO');
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
      console.log('POST_LOGOUT_INFO');
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

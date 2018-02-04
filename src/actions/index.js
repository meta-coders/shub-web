const Actions = {
  // memeCoupleAction: (dispatch) => {
  //   console.log('memeCoupleAction');
  //   const promise = new Promise((resolve) => {
  //     setTimeout(
  //       () => resolve({
  //         type: 'FETCH_MEME_COUPLE',
  //         memes: [
  //           {
  //             id: '5a65dcf5fac3122588a47849',
  //             url: 'https://i.redditmedia.com/Ara_qc1bxuYpcZCKGrS2BvAiPfrMzvjG4oSUPBbBvDc.jpg?s=eba550a040588e7996d7b7ed750823b1',
  //           },
  //           {
  //             id: '5a65dcf5fac3122588a4784a',
  //             url: 'https://i.redditmedia.com/e4NTkVHbzIm3Vt_qmbyIlYtUT9AnI08rpCL11vKruXU.jpg?s=5a233a6be970ee9e624ba68423b90b6d',
  //           },
  //         ],
  //       }), 1000
  //     );
  //   });
  //   promise.then(
  //     result => (dispatch(result))
  //   );
  // },
  //
  timetableAction: (sessionId) => (dispatch) => {
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

    fetch('/api/getSchedule', myInit).then((response) => {
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
    ).catch(err => console.log(err));
  },

  timetableAction2: (sessionId) => (dispatch) => {
    console.log('timetableAction2' + sessionId);

    const promise = new Promise((resolve) => {
      setTimeout(
        () => resolve({
          type: 'FETCH_SCHEDULE_POST',
          data: {
            "schedule":[
              {"weekday":1,"lesson":1,"subject":"Математика","cabinet":100,"teacher_name":"Петровіч О.В."},
              {"weekday":1,"lesson":2,"subject":"Англ. Мова","cabinet":101,"teacher_name":"Генадівнічівна І.І."},
              {"weekday":1,"lesson":3,"subject":"Укр. Мова","cabinet":102,"teacher_name":"Довгополючка Р.Р."},
              {"weekday":1,"lesson":4,"subject":"Інформатика","cabinet":103,"teacher_name":"Кувічка М.Е."},
              {"weekday":1,"lesson":5,"subject":"Економіка","cabinet":104,"teacher_name":"Мачехін М.М."},
              {"weekday":1,"lesson":6,"subject":"Фізра","cabinet":105,"teacher_name":"Фізрук Е.Ю."},
              {"weekday":1,"lesson":7,"subject":"Історія","cabinet":106,"teacher_name":"Шевчук Х.Т."},
              {"weekday":2,"lesson":1,"subject":"Математика","cabinet":200,"teacher_name":"Петровіч О.В."},
              {"weekday":2,"lesson":2,"subject":"Англ. Мова","cabinet":201,"teacher_name":"Генадівнічівна І.І."},
              {"weekday":2,"lesson":3,"subject":"Укр. Мова","cabinet":202,"teacher_name":"Довгополючка Р.Р."},
              {"weekday":2,"lesson":4,"subject":"Інформатика","cabinet":203,"teacher_name":"Кувічка М.Е."},
              {"weekday":2,"lesson":5,"subject":"Економіка","cabinet":204,"teacher_name":"Мачехін М.М."},
              {"weekday":2,"lesson":7,"subject":"Історія","cabinet":206,"teacher_name":"Шевчук Х.Т."},
              {"weekday":3,"lesson":1,"subject":"Математика","cabinet":300,"teacher_name":"Петровіч О.В."},
              {"weekday":3,"lesson":2,"subject":"Англ. Мова","cabinet":301,"teacher_name":"Генадівнічівна І.І."},
              {"weekday":3,"lesson":3,"subject":"Укр. Мова","cabinet":302,"teacher_name":"Довгополючка Р.Р."},
              {"weekday":3,"lesson":4,"subject":"Інформатика","cabinet":303,"teacher_name":"Кувічка М.Е."},
              {"weekday":3,"lesson":5,"subject":"Економіка","cabinet":304,"teacher_name":"Мачехін М.М."},
              {"weekday":3,"lesson":6,"subject":"Фізра","cabinet":305,"teacher_name":"Фізрук Е.Ю."},
              {"weekday":3,"lesson":7,"subject":"Історія","cabinet":306,"teacher_name":"Шевчук Х.Т."},
              {"weekday":5,"lesson":1,"subject":"Математика","cabinet":500,"teacher_name":"Петровіч О.В."},
              {"weekday":5,"lesson":2,"subject":"Англ. Мова","cabinet":501,"teacher_name":"Генадівнічівна І.І."},
              {"weekday":5,"lesson":3,"subject":"Укр. Мова","cabinet":502,"teacher_name":"Довгополючка Р.Р."},
              {"weekday":5,"lesson":5,"subject":"Економіка","cabinet":504,"teacher_name":"Мачехін М.М."},
              {"weekday":5,"lesson":6,"subject":"Фізра","cabinet":505,"teacher_name":"Фізрук Е.Ю."},
              {"weekday":5,"lesson":7,"subject":"Історія","cabinet":506,"teacher_name":"Шевчук Х.Т."},
              {"weekday":6,"lesson":1,"subject":"Математика","cabinet":600,"teacher_name":"Петровіч О.В."},
              {"weekday":6,"lesson":2,"subject":"Англ. Мова","cabinet":601,"teacher_name":"Генадівнічівна І.І."},
              {"weekday":6,"lesson":3,"subject":"Укр. Мова","cabinet":602,"teacher_name":"Довгополючка Р.Р."},
              {"weekday":6,"lesson":4,"subject":"Інформатика","cabinet":603,"teacher_name":"Кувічка М.Е."},
              {"weekday":6,"lesson":5,"subject":"Економіка","cabinet":604,"teacher_name":"Мачехін М.М."},
              {"weekday":6,"lesson":6,"subject":"Фізра","cabinet":605,"teacher_name":"Фізрук Е.Ю."},
              {"weekday":6,"lesson":7,"subject":"Історія","cabinet":606,"teacher_name":"Шевчук Х.Т."}
            ],
            "timetable":[
              {"id":1,"start":"08:00","end":"08:45"},
              {"id":2,"start":"08:55","end":"09:40"},
              {"id":3,"start":"09:50","end":"10:35"},
              {"id":4,"start":"10:55","end":"11:40"},
              {"id":5,"start":"11:50","end":"12:35"},
              {"id":6,"start":"12:45","end":"13:30"},
              {"id":7,"start":"13:50","end":"14:35"},
              {"id":8,"start":"14:45","end":"15:30"},
              {"id":9,"start":"15:40","end":"16:25"},
              {"id":10,"start":"16:45","end":"17:30"},
            ],
          },
        }), 1000
      );
    });
    promise.then(
      result => (dispatch(result))
    );
  },
  eventsAction: (sessionId) => (dispatch) => {
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

    fetch('/api/getEvents', myInit).then((response) => {
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
    ).catch(err => console.log(err));
  },

  // signInAction: (nickname, password) => (dispatch) => {
  //
  //   console.log('signInAction: ' + nickname + ' : ' + password);
  //
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //
  //   const myInit = {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       credentials: {
  //         login: nickname,
  //         password,
  //       },
  //     }),
  //     headers,
  //   };
  //
  //   fetch('/loginVerify', myInit).then((response) => {
  //     console.log('Fetch');
  //     return response.json();
  //   }).then(
  //     (result) => {
  //       if (!result.authenticated.sessionId) {
  //         alert('You need to log in!');
  //       }
  //       const dispatchAbleSessionInfo = {
  //         type: 'POST_LOGIN_INFO',
  //         data: result.authenticated,
  //       };
  //       console.log(dispatchAbleSessionInfo);
  //       dispatch(dispatchAbleSessionInfo);
  //     }
  //   ).catch(err => console.log(err));
  // },
  //
  // registrationAction: (nickname, password) => (dispatch) => {
  //
  //   console.log('registrationAction: ' + nickname + ' : ' + password);
  //
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //
  //   const myInit = {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       credentials: {
  //         login: nickname,
  //         password,
  //       },
  //     }),
  //     headers,
  //   };
  //
  //   fetch('/handleRegistration', myInit).then((response) => {
  //     console.log('Fetch');
  //     return response.json();
  //   }).then(
  //     (result) => {
  //       const dispatchAbleSessionInfo = {
  //         type: 'POST_LOGIN_INFO',
  //         data: result,
  //       };
  //       console.log(dispatchAbleSessionInfo);
  //       dispatch(dispatchAbleSessionInfo);
  //     }
  //   ).catch(err => console.log(err));
  // },
  // logOutAction: {
  //   type: 'LOG_OUT',
  // },
  // getMemesStats: (dispatch) => {
  //   fetch('/getMemesStats').then((response) => {
  //     console.log('getMemesStats Fetched');
  //     return response.json();
  //   }).then(
  //     (result) => {
  //       const dispatchAbleMemesStats = {
  //         type: 'FETCH_MEME_STATS',
  //         data: result.memes.sort((a, b) => b.rating - a.rating),
  //       };
  //       dispatch(dispatchAbleMemesStats);
  //     }
  //   );
  // },
};

export default Actions;

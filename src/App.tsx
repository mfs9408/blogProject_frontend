import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from './router';
import { AuthServiceBase } from './services/AuthService.base';
import { userActions } from './store/user';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      AuthServiceBase.check().then((response) =>
        dispatch(userActions.getUser(response.payload))
      );
    }
  }, [dispatch]);

  return <Router />;
}

export default App;

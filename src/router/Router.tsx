import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainPage from '../pages/MainPage';
import Registration from '../components/Registration';
import SuccessfullyRegistered from '../pages/SuccessfullyRegistered';

const Router = () => {
  const path = '/api';

  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path={`${path}/registration`} element={<Registration />} />
        <Route
          path={`${path}/successfullyregistered`}
          element={<SuccessfullyRegistered />}
        />
        <Route path={`${path}/`} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

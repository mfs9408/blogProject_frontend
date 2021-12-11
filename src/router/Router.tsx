import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainPage from '../pages/MainPage';
import SuccessfullyRegistered from '../pages/SuccessfullyRegistered';
import PostPage from '../pages/PostPage/PostPage';

const Router = () => {
  const path = '/api';

  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route
          path={`${path}/successfullyregistered`}
          element={<SuccessfullyRegistered />}
        />
        <Route path={`${path}/myposts`} element={<div>my posts</div>} />
        <Route path={`${path}/post/:id`} element={<PostPage />} />
        <Route path={`${path}/`} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

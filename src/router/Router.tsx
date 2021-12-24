import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainPage from '../pages/MainPage';
import SuccessfullyRegistered from '../pages/SuccessfullyRegistered';
import PostPage from '../pages/PostPage/PostPage';
import MyPosts from '../pages/MyPosts';
import Template from '../components/Template';
import NewPostPage from '../pages/NewPostPage';

const Router = () => {
  const path = '/api';

  return (
    <BrowserRouter>
      <CssBaseline />
      <Template>
        <Routes>
          <Route
            path={`${path}/successfullyregistered`}
            element={<SuccessfullyRegistered />}
          />
          <Route path={`${path}/myposts`} element={<MyPosts />} />
          <Route path={`${path}/:id`} element={<PostPage />} />
          <Route path={`${path}/newpost`} element={<NewPostPage />} />
          <Route path={`${path}/`} element={<MainPage />} />
        </Routes>
      </Template>
    </BrowserRouter>
  );
};

export default Router;

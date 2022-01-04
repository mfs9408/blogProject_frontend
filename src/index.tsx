import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import store from './store/store';
import App from './App';
import './index.css';
import MyPostsProvider from './components/MyPostsProvider';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MyPostsProvider>
        <App />
      </MyPostsProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

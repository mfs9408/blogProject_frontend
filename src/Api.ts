import axios from 'axios';

export const baseURL = process.env.REACT_APP_SERVER_URL;

export const apiClient = axios.create({
  baseURL,
});

// Will be used later
//
// const $authInterceptor = (config: any) => {
//   const CancelToken = axios.CancelToken;
//
//   config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
//   return config;
// };

axios.interceptors.request.use(
  (config) => {
    const CancelToken = axios.CancelToken;
    let cancel;

    config.cancelToken = new CancelToken(function executor(canceler) {
      cancel = canceler;
    });

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const { get, post } = apiClient;

export { get, post };

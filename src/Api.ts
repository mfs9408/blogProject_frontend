import axios from 'axios';

export const baseURL = process.env.REACT_APP_SERVER_URL;

export const apiClient = axios.create({
  baseURL,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

apiClient.interceptors.request.use(authInterceptor);

const { get, post } = apiClient;

export { get, post };

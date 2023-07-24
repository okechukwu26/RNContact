import axios from 'axios';
import env from '../config/env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const headers = {
  'Content-type': 'application/json',
};
const axiosInstance = axios.create({
  baseURL: env.DEV_BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    // const token = await AsyncStorage.getItem('token');
    // if (token) {
    config.headers.Authorization = 'token';

    return config;
    //}
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;

import axios from 'axios';

import webStorage from '@/helpers/webStorage';
import isString from '@/helpers/isString';
import { ROUTES, APP_KEYS } from '@/constants';

import { ERROR_CODES } from './constants';

const config = {
  baseURL: process.env.VUE_APP_BASE_API_URL,
  timeout: 30000,
};

const appAxios = axios.create(config);

const createAuthenToken = token => `Bearer ${token}`;

export function setAxiosHeadersDefaultsAccessToken(token) {
  appAxios.defaults.headers.common.Authorization = createAuthenToken(token);
}

const accessToken = webStorage.get(APP_KEYS.ACCESS_TOKEN);

if (accessToken) setAxiosHeadersDefaultsAccessToken(accessToken);

let isRefreshing = false;
const failedAPIOnCall = [];
// [section] this is array of failed API/action i called (because of expired token, etc...)

function addFailedAPIOnCall(failedCallback) {
  failedAPIOnCall.push(failedCallback);
  // add the call function to re-call when we have a new token
}

function reCallFailedAPI(token) {
  failedAPIOnCall.map(failedCallback => failedCallback(token));
  // re-call all the API that failed
}

function reloadApp() {
  webStorage.remove(APP_KEYS.ACCESS_TOKEN);
  webStorage.remove(APP_KEYS.REFRESH_TOKEN);
  // force reload app, reset all state
  window.location.replace(ROUTES.LOGIN);
}

appAxios.interceptors.response.use(
  response => response,
  error => {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    if (ERROR_CODES.UNAUTHORIZED === status) {
      const refreshToken = webStorage.get(APP_KEYS.REFRESH_TOKEN);

      if (!isString(refreshToken)) {
        reloadApp();
        return Promise.reject(error);
      }

      if (isRefreshing === false) {
        isRefreshing = true;
        axios({
          ...config,
          method: 'post',
          url: 'auth/refresh-token',
          headers: { Authorization: createAuthenToken(refreshToken) },
        })
          .then(({ data }) => {
            const newAccessToken = data.data.accessToken;
            const newRefreshToken = data.data.refreshToken;

            webStorage.set(APP_KEYS.ACCESS_TOKEN, newAccessToken?.token);
            webStorage.set(APP_KEYS.REFRESH_TOKEN, newRefreshToken?.token);

            isRefreshing = false;

            setAxiosHeadersDefaultsAccessToken(newAccessToken?.token);
            reCallFailedAPI(newAccessToken?.token);
          })
          .catch(() => {
            reloadApp();
            return Promise.reject(error);
          });
      }

      return new Promise(resolve => {
        addFailedAPIOnCall(newToken => {
          originalRequest.headers.Authorization = createAuthenToken(newToken);

          resolve(appAxios(originalRequest));
        });
      });
    }

    if (ERROR_CODES.FORBIDDEN === status) {
      window.location.replace(ROUTES.HOME);
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export default appAxios;

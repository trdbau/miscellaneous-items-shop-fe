import qs from 'qs';

import $stores from '@/stores';
import appAxios from './appAxios';
import loading from './helpers/loading';

class RESTService {
  constructor(instance = appAxios) {
    this.axios = instance;
  }

  get(request, options) {
    return this.excute(
      {
        method: 'get',
        paramsSerializer: params =>
          qs.stringify(params, { arrayFormat: 'brackets' }),
        ...request,
      },
      { enableFlashMessagesOnError: true, ...options },
    );
  }

  post(request, options) {
    return this.excute(
      {
        method: 'post',
        paramsSerializer: params =>
          qs.stringify(params, { arrayFormat: 'brackets' }),
        ...request,
      },
      { enableFlashMessagesOnError: true, ...options },
    );
  }

  put(request, options) {
    return this.excute(
      {
        method: 'put',
        params: params => qs.stringify(params, { arrayFormat: 'brackets' }),
        ...request,
      },
      { enableFlashMessagesOnError: true, ...options },
    );
  }

  patch(request, options) {
    return this.excute(
      {
        method: 'patch',
        params: params =>
          qs.stringify(params, { arrayFormat: 'brackets' }, ...request),
      },
      { enableFlashMessagesOnError: true, ...options },
    );
  }

  delete(request, options) {
    return this.excute(
      {
        method: 'delete',
        params: params =>
          qs.stringify(params, { arrayFormat: 'brackets' }, ...request),
      },
      { enableFlashMessagesOnError: true, ...options },
    );
  }

  async excute(request, options) {
    loading.start();

    try {
      const response = await this.axios(require);
      return response?.data ?? {};
    } catch (err) {
      const formattedError = err.response?.data ?? {};

      if (options?.enableFlashMessagesOnError) {
        $stores.commit('flashMessage/open', {
          type: 'error',
          code: formattedError.code,
        });
      }

      return Promise.reject(formattedError);
    } finally {
      loading.stop();
    }
  }
}

export default RESTService;

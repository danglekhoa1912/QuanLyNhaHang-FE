import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import AsynsStorage from '@react-native-async-storage/async-storage';
import {stotreManagement} from '../../App';
import {hideSpinner, showSpinner} from 'store/layout';
import formatCamelCase from 'utils/camelcase';

interface IRequestAxios extends AxiosRequestConfig {
  _skipSipnner?: boolean;
  headers: any;
}

const onRequest = async (
  config: IRequestAxios,
): Promise<AxiosRequestConfig> => {
  const tokenStorage = await AsynsStorage.getItem('token');
  let token = stotreManagement.getState().user.token || tokenStorage;
  !config._skipSipnner && stotreManagement.dispatch(showSpinner());
  if (token) config.headers.Authorization = `Bearer ${token}`;

  config.baseURL = process.env.REACT_APP_BASE_URL;
  config.timeout = 20000;
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  response.data = formatCamelCase(response.data);
  setTimeout(() => {
    stotreManagement.dispatch(hideSpinner());
  }, 400);
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  const {
    data: {code = 0, error: errs = [], message = ''},
    status,
  }: any = error.response;
  if (status === 401) {
    await AsynsStorage.removeItem('token');
  }
  code > 299 && errs.length > 0 && console.log(errs?.[0]?.message || message);

  setTimeout(() => {
    stotreManagement.dispatch(hideSpinner());
  }, 400);
  return Promise.reject(error);
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
}

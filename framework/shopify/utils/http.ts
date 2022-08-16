import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type FetcherResult<T> = {
  data: T;
};

const defaultsConfig = {
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/graphql'
      : 'http://110.42.184.111',
  timeout: 5000
};

class Http {
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  private static axiosInstance = axios.create(defaultsConfig);

  // 请求拦截
  // Add a request interceptor
  private httpInterceptorsRequest() {
    Http.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  // 响应拦截
  // Add a response interceptor
  private httpInterceptorsResponse() {
    Http.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        return response;
      },
      (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        return Promise.reject(error);
      }
    );
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<FetcherResult<T>> {
    const response = await Http.axiosInstance.get(url, config);
    return response.data;
  }

  public async post<T, R>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig
  ): Promise<FetcherResult<T>> {
    const response = await Http.axiosInstance.post(url, data, config);
    return response.data;
  }
}

export const http = new Http();

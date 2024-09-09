import data from '../data.json';
import axios, { InternalAxiosRequestConfig } from 'axios';

const getProductsFeedback = (config: InternalAxiosRequestConfig<any>) => {
  return {
    ...config,
    adapter: () => {
      return Promise.resolve({
        status: 200,
        data: data.productsFeedback,
      });
    },
  } as any;
};

const getSingleProductsFeedback = (config: InternalAxiosRequestConfig<any>) => {
  return {
    ...config,
    adapter: () => {
      const id = config.url?.split('/').pop();
      const productFeedback = data.productsFeedback.find(
        (feedback) => feedback.id === parseInt(id || '', 10)
      );

      if (productFeedback) {
        return Promise.resolve({
          status: 200,
          data: productFeedback,
        });
      } else {
        return Promise.reject({
          status: 404,
          data: { error: 'Not found' },
        });
      }
    },
  } as any;
};

export const mockServer = () => {
  axios.interceptors.request.use(
    (config) => {
      if (config.url === '/api/products-feedback') {
        return getProductsFeedback(config);
      }

      if (config.url?.match(/\/api\/products-feedback\/\d+/)) {
        return getSingleProductsFeedback(config);
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

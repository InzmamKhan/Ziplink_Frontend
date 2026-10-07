import axiosClient from './axiosClient';

export const urlApi = {
  shortenUrl: (originalUrl) => {
    return axiosClient.post('/api/v1/urls/shorten', { originalUrl });
  },

  getAnalytics: (shortKey) => {
    return axiosClient.get(`/api/v1/analytics/${shortKey}`);
  },
};
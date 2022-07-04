import axios from 'axios';

export const postReports = (data) => {
  return axios.post(`${process.env.API_URL}/report`, data);
};

export const getProjects = () => {
  return axios.get(`${process.env.API_URL}/projects`);
};


export const getGateWays = () => {
  return axios.get(`${process.env.API_URL}/gateways`);
};

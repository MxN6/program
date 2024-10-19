import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getProgress = async (userId) => {
  const response = await axios.get(`${API_URL}/progress/${userId}`);
  return response.data;
};

export const updateProgress = async (userId, progressData) => {
  const response = await axios.put(`${API_URL}/progress/${userId}`, progressData);
  return response.data;
};

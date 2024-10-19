import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getCourses = async () => {
  const response = await axios.get(`${API_URL}/courses`);
  return response.data;
};

export const getCourseById = async (courseId) => {
  const response = await axios.get(`${API_URL}/courses/${courseId}`);
  return response.data;
};

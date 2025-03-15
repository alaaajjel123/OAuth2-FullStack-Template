import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export const loginWithGoogle = async (token: string) => {
  const response = await axios.post(`${API_URL}/login`, { token });
  return response.data;
};

export const logout = () => {
  // Clear token on the backend if needed
};
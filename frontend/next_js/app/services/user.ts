import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getUserProfile = async () => {
    const response = await axios.get(`${API_URL}/user/profile`, {
      withCredentials: true,
    });
    return response.data;
  };
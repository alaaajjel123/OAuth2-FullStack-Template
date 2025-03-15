// services/authService.js

import axios from 'axios';

class AuthService {
  // Send the Google token to the backend for verification and login
  static async loginWithGoogle(token) {
    try {
      const response = await axios.post('/api/auth/login', { token });
      const { token: jwtToken } = response.data;

      // Store the JWT token in localStorage or cookies
      localStorage.setItem('authToken', jwtToken);

      return jwtToken;
    } catch (error) {
      throw new Error('Failed to authenticate with Google');
    }
  }

  // Check if the user is authenticated by verifying the presence of the JWT token
  static isAuthenticated() {
    const token = localStorage.getItem('authToken');
    return token && token.length > 0;
  }

  // Get the current user information (username) from the JWT
  static getUserInfo() {
    const token = localStorage.getItem('authToken');
    if (!token) return null;

    const payload = this.decodeToken(token);
    return payload ? payload.username : null;
  }

  // Decode the JWT token to extract user info (e.g., username or email)
  static decodeToken(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    } catch (error) {
      return null;
    }
  }

  // Logout by removing the JWT token
  static logout() {
    localStorage.removeItem('authToken');
  }
}

export default AuthService;

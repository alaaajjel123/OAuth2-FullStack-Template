'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { loginWithGoogle, logout as apiLogout } from '../services/auth';

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsLoggedIn(!!token);
  }, []);

  const login = async (token: string) => {
    const response = await loginWithGoogle(token);
    localStorage.setItem('access_token', response.token);
    setIsLoggedIn(true);
    router.push('/home');
  };

  const logout = () => {
    apiLogout();
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return { isLoggedIn, login, logout };
}
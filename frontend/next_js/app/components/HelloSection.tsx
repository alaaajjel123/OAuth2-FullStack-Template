'use client';

import { useAuth } from '../hooks/useAuth';

export default function HelloSection() {
  const { isLoggedIn } = useAuth();
  const userName = isLoggedIn ? 'User' : ''; // Extract username from JWT if needed

  return <div>Hello, {userName}!</div>;
}
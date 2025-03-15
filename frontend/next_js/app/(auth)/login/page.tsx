'use client';

import { useAuth } from '../../hooks/useAuth';

export default function LoginPage() {
  const { login } = useAuth();

  const handleLogin = () => {
    const googleToken = 'dummy-google-token'; // Replace with actual token
    login(googleToken);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}
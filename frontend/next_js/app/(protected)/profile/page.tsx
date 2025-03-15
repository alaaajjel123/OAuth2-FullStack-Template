'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getUserProfile } from '../../services/user';

export default function ProfilePage() {
  const { isLoggedIn } = useAuth();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchProfile = async () => {
        const data = await getUserProfile();
        setUser(data);
      };
      fetchProfile();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <div>Unauthorized</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {user?.email}</p>
      <p>Username: {user?.username}</p>
      <button onClick={() => {}}>Update Username</button>
    </div>
  );
}
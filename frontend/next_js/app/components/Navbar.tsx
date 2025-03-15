'use client';

import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav>
      <Link href="/home">Home</Link>
      {isLoggedIn ? (
        <>
          <Link href="/profile">Profile</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </nav>
  );
}
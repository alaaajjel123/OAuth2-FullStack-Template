'use client';

import { useAuth } from './hooks/useAuth';
import Link from 'next/link';

export default function AppPage() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="home-container">
      <nav className="navbar">
        <Link href="/home">Home</Link>
        {isLoggedIn ? (
          <>
            <Link href="/profile">Profile</Link>
            <button onClick={() => logout()}>Logout</button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>

      {isLoggedIn && <div className="hello-section">Hello, User!</div>}

      <div className="products-container">
        {/* Products will be displayed here */}
      </div>
    </div>
  );
}

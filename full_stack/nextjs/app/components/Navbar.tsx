import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav>
      <Link href="/home">Home</Link>
      {session ? (
        <>
          <Link href="/profile">Profile</Link>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </nav>
  );
}
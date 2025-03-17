import Navbar from "@/app/components/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <div>Unauthorized</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>Profile</h1>
      <p>Username: {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
    </div>
  );
}
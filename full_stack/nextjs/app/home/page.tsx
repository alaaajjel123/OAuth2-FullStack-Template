import Navbar from "@/app/components/Navbar";
import ProductsList from "@/app/components/ProductsList";
import HelloSection from "@/app/components/HelloSection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Navbar />
      {session && <HelloSection username={session.user?.name} />}
      <ProductsList />
    </div>
  );
}
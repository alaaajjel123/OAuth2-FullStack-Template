import { NextResponse } from "next/server";

export async function GET() {
  // Fetch products from your database
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
  ];
  return NextResponse.json(products);
}
import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, description,price,quantity } = await request.json();
  await connectMongoDB();
  await Product.create({ name, description,price,quantity  });
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}

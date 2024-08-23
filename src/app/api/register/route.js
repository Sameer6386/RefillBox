import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

// Dummy function to simulate user storage
const users = [];

export async function POST(request) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json("Missing Fields", { status: 400 });
  }

  const exist = users.find((user) => user.email === email.toLowerCase());

  if (exist) {
    return NextResponse.json("User already exists!", { status: 500 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    name,
    email: email.toLowerCase(),
    password: hashedPassword,
  });

  return NextResponse.json("User created successfully!", { status: 200 });
}

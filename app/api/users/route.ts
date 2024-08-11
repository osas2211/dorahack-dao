import { NextResponse } from "next/server";
import ProposalModel from "@/lib/models/proposal";
import { validateOrReject } from "class-validator";
import { plainToClass, plainToInstance } from "class-transformer";
import connectDB from "@/lib/db";
import UserModel from "@/lib/models/user";
import { CreateUserDTO, GetUserDTO } from "@/services/dto/user";
import { UserI } from "@/interface/user";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const query = {
    address: url.searchParams.get("address"),
    name: url.searchParams.get("name"),
    email: url.searchParams.get("email"),
  };

  try {
    await connectDB();

    try {
      const getUserDTO = plainToClass(GetUserDTO, query);
      await validateOrReject(getUserDTO);
    } catch (error) {
      console.error("Validation error", error);
      return NextResponse.json({ error }, { status: 422 });
    }
    const filter: any = {};
    if (query.address) {
      filter.address = query.address;
    }
    if (query.name) {
      filter.name = query.name;
    }
    if (query.email) {
      filter.email = query.email;
    }

    const users = await UserModel.find(filter);
    return NextResponse.json(users, { status: 200 });
  } catch (errors) {
    console.error("Unexpected error", errors);
    return NextResponse.json(
      { message: "Validation failed", errors },
      { status: 400 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const data: UserI = await req.json();

    try {
      const createUserDTO = plainToInstance(CreateUserDTO, data);
      await validateOrReject(createUserDTO);
    } catch (error) {
      console.error("Validation error", error);
      return NextResponse.json({ error }, { status: 422 });
    }

    const existingUser = await UserModel.findOne({ address: data.address });
    if (existingUser) {
      return NextResponse.json({
        status: 409,
        message: "User with the provided address already exists.",
      });
    }

    const createdAt = new Date().toISOString();

    const newUser = new ProposalModel({
      ...data,
      created_at: createdAt,
    });

    const result = await newUser.save();
    return NextResponse.json({
      status: 201,
      message: "User created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error.",
    });
  }
}

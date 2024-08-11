import { NextResponse } from "next/server";
import ProposalModel from "@/lib/models/proposal";
import { validateOrReject } from "class-validator";
import { plainToClass, plainToInstance } from "class-transformer";
import { CreateProposalDTO, GetProposalDTO } from "@/services/dto/proposal";
import connectDB from "@/lib/db";
import { ProposalI } from "@/interface/proposals";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const query = {
    id: url.searchParams.get("id"),
    creatorAddress: url.searchParams.get("creatorAddress"),
    receiverAddress: url.searchParams.get("receiverAddress"),
    status: url.searchParams.get("status"),
    name: url.searchParams.get("name"),
  };

  try {
    await connectDB();

    try {
      const getProposalDTO = plainToClass(GetProposalDTO, query);
      await validateOrReject(getProposalDTO);
    } catch (error) {
      console.error("Validation error", error);
      return NextResponse.json({ error }, { status: 422 });
    }
    const filter: any = {};
    if (query.id) {
      filter.id = query.id;
    }
    if (query.creatorAddress) {
      filter.creator_address = query.creatorAddress;
    }
    if (query.receiverAddress) {
      filter.recipient_address = query.receiverAddress;
    }
    if (query.status) {
      filter.loanStatus = query.status;
    }
    const loans = await ProposalModel.find(filter);
    return NextResponse.json(loans, { status: 200 });
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
    const data: ProposalI = await req.json();

    try {
      const proposalRequestDTO = plainToInstance(CreateProposalDTO, data);
      await validateOrReject(proposalRequestDTO);
    } catch (error) {
      console.error("Validation error", error);
      return NextResponse.json({ error }, { status: 422 });
    }

    const existingProposal = await ProposalModel.findOne({ name: data.name });
    if (existingProposal) {
      return NextResponse.json({
        status: 409,
        message: "Proposal with the provided name already exists.",
      });
    }

    const formattedDateSubmitted = new Date(data.date_submitted).toISOString();
    const formattedEndDate = new Date(data.end_date).toISOString();

    const newProposal = new ProposalModel({
      ...data,
      end_date: formattedEndDate,
      date_submitted: formattedDateSubmitted,
    });

    const result = await newProposal.save();
    return NextResponse.json({
      status: 201,
      message: "Proposal created successfully.",
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

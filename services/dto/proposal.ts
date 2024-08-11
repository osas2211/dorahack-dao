import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsOptional,
  IsEnum,
} from "class-validator";

import { PRIORITY, ProposalI, STATUS } from "@/interface/proposals";

export class CreateProposalDTO implements ProposalI {
  @IsNotEmpty({ message: "Creator address is required." })
  @IsString()
  creator_address: string;

  @IsNotEmpty({ message: "Recipient address is required." })
  @IsString()
  recipient_address: string;

  @IsNotEmpty({ message: "Proposal name is required." })
  @IsString()
  name: string;

  @IsNotEmpty({ message: "Proposal picture is required." })
  @IsString()
  picture: string;

  @IsNotEmpty({ message: "Proposal theme is required." })
  @IsString()
  theme: string;

  @IsNotEmpty({ message: "Date submitted is required." })
  @IsDateString()
  date_submitted: string;

  @IsNotEmpty({ message: "End date is required." })
  @IsDateString()
  end_date: string;

  @IsNotEmpty({ message: "Proposal title is required." })
  @IsDateString()
  title: string;

  @IsNotEmpty({ message: "Status is required." })
  @IsString()
  status: STATUS;

  @IsNotEmpty({ message: "priority is required." })
  @IsString()
  priority: PRIORITY;

  @IsNotEmpty({ message: "proposal id" })
  @IsString()
  id: string;

  @IsNotEmpty({ message: "email is optional" })
  @IsOptional()
  @IsString()
  email?: string;
}

export class GetProposalDTO {
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  creatorAddress?: string;

  @IsString()
  @IsOptional()
  receiverAddress?: string;

  @IsEnum(STATUS)
  @IsOptional()
  status?: STATUS;

  @IsString()
  @IsOptional()
  name?: string;
}

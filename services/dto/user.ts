import { IsNotEmpty, IsString, IsOptional } from "class-validator";
import { UserI } from "@/interface/user";

export class CreateUserDTO implements UserI {
  @IsNotEmpty({ message: "name is required." })
  @IsString()
  name: string;

  @IsNotEmpty({ message: "image is required." })
  @IsString()
  profileImage: string;

  @IsNotEmpty({ message: "address is required." })
  @IsString()
  address: string;

  @IsNotEmpty({ message: "email is required." })
  @IsString()
  @IsOptional()
  email?: string;
}

export class GetUserDTO {
  @IsString()
  address?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  email?: string;
}

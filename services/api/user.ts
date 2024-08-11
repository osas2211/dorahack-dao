// import { baseUrl } from "@/shared/constant";
import { get, post } from "../utils";
import { CreateUserDTO, GetUserDTO } from "../dto/user";
import { UserI } from "@/interface/user";

export const createNewUser = async (userData: CreateUserDTO) => {
  return await post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
    JSON.stringify(userData)
  );
};

export const getUserBYAddress = async (data: GetUserDTO) => {
  return await get<UserI[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users?address=${data.address}`
  ).then((data) => data.data);
};

export const getUserByName = async (data: GetUserDTO) => {
  return await get<UserI[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users?name=${data.name}`
  ).then((data) => data.data);
};

export const getUserByEmail = async (data: GetUserDTO) => {
  return await get<UserI[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users?email=${data.email}`
  ).then((data) => data.data);
};

export const getUsers = async () => {
  return await get<UserI[]>(`${process.env.NEXT_PUBLIC_BASE_URL}/users`).then(
    (data) => data.data
  );
};

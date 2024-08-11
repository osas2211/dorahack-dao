// import { baseUrl } from "@/shared/constant";
import { ProposalI } from "@/interface/proposals";
import { CreateProposalDTO, GetProposalDTO } from "../dto/proposal";
import { get, post } from "../utils";

export const createNewProposal = async (proposalData: CreateProposalDTO) => {
  return await post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/proposals`,
    JSON.stringify(proposalData)
  );
};

export const getProposalById = async (data: GetProposalDTO) => {
  return await get<ProposalI[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/proposals?id=${data.id}`
  ).then((data) => data.data);
};

export const getProposalByCreator = async (data: GetProposalDTO) => {
  return await get<ProposalI[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/proposals?creatorAddress=${data.creatorAddress}`
  ).then((data) => data.data);
};

export const getProposalByStatus = async (data: GetProposalDTO) => {
  return await get<ProposalI[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/proposals?status=${data.status}`
  ).then((data) => data.data);
};

export const getProposalByRecipient = async (data: GetProposalDTO) => {
  return await get<ProposalI[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/proposals?receiverAddress=${data.receiverAddress}`
  ).then((data) => data.data);
};

export const getProposals = async (data: GetProposalDTO) => {
  return await get<ProposalI[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/proposal`
  ).then((data) => data.data);
};

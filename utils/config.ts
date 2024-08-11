import { CHAIN_NAMESPACES } from "@web3auth/base";

export const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x7A",
  rpcTarget: "https://rpc.fuse.io",
  displayName: "Fuse Mainnet",
  blockExplorer: "https://explorer.fuse.io/",
  ticker: "FUSE",
  tickerName: "Fuse",
};

export const env = {
  FUSE_API_KEY: process.env.NEXT_PUBLIC_FUSE_SDK_API_KEY || "",
  WEB3AUTH_CLIENT_ID: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || "",
  DAO_ADDRESS: "0x6a147C506365d9ec6dAd97b340BBAE23626C32D5",
};

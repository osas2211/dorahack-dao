import { FuseSDK } from "@fuseio/fusebox-web-sdk";
import { Web3Auth } from "@web3auth/modal";
import { chainConfig, env } from "./config";
import { Signer } from "ethers";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { WEB3AUTH_NETWORK } from "@web3auth/base";

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

export const web3auth = new Web3Auth({
  clientId: env.WEB3AUTH_CLIENT_ID,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
  privateKeyProvider,
});

export const init = async (signer: Signer) => {
  const fuseSDK = await FuseSDK.init(env.FUSE_API_KEY, signer);
  return fuseSDK;
};

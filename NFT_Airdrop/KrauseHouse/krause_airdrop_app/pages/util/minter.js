require("dotenv").config();
import { pinJSONToIPFS } from "./pinata.js";
import { ethers } from "ethers";
const contractABI = require("./contract-abi.json");

export const mintNFT = async (receiver, url, name, description) => {
  //make metadata
  const metadata = new Object();
  metadata.name = name;
  metadata.image = url;
  metadata.description = description;

  const pinataResponse = await pinJSONToIPFS(metadata);
  if (!pinataResponse.success) {
    return {
      success: false,
      status: "😢 Something went wrong while uploading your tokenURI.",
    };
  }
  const tokenURI = pinataResponse.pinataUrl;

  const alchemyProvider = new ethers.providers.AlchemyProvider(
    "matic",
    process.env.ALCHEMY_KEY
  );

  const feeData = await alchemyProvider.getFeeData();

  console.log("fee", feeData);

  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, alchemyProvider);

  const KrauseMintContract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    contractABI,
    signer
  );

  const tx = await KrauseMintContract.mintNft(receiver, tokenURI, {
    gasPrice: feeData.gasPrice,
  });

  console.log(tx);

  return { raw: tx };
};

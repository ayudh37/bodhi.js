/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ILinkdropERC721,
  ILinkdropERC721Interface,
} from "../ILinkdropERC721";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_linkId",
        type: "address",
      },
      {
        name: "_receiver",
        type: "address",
      },
      {
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "verifyReceiverSignatureERC721",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_weiAmount",
        type: "uint256",
      },
      {
        name: "_nftAddress",
        type: "address",
      },
      {
        name: "_tokenId",
        type: "uint256",
      },
      {
        name: "_expiration",
        type: "uint256",
      },
      {
        name: "_linkId",
        type: "address",
      },
      {
        name: "_linkdropSignerSignature",
        type: "bytes",
      },
      {
        name: "_receiver",
        type: "address",
      },
      {
        name: "_receiverSignature",
        type: "bytes",
      },
      {
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "checkClaimParamsERC721",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_weiAmount",
        type: "uint256",
      },
      {
        name: "_nftAddress",
        type: "address",
      },
      {
        name: "_tokenId",
        type: "uint256",
      },
      {
        name: "_expiration",
        type: "uint256",
      },
      {
        name: "_linkId",
        type: "address",
      },
      {
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "verifyLinkdropSignerSignatureERC721",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_weiAmount",
        type: "uint256",
      },
      {
        name: "_nftAddress",
        type: "address",
      },
      {
        name: "_tokenId",
        type: "uint256",
      },
      {
        name: "_expiration",
        type: "uint256",
      },
      {
        name: "_linkId",
        type: "address",
      },
      {
        name: "_linkdropSignerSignature",
        type: "bytes",
      },
      {
        name: "_receiver",
        type: "address",
      },
      {
        name: "_receiverSignature",
        type: "bytes",
      },
      {
        name: "_feeReceiver",
        type: "address",
      },
      {
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "claimERC721",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ILinkdropERC721__factory {
  static readonly abi = _abi;
  static createInterface(): ILinkdropERC721Interface {
    return new utils.Interface(_abi) as ILinkdropERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILinkdropERC721 {
    return new Contract(address, _abi, signerOrProvider) as ILinkdropERC721;
  }
}

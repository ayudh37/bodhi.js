/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LinkdropERC721,
  LinkdropERC721Interface,
} from "../LinkdropERC721";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "claimedTo",
    outputs: [
      {
        name: "",
        type: "address",
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
        name: "_linkdropSigner",
        type: "address",
      },
    ],
    name: "removeSigner",
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
  {
    constant: true,
    inputs: [],
    name: "initialized",
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
    inputs: [],
    name: "getMasterCopyVersion",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "withdraw",
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
  {
    constant: false,
    inputs: [],
    name: "unpause",
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
  {
    constant: false,
    inputs: [
      {
        name: "_linkId",
        type: "address",
      },
    ],
    name: "cancel",
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
  {
    constant: true,
    inputs: [],
    name: "version",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "paused",
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
    constant: false,
    inputs: [],
    name: "destroy",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "pause",
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
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "chainId",
    outputs: [
      {
        name: "",
        type: "uint256",
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
    constant: true,
    inputs: [],
    name: "linkdropMaster",
    outputs: [
      {
        name: "",
        type: "address",
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
        name: "_linkId",
        type: "address",
      },
    ],
    name: "isCanceledLink",
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
        name: "",
        type: "address",
      },
    ],
    name: "isLinkdropSigner",
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
  {
    constant: false,
    inputs: [
      {
        name: "_linkdropSigner",
        type: "address",
      },
    ],
    name: "addSigner",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_linkdropMaster",
        type: "address",
      },
      {
        name: "_version",
        type: "uint256",
      },
      {
        name: "_chainId",
        type: "uint256",
      },
    ],
    name: "initialize",
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
  {
    constant: true,
    inputs: [
      {
        name: "_linkId",
        type: "address",
      },
    ],
    name: "isClaimedLink",
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
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "linkId",
        type: "address",
      },
    ],
    name: "Canceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "linkId",
        type: "address",
      },
      {
        indexed: false,
        name: "ethAmount",
        type: "uint256",
      },
      {
        indexed: true,
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        name: "tokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        name: "receiver",
        type: "address",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "linkId",
        type: "address",
      },
      {
        indexed: false,
        name: "ethAmount",
        type: "uint256",
      },
      {
        indexed: true,
        name: "nft",
        type: "address",
      },
      {
        indexed: false,
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        name: "receiver",
        type: "address",
      },
    ],
    name: "ClaimedERC721",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "linkdropSigner",
        type: "address",
      },
    ],
    name: "AddedSigningKey",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "linkdropSigner",
        type: "address",
      },
    ],
    name: "RemovedSigningKey",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612b9e806100206000396000f3fe6080604052600436106101405760003560e01c806383197ef0116100b6578063ae7970341161006f578063ae79703414610934578063d11b4d2e1461099d578063db7b363c14610a06578063eb12d61e14610ba2578063eb990c5914610bfe578063f3e8843a14610c9b57610140565b806383197ef0146106d75780638456cb59146106ee5780638da5cb5b1461071d5780639a8a0592146107745780639b88d9a31461079f578063a655ca1f146108dd57610140565b80633ccfd60b116101085780633ccfd60b146103b65780633f4ba83a146103e55780634c33fe941461041457806354fd4d501461047d5780635c975abb146104a857806371fc147d146104d757610140565b806303170581146101425780630e316ab7146101d3578063158ef93e1461023c5780631b9894ce1461026b578063314f8cbf1461038b575b005b34801561014e57600080fd5b506101916004803603602081101561016557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d04565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101df57600080fd5b50610222600480360360208110156101f657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d37565b604051808215151515815260200191505060405180910390f35b34801561024857600080fd5b50610251610f00565b604051808215151515815260200191505060405180910390f35b34801561027757600080fd5b506103716004803603606081101561028e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156102eb57600080fd5b8201836020820111156102fd57600080fd5b8035906020019184600183028401116401000000008311171561031f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610f13565b604051808215151515815260200191505060405180910390f35b34801561039757600080fd5b506103a0610fbe565b6040518082815260200191505060405180910390f35b3480156103c257600080fd5b506103cb610fc8565b604051808215151515815260200191505060405180910390f35b3480156103f157600080fd5b506103fa611114565b604051808215151515815260200191505060405180910390f35b34801561042057600080fd5b506104636004803603602081101561043757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611284565b604051808215151515815260200191505060405180910390f35b34801561048957600080fd5b50610492611489565b6040518082815260200191505060405180910390f35b3480156104b457600080fd5b506104bd61148f565b604051808215151515815260200191505060405180910390f35b3480156104e357600080fd5b506106bd60048036036101208110156104fb57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561057657600080fd5b82018360208201111561058857600080fd5b803590602001918460018302840111640100000000831117156105aa57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561062d57600080fd5b82018360208201111561063f57600080fd5b8035906020019184600183028401116401000000008311171561066157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506114a6565b604051808215151515815260200191505060405180910390f35b3480156106e357600080fd5b506106ec611a01565b005b3480156106fa57600080fd5b50610703611b56565b604051808215151515815260200191505060405180910390f35b34801561072957600080fd5b50610732611ce4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561078057600080fd5b50610789611d09565b6040518082815260200191505060405180910390f35b3480156107ab57600080fd5b506108c3600480360360c08110156107c257600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561083d57600080fd5b82018360208201111561084f57600080fd5b8035906020019184600183028401116401000000008311171561087157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611d0f565b604051808215151515815260200191505060405180910390f35b3480156108e957600080fd5b506108f2611e75565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561094057600080fd5b506109836004803603602081101561095757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611e9b565b604051808215151515815260200191505060405180910390f35b3480156109a957600080fd5b506109ec600480360360208110156109c057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ef1565b604051808215151515815260200191505060405180910390f35b348015610a1257600080fd5b50610b886004803603610140811015610a2a57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190640100000000811115610aa557600080fd5b820183602082011115610ab757600080fd5b80359060200191846001830284011164010000000083111715610ad957600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190640100000000811115610b1a57600080fd5b820183602082011115610b2c57600080fd5b80359060200191846001830284011164010000000083111715610b4e57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611f11565b604051808215151515815260200191505060405180910390f35b610be460048036036020811015610bb857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061230e565b604051808215151515815260200191505060405180910390f35b348015610c0a57600080fd5b50610c8160048036036080811015610c2157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919050505061252e565b604051808215151515815260200191505060405180910390f35b348015610ca757600080fd5b50610cea60048036036020811015610cbe57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506126c6565b604051808215151515815260200191505060405180910390f35b60056020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610dfc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4f4e4c595f4c494e4b44524f505f4d415354455200000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e9f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f494e56414c49445f4c494e4b44524f505f5349474e45525f414444524553530081525060200191505060405180910390fd5b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060019050919050565b600760009054906101000a900460ff1681565b600080610f7484604051602001808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014019150506040516020818303038152906040528051906020012061275e565b90506000610f8282856127b6565b90508573ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614925050509392505050565b6000600254905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461108d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4f4e4c595f4c494e4b44524f505f4d415354455200000000000000000000000081525060200191505060405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f1935050505015801561110c573d6000803e3d6000fd5b506001905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146111d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4f4e4c595f4c494e4b44524f505f4d415354455200000000000000000000000081525060200191505060405180910390fd5b6111e161148f565b611236576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b516022913960400191505060405180910390fd5b6000600760016101000a81548160ff0219169083151502179055507fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693360405160405180910390a16001905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611349576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4f4e4c595f4c494e4b44524f505f4d415354455200000000000000000000000081525060200191505060405180910390fd5b611352826126c6565b156113c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f4c494e4b5f434c41494d4544000000000000000000000000000000000000000081525060200191505060405180910390fd5b6001600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fe2a1887fbeda472132393c6bb02863c62d06ed7e9acc86dc48156ec1da4121b282604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a160019050919050565b60025481565b6000600760019054906101000a900460ff16905090565b60006114b061148f565b15611523576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4c494e4b44524f505f50524f58595f434f4e54524143545f504155534544000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1614156115c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f494e56414c49445f4e46545f414444524553530000000000000000000000000081525060200191505060405180910390fd5b600015156115d3876126c6565b151514611648576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f4c494e4b5f434c41494d4544000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000151561165587611e9b565b1515146116ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4c494e4b5f43414e43454c45440000000000000000000000000000000000000081525060200191505060405180910390fd5b42871015611740576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f4c494e4b5f45585049524544000000000000000000000000000000000000000081525060200191505060405180910390fd5b611753828b6128ba90919063ffffffff16565b3073ffffffffffffffffffffffffffffffffffffffff163110156117df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f494e53554646494349454e545f4554484552530000000000000000000000000081525060200191505060405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff16636352211e8a6040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561186957600080fd5b505afa15801561187d573d6000803e3d6000fd5b505050506040513d602081101561189357600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614611910576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180612b2c6025913960400191505060405180910390fd5b61191e8a8a8a8a8a8a611d0f565b611973576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612b0b6021913960400191505060405180910390fd5b61197e868585610f13565b6119f0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f494e56414c49445f52454345495645525f5349474e415455524500000000000081525060200191505060405180910390fd5b600190509998505050505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611aa957506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b611b1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4f4e4c595f4c494e4b44524f505f4d41535445525f4f525f464143544f52590081525060200191505060405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611c1b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4f4e4c595f4c494e4b44524f505f4d415354455200000000000000000000000081525060200191505060405180910390fd5b611c2361148f565b15611c96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4c494e4b44524f505f50524f58595f434f4e54524143545f504155534544000081525060200191505060405180910390fd5b6001600760016101000a81548160ff0219169083151502179055507f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75260405160405180910390a16001905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b600080611e0a888888886002546003548a30604051602001808981526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018781526020018681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401985050505050505050506040516020818303038152906040528051906020012061275e565b90506000611e1882856127b6565b9050600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16925050509695505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60046020528060005260406000206000915054906101000a900460ff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611fd5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f4f4e4c595f464143544f5259000000000000000000000000000000000000000081525060200191505060405180910390fd5b611fdd61148f565b15612050576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4c494e4b44524f505f50524f58595f434f4e54524143545f504155534544000081525060200191505060405180910390fd5b6120e98d8d8d8d8d8d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508c8c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508a6114a6565b61215b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f494e56414c49445f434c41494d5f504152414d5300000000000000000000000081525060200191505060405180910390fd5b85600560008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506121e78d8d8d898787612942565b612259576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f5452414e534645525f4641494c4544000000000000000000000000000000000081525060200191505060405180910390fd5b8b73ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff167f30d0b1544cabbf52b74d6df1eb5af510e230111d857b36e36cb89a29766419d28f8e8a604051808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a3600190509c9b505050505050505050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806123b857506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61242a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4f4e4c595f4c494e4b44524f505f4d41535445525f4f525f464143544f52590081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156124cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f494e56414c49445f4c494e4b44524f505f5349474e45525f414444524553530081525060200191505060405180910390fd5b6001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060019050919050565b6000600760009054906101000a900460ff1615612596576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180612ae0602b913960400191505060405180910390fd5b846000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160046000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555082600281905550816003819055506001600760006101000a81548160ff02191690831515021790555060019050949350505050565b60008073ffffffffffffffffffffffffffffffffffffffff16600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60008160405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c01828152602001915050604051602081830303815290604052805190602001209050919050565b600060418251146127ca57600090506128b4565b60008060006020850151925060408501519150606085015160001a90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c111561281e57600093505050506128b4565b601b8160ff16141580156128365750601c8160ff1614155b1561284757600093505050506128b4565b60018682858560405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156128a4573d6000803e3d6000fd5b5050506020604051035193505050505b92915050565b600080828401905083811015612938576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008273ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561298a573d6000803e3d6000fd5b5060008711156129dc578373ffffffffffffffffffffffffffffffffffffffff166108fc889081150290604051600060405180830381858888f193505050501580156129da573d6000803e3d6000fd5b505b8573ffffffffffffffffffffffffffffffffffffffff166323b872dd600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1686886040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b158015612ab957600080fd5b505af1158015612acd573d6000803e3d6000fd5b5050505060019050969550505050505056fe4c494e4b44524f505f50524f58595f434f4e54524143545f414c52454144595f494e495449414c495a4544494e56414c49445f4c494e4b44524f505f5349474e45525f5349474e41545552454c494e4b44524f505f4d41535445525f444f45535f4e4f545f4f574e5f544f4b454e5f49444c494e4b44524f505f434f4e54524143545f414c52454144595f554e504155534544a165627a7a723058204603c19ba8d5503cf3ca8752c9bc9957602c38db73f0252e5ec41b4efefe996a0029";

export class LinkdropERC721__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LinkdropERC721> {
    return super.deploy(overrides || {}) as Promise<LinkdropERC721>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LinkdropERC721 {
    return super.attach(address) as LinkdropERC721;
  }
  connect(signer: Signer): LinkdropERC721__factory {
    return super.connect(signer) as LinkdropERC721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LinkdropERC721Interface {
    return new utils.Interface(_abi) as LinkdropERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LinkdropERC721 {
    return new Contract(address, _abi, signerOrProvider) as LinkdropERC721;
  }
}

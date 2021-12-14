/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LinkdropMastercopyInterface extends ethers.utils.Interface {
  functions: {
    "checkClaimParams(uint256,address,uint256,uint256,address,bytes,address,bytes,uint256)": FunctionFragment;
    "claimedTo(address)": FunctionFragment;
    "removeSigner(address)": FunctionFragment;
    "initialized()": FunctionFragment;
    "verifyReceiverSignatureERC721(address,address,bytes)": FunctionFragment;
    "getMasterCopyVersion()": FunctionFragment;
    "verifyLinkdropSignerSignature(uint256,address,uint256,uint256,address,bytes)": FunctionFragment;
    "withdraw()": FunctionFragment;
    "unpause()": FunctionFragment;
    "verifyReceiverSignature(address,address,bytes)": FunctionFragment;
    "cancel(address)": FunctionFragment;
    "version()": FunctionFragment;
    "paused()": FunctionFragment;
    "claim(uint256,address,uint256,uint256,address,bytes,address,bytes,address,uint256)": FunctionFragment;
    "checkClaimParamsERC721(uint256,address,uint256,uint256,address,bytes,address,bytes,uint256)": FunctionFragment;
    "destroy()": FunctionFragment;
    "pause()": FunctionFragment;
    "owner()": FunctionFragment;
    "chainId()": FunctionFragment;
    "verifyLinkdropSignerSignatureERC721(uint256,address,uint256,uint256,address,bytes)": FunctionFragment;
    "linkdropMaster()": FunctionFragment;
    "isCanceledLink(address)": FunctionFragment;
    "isLinkdropSigner(address)": FunctionFragment;
    "claimERC721(uint256,address,uint256,uint256,address,bytes,address,bytes,address,uint256)": FunctionFragment;
    "addSigner(address)": FunctionFragment;
    "initialize(address,address,uint256,uint256)": FunctionFragment;
    "isClaimedLink(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkClaimParams",
    values: [
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BytesLike,
      string,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "claimedTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeSigner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "verifyReceiverSignatureERC721",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMasterCopyVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "verifyLinkdropSignerSignature",
    values: [
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "verifyReceiverSignature",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "cancel", values: [string]): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BytesLike,
      string,
      BytesLike,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "checkClaimParamsERC721",
    values: [
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BytesLike,
      string,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "destroy", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "verifyLinkdropSignerSignatureERC721",
    values: [
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "linkdropMaster",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isCanceledLink",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isLinkdropSigner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimERC721",
    values: [
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BytesLike,
      string,
      BytesLike,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "addSigner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimedLink",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkClaimParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimedTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyReceiverSignatureERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMasterCopyVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyLinkdropSignerSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyReceiverSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkClaimParamsERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "destroy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyLinkdropSignerSignatureERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "linkdropMaster",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCanceledLink",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isLinkdropSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addSigner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isClaimedLink",
    data: BytesLike
  ): Result;

  events: {
    "Canceled(address)": EventFragment;
    "Claimed(address,uint256,address,uint256,address)": EventFragment;
    "ClaimedERC721(address,uint256,address,uint256,address)": EventFragment;
    "Paused()": EventFragment;
    "Unpaused()": EventFragment;
    "AddedSigningKey(address)": EventFragment;
    "RemovedSigningKey(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Canceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimedERC721"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddedSigningKey"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovedSigningKey"): EventFragment;
}

export type CanceledEvent = TypedEvent<[string] & { linkId: string }>;

export type ClaimedEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, string] & {
    linkId: string;
    ethAmount: BigNumber;
    token: string;
    tokenAmount: BigNumber;
    receiver: string;
  }
>;

export type ClaimedERC721Event = TypedEvent<
  [string, BigNumber, string, BigNumber, string] & {
    linkId: string;
    ethAmount: BigNumber;
    nft: string;
    tokenId: BigNumber;
    receiver: string;
  }
>;

export type PausedEvent = TypedEvent<[] & {}>;

export type UnpausedEvent = TypedEvent<[] & {}>;

export type AddedSigningKeyEvent = TypedEvent<
  [string] & { linkdropSigner: string }
>;

export type RemovedSigningKeyEvent = TypedEvent<
  [string] & { linkdropSigner: string }
>;

export class LinkdropMastercopy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LinkdropMastercopyInterface;

  functions: {
    checkClaimParams(
      _weiAmount: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    claimedTo(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    removeSigner(
      _linkdropSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    verifyReceiverSignatureERC721(
      _linkId: string,
      _receiver: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getMasterCopyVersion(overrides?: CallOverrides): Promise<[BigNumber]>;

    verifyLinkdropSignerSignature(
      _weiAmount: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifyReceiverSignature(
      _linkId: string,
      _receiver: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    cancel(
      _linkId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    claim(
      _weiAmount: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _feeReceiver: string,
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkClaimParamsERC721(
      _weiAmount: BigNumberish,
      _nftAddress: string,
      _tokenId: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    destroy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    chainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    verifyLinkdropSignerSignatureERC721(
      _weiAmount: BigNumberish,
      _nftAddress: string,
      _tokenId: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    linkdropMaster(overrides?: CallOverrides): Promise<[string]>;

    isCanceledLink(
      _linkId: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isLinkdropSigner(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    claimERC721(
      _weiAmount: BigNumberish,
      _nftAddress: string,
      _tokenId: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _feeReceiver: string,
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addSigner(
      _linkdropSigner: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _owner: string,
      _linkdropMaster: string,
      _version: BigNumberish,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isClaimedLink(
      _linkId: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  checkClaimParams(
    _weiAmount: BigNumberish,
    _tokenAddress: string,
    _tokenAmount: BigNumberish,
    _expiration: BigNumberish,
    _linkId: string,
    _linkdropSignerSignature: BytesLike,
    _receiver: string,
    _receiverSignature: BytesLike,
    _fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  claimedTo(arg0: string, overrides?: CallOverrides): Promise<string>;

  removeSigner(
    _linkdropSigner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  verifyReceiverSignatureERC721(
    _linkId: string,
    _receiver: string,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getMasterCopyVersion(overrides?: CallOverrides): Promise<BigNumber>;

  verifyLinkdropSignerSignature(
    _weiAmount: BigNumberish,
    _tokenAddress: string,
    _tokenAmount: BigNumberish,
    _expiration: BigNumberish,
    _linkId: string,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifyReceiverSignature(
    _linkId: string,
    _receiver: string,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  cancel(
    _linkId: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  claim(
    _weiAmount: BigNumberish,
    _tokenAddress: string,
    _tokenAmount: BigNumberish,
    _expiration: BigNumberish,
    _linkId: string,
    _linkdropSignerSignature: BytesLike,
    _receiver: string,
    _receiverSignature: BytesLike,
    _feeReceiver: string,
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkClaimParamsERC721(
    _weiAmount: BigNumberish,
    _nftAddress: string,
    _tokenId: BigNumberish,
    _expiration: BigNumberish,
    _linkId: string,
    _linkdropSignerSignature: BytesLike,
    _receiver: string,
    _receiverSignature: BytesLike,
    _fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  destroy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  chainId(overrides?: CallOverrides): Promise<BigNumber>;

  verifyLinkdropSignerSignatureERC721(
    _weiAmount: BigNumberish,
    _nftAddress: string,
    _tokenId: BigNumberish,
    _expiration: BigNumberish,
    _linkId: string,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  linkdropMaster(overrides?: CallOverrides): Promise<string>;

  isCanceledLink(_linkId: string, overrides?: CallOverrides): Promise<boolean>;

  isLinkdropSigner(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  claimERC721(
    _weiAmount: BigNumberish,
    _nftAddress: string,
    _tokenId: BigNumberish,
    _expiration: BigNumberish,
    _linkId: string,
    _linkdropSignerSignature: BytesLike,
    _receiver: string,
    _receiverSignature: BytesLike,
    _feeReceiver: string,
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addSigner(
    _linkdropSigner: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _owner: string,
    _linkdropMaster: string,
    _version: BigNumberish,
    _chainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isClaimedLink(_linkId: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    checkClaimParams(
      _weiAmount: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    claimedTo(arg0: string, overrides?: CallOverrides): Promise<string>;

    removeSigner(
      _linkdropSigner: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    verifyReceiverSignatureERC721(
      _linkId: string,
      _receiver: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getMasterCopyVersion(overrides?: CallOverrides): Promise<BigNumber>;

    verifyLinkdropSignerSignature(
      _weiAmount: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdraw(overrides?: CallOverrides): Promise<boolean>;

    unpause(overrides?: CallOverrides): Promise<boolean>;

    verifyReceiverSignature(
      _linkId: string,
      _receiver: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    cancel(_linkId: string, overrides?: CallOverrides): Promise<boolean>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    claim(
      _weiAmount: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _feeReceiver: string,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    checkClaimParamsERC721(
      _weiAmount: BigNumberish,
      _nftAddress: string,
      _tokenId: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    destroy(overrides?: CallOverrides): Promise<void>;

    pause(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    verifyLinkdropSignerSignatureERC721(
      _weiAmount: BigNumberish,
      _nftAddress: string,
      _tokenId: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    linkdropMaster(overrides?: CallOverrides): Promise<string>;

    isCanceledLink(
      _linkId: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isLinkdropSigner(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    claimERC721(
      _weiAmount: BigNumberish,
      _nftAddress: string,
      _tokenId: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _feeReceiver: string,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    addSigner(
      _linkdropSigner: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      _owner: string,
      _linkdropMaster: string,
      _version: BigNumberish,
      _chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isClaimedLink(_linkId: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "Canceled(address)"(
      linkId?: null
    ): TypedEventFilter<[string], { linkId: string }>;

    Canceled(linkId?: null): TypedEventFilter<[string], { linkId: string }>;

    "Claimed(address,uint256,address,uint256,address)"(
      linkId?: string | null,
      ethAmount?: null,
      token?: string | null,
      tokenAmount?: null,
      receiver?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, string],
      {
        linkId: string;
        ethAmount: BigNumber;
        token: string;
        tokenAmount: BigNumber;
        receiver: string;
      }
    >;

    Claimed(
      linkId?: string | null,
      ethAmount?: null,
      token?: string | null,
      tokenAmount?: null,
      receiver?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, string],
      {
        linkId: string;
        ethAmount: BigNumber;
        token: string;
        tokenAmount: BigNumber;
        receiver: string;
      }
    >;

    "ClaimedERC721(address,uint256,address,uint256,address)"(
      linkId?: string | null,
      ethAmount?: null,
      nft?: string | null,
      tokenId?: null,
      receiver?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, string],
      {
        linkId: string;
        ethAmount: BigNumber;
        nft: string;
        tokenId: BigNumber;
        receiver: string;
      }
    >;

    ClaimedERC721(
      linkId?: string | null,
      ethAmount?: null,
      nft?: string | null,
      tokenId?: null,
      receiver?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, string],
      {
        linkId: string;
        ethAmount: BigNumber;
        nft: string;
        tokenId: BigNumber;
        receiver: string;
      }
    >;

    "Paused()"(): TypedEventFilter<[], {}>;

    Paused(): TypedEventFilter<[], {}>;

    "Unpaused()"(): TypedEventFilter<[], {}>;

    Unpaused(): TypedEventFilter<[], {}>;

    "AddedSigningKey(address)"(
      linkdropSigner?: null
    ): TypedEventFilter<[string], { linkdropSigner: string }>;

    AddedSigningKey(
      linkdropSigner?: null
    ): TypedEventFilter<[string], { linkdropSigner: string }>;

    "RemovedSigningKey(address)"(
      linkdropSigner?: null
    ): TypedEventFilter<[string], { linkdropSigner: string }>;

    RemovedSigningKey(
      linkdropSigner?: null
    ): TypedEventFilter<[string], { linkdropSigner: string }>;
  };

  estimateGas: {
    checkClaimParams(
      _weiAmount: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimedTo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeSigner(
      _linkdropSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    verifyReceiverSignatureERC721(
      _linkId: string,
      _receiver: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMasterCopyVersion(overrides?: CallOverrides): Promise<BigNumber>;

    verifyLinkdropSignerSignature(
      _weiAmount: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifyReceiverSignature(
      _linkId: string,
      _receiver: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancel(
      _linkId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      _weiAmount: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _feeReceiver: string,
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkClaimParamsERC721(
      _weiAmount: BigNumberish,
      _nftAddress: string,
      _tokenId: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    destroy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    verifyLinkdropSignerSignatureERC721(
      _weiAmount: BigNumberish,
      _nftAddress: string,
      _tokenId: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    linkdropMaster(overrides?: CallOverrides): Promise<BigNumber>;

    isCanceledLink(
      _linkId: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isLinkdropSigner(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimERC721(
      _weiAmount: BigNumberish,
      _nftAddress: string,
      _tokenId: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _feeReceiver: string,
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addSigner(
      _linkdropSigner: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _owner: string,
      _linkdropMaster: string,
      _version: BigNumberish,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isClaimedLink(
      _linkId: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkClaimParams(
      _weiAmount: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimedTo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeSigner(
      _linkdropSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verifyReceiverSignatureERC721(
      _linkId: string,
      _receiver: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMasterCopyVersion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyLinkdropSignerSignature(
      _weiAmount: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifyReceiverSignature(
      _linkId: string,
      _receiver: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancel(
      _linkId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      _weiAmount: BigNumberish,
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _feeReceiver: string,
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkClaimParamsERC721(
      _weiAmount: BigNumberish,
      _nftAddress: string,
      _tokenId: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    destroy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verifyLinkdropSignerSignatureERC721(
      _weiAmount: BigNumberish,
      _nftAddress: string,
      _tokenId: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    linkdropMaster(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isCanceledLink(
      _linkId: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isLinkdropSigner(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimERC721(
      _weiAmount: BigNumberish,
      _nftAddress: string,
      _tokenId: BigNumberish,
      _expiration: BigNumberish,
      _linkId: string,
      _linkdropSignerSignature: BytesLike,
      _receiver: string,
      _receiverSignature: BytesLike,
      _feeReceiver: string,
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addSigner(
      _linkdropSigner: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _owner: string,
      _linkdropMaster: string,
      _version: BigNumberish,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isClaimedLink(
      _linkId: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common.js";

export declare namespace Peers {
  export type PeerStruct = { peerAddress: BytesLike };

  export type PeerStructOutput = [peerAddress: string] & {
    peerAddress: string;
  };
}

export interface PeersInterface extends Interface {
  getFunction(nameOrSignature: "getPeer"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "PeerUpdated"): EventFragment;

  encodeFunctionData(
    functionFragment: "getPeer",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getPeer", data: BytesLike): Result;
}

export namespace PeerUpdatedEvent {
  export type InputTuple = [
    chainId: BigNumberish,
    oldPeerAddress: BytesLike,
    newPeerAddress: BytesLike
  ];
  export type OutputTuple = [
    chainId: bigint,
    oldPeerAddress: string,
    newPeerAddress: string
  ];
  export interface OutputObject {
    chainId: bigint;
    oldPeerAddress: string;
    newPeerAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Peers extends BaseContract {
  connect(runner?: ContractRunner | null): Peers;
  waitForDeployment(): Promise<this>;

  interface: PeersInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getPeer: TypedContractMethod<
    [chainId_: BigNumberish],
    [Peers.PeerStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getPeer"
  ): TypedContractMethod<
    [chainId_: BigNumberish],
    [Peers.PeerStructOutput],
    "view"
  >;

  getEvent(
    key: "PeerUpdated"
  ): TypedContractEvent<
    PeerUpdatedEvent.InputTuple,
    PeerUpdatedEvent.OutputTuple,
    PeerUpdatedEvent.OutputObject
  >;

  filters: {
    "PeerUpdated(uint16,bytes32,bytes32)": TypedContractEvent<
      PeerUpdatedEvent.InputTuple,
      PeerUpdatedEvent.OutputTuple,
      PeerUpdatedEvent.OutputObject
    >;
    PeerUpdated: TypedContractEvent<
      PeerUpdatedEvent.InputTuple,
      PeerUpdatedEvent.OutputTuple,
      PeerUpdatedEvent.OutputObject
    >;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  NonReceiverMock,
  NonReceiverMockInterface,
} from "../../../contracts/mocks/NonReceiverMock";

const _abi = [
  {
    inputs: [],
    name: "dummy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50606580601d6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806332e43a1114602d575b600080fd5b00fea26469706673582212200b9ae3bf179fe56bcb10a5be6035d349ec8079e27388ba1adb36eac61d06bc9864736f6c634300080f0033";

type NonReceiverMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NonReceiverMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NonReceiverMock__factory extends ContractFactory {
  constructor(...args: NonReceiverMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NonReceiverMock> {
    return super.deploy(overrides || {}) as Promise<NonReceiverMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NonReceiverMock {
    return super.attach(address) as NonReceiverMock;
  }
  override connect(signer: Signer): NonReceiverMock__factory {
    return super.connect(signer) as NonReceiverMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NonReceiverMockInterface {
    return new utils.Interface(_abi) as NonReceiverMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NonReceiverMock {
    return new Contract(address, _abi, signerOrProvider) as NonReceiverMock;
  }
}

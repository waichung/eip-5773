/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC721ReceiverMock,
  ERC721ReceiverMockInterface,
} from "../../../contracts/mocks/ERC721ReceiverMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610159806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61004f61003e366004610088565b630a85bd0160e11b95945050505050565b6040516001600160e01b0319909116815260200160405180910390f35b80356001600160a01b038116811461008357600080fd5b919050565b6000806000806000608086880312156100a057600080fd5b6100a98661006c565b94506100b76020870161006c565b935060408601359250606086013567ffffffffffffffff808211156100db57600080fd5b818801915088601f8301126100ef57600080fd5b8135818111156100fe57600080fd5b89602082850101111561011057600080fd5b969995985093965060200194939250505056fea2646970667358221220e4985424308530b103107a76b14ec1670c2c70c9d175ca67041724cc5abb45c964736f6c634300080f0033";

type ERC721ReceiverMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ReceiverMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721ReceiverMock__factory extends ContractFactory {
  constructor(...args: ERC721ReceiverMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721ReceiverMock> {
    return super.deploy(overrides || {}) as Promise<ERC721ReceiverMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721ReceiverMock {
    return super.attach(address) as ERC721ReceiverMock;
  }
  override connect(signer: Signer): ERC721ReceiverMock__factory {
    return super.connect(signer) as ERC721ReceiverMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721ReceiverMockInterface {
    return new utils.Interface(_abi) as ERC721ReceiverMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721ReceiverMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721ReceiverMock;
  }
}

/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "cosmonaut.brexchain.txnengine";

export interface MsgRequestTransaction {
  creator: string;
  amount: string;
  fee: string;
  note: string;
  sender: string;
}

export interface MsgRequestTransactionResponse {}

export interface MsgApproveTransaction {
  creator: string;
  id: number;
}

export interface MsgApproveTransactionResponse {}

export interface MsgSendTransaction {
  creator: string;
  amount: string;
  fee: string;
  note: string;
  receiver: string;
}

export interface MsgSendTransactionResponse {}

const baseMsgRequestTransaction: object = {
  creator: "",
  amount: "",
  fee: "",
  note: "",
  sender: "",
};

export const MsgRequestTransaction = {
  encode(
    message: MsgRequestTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }
    if (message.note !== "") {
      writer.uint32(34).string(message.note);
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRequestTransaction } as MsgRequestTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.fee = reader.string();
          break;
        case 4:
          message.note = reader.string();
          break;
        case 5:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestTransaction {
    const message = { ...baseMsgRequestTransaction } as MsgRequestTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = String(object.fee);
    } else {
      message.fee = "";
    }
    if (object.note !== undefined && object.note !== null) {
      message.note = String(object.note);
    } else {
      message.note = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgRequestTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fee !== undefined && (obj.fee = message.fee);
    message.note !== undefined && (obj.note = message.note);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestTransaction>
  ): MsgRequestTransaction {
    const message = { ...baseMsgRequestTransaction } as MsgRequestTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    } else {
      message.fee = "";
    }
    if (object.note !== undefined && object.note !== null) {
      message.note = object.note;
    } else {
      message.note = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgRequestTransactionResponse: object = {};

export const MsgRequestTransactionResponse = {
  encode(
    _: MsgRequestTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRequestTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestTransactionResponse,
    } as MsgRequestTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRequestTransactionResponse {
    const message = {
      ...baseMsgRequestTransactionResponse,
    } as MsgRequestTransactionResponse;
    return message;
  },

  toJSON(_: MsgRequestTransactionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRequestTransactionResponse>
  ): MsgRequestTransactionResponse {
    const message = {
      ...baseMsgRequestTransactionResponse,
    } as MsgRequestTransactionResponse;
    return message;
  },
};

const baseMsgApproveTransaction: object = { creator: "", id: 0 };

export const MsgApproveTransaction = {
  encode(
    message: MsgApproveTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApproveTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApproveTransaction } as MsgApproveTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApproveTransaction {
    const message = { ...baseMsgApproveTransaction } as MsgApproveTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgApproveTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgApproveTransaction>
  ): MsgApproveTransaction {
    const message = { ...baseMsgApproveTransaction } as MsgApproveTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgApproveTransactionResponse: object = {};

export const MsgApproveTransactionResponse = {
  encode(
    _: MsgApproveTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgApproveTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgApproveTransactionResponse,
    } as MsgApproveTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgApproveTransactionResponse {
    const message = {
      ...baseMsgApproveTransactionResponse,
    } as MsgApproveTransactionResponse;
    return message;
  },

  toJSON(_: MsgApproveTransactionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgApproveTransactionResponse>
  ): MsgApproveTransactionResponse {
    const message = {
      ...baseMsgApproveTransactionResponse,
    } as MsgApproveTransactionResponse;
    return message;
  },
};

const baseMsgSendTransaction: object = {
  creator: "",
  amount: "",
  fee: "",
  note: "",
  receiver: "",
};

export const MsgSendTransaction = {
  encode(
    message: MsgSendTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }
    if (message.note !== "") {
      writer.uint32(34).string(message.note);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendTransaction } as MsgSendTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.fee = reader.string();
          break;
        case 4:
          message.note = reader.string();
          break;
        case 5:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendTransaction {
    const message = { ...baseMsgSendTransaction } as MsgSendTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = String(object.fee);
    } else {
      message.fee = "";
    }
    if (object.note !== undefined && object.note !== null) {
      message.note = String(object.note);
    } else {
      message.note = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    return message;
  },

  toJSON(message: MsgSendTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fee !== undefined && (obj.fee = message.fee);
    message.note !== undefined && (obj.note = message.note);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendTransaction>): MsgSendTransaction {
    const message = { ...baseMsgSendTransaction } as MsgSendTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    } else {
      message.fee = "";
    }
    if (object.note !== undefined && object.note !== null) {
      message.note = object.note;
    } else {
      message.note = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    return message;
  },
};

const baseMsgSendTransactionResponse: object = {};

export const MsgSendTransactionResponse = {
  encode(
    _: MsgSendTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendTransactionResponse,
    } as MsgSendTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendTransactionResponse {
    const message = {
      ...baseMsgSendTransactionResponse,
    } as MsgSendTransactionResponse;
    return message;
  },

  toJSON(_: MsgSendTransactionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendTransactionResponse>
  ): MsgSendTransactionResponse {
    const message = {
      ...baseMsgSendTransactionResponse,
    } as MsgSendTransactionResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RequestTransaction(
    request: MsgRequestTransaction
  ): Promise<MsgRequestTransactionResponse>;
  ApproveTransaction(
    request: MsgApproveTransaction
  ): Promise<MsgApproveTransactionResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendTransaction(
    request: MsgSendTransaction
  ): Promise<MsgSendTransactionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  RequestTransaction(
    request: MsgRequestTransaction
  ): Promise<MsgRequestTransactionResponse> {
    const data = MsgRequestTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.brexchain.txnengine.Msg",
      "RequestTransaction",
      data
    );
    return promise.then((data) =>
      MsgRequestTransactionResponse.decode(new Reader(data))
    );
  }

  ApproveTransaction(
    request: MsgApproveTransaction
  ): Promise<MsgApproveTransactionResponse> {
    const data = MsgApproveTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.brexchain.txnengine.Msg",
      "ApproveTransaction",
      data
    );
    return promise.then((data) =>
      MsgApproveTransactionResponse.decode(new Reader(data))
    );
  }

  SendTransaction(
    request: MsgSendTransaction
  ): Promise<MsgSendTransactionResponse> {
    const data = MsgSendTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.brexchain.txnengine.Msg",
      "SendTransaction",
      data
    );
    return promise.then((data) =>
      MsgSendTransactionResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}

/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "cosmonaut.brexchain.txnengine";

export interface MsgRequestTransaction {
  creator: string;
  amount: string;
  fee: string;
  note: string;
  sender: string;
}

export interface MsgRequestTransactionResponse {}

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

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RequestTransaction(
    request: MsgRequestTransaction
  ): Promise<MsgRequestTransactionResponse>;
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
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
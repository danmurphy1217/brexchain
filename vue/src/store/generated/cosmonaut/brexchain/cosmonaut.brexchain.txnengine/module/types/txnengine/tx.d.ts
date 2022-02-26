import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "cosmonaut.brexchain.txnengine";
export interface MsgRequestTransaction {
    creator: string;
    amount: string;
    fee: string;
    note: string;
    sender: string;
}
export interface MsgRequestTransactionResponse {
}
export interface MsgApproveTransaction {
    creator: string;
    id: number;
}
export interface MsgApproveTransactionResponse {
}
export interface MsgSendTransaction {
    creator: string;
    amount: string;
    fee: string;
    note: string;
    receiver: string;
}
export interface MsgSendTransactionResponse {
}
export interface MsgRejectTransaction {
    creator: string;
    id: number;
}
export interface MsgRejectTransactionResponse {
}
export declare const MsgRequestTransaction: {
    encode(message: MsgRequestTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestTransaction;
    fromJSON(object: any): MsgRequestTransaction;
    toJSON(message: MsgRequestTransaction): unknown;
    fromPartial(object: DeepPartial<MsgRequestTransaction>): MsgRequestTransaction;
};
export declare const MsgRequestTransactionResponse: {
    encode(_: MsgRequestTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestTransactionResponse;
    fromJSON(_: any): MsgRequestTransactionResponse;
    toJSON(_: MsgRequestTransactionResponse): unknown;
    fromPartial(_: DeepPartial<MsgRequestTransactionResponse>): MsgRequestTransactionResponse;
};
export declare const MsgApproveTransaction: {
    encode(message: MsgApproveTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgApproveTransaction;
    fromJSON(object: any): MsgApproveTransaction;
    toJSON(message: MsgApproveTransaction): unknown;
    fromPartial(object: DeepPartial<MsgApproveTransaction>): MsgApproveTransaction;
};
export declare const MsgApproveTransactionResponse: {
    encode(_: MsgApproveTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgApproveTransactionResponse;
    fromJSON(_: any): MsgApproveTransactionResponse;
    toJSON(_: MsgApproveTransactionResponse): unknown;
    fromPartial(_: DeepPartial<MsgApproveTransactionResponse>): MsgApproveTransactionResponse;
};
export declare const MsgSendTransaction: {
    encode(message: MsgSendTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendTransaction;
    fromJSON(object: any): MsgSendTransaction;
    toJSON(message: MsgSendTransaction): unknown;
    fromPartial(object: DeepPartial<MsgSendTransaction>): MsgSendTransaction;
};
export declare const MsgSendTransactionResponse: {
    encode(_: MsgSendTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendTransactionResponse;
    fromJSON(_: any): MsgSendTransactionResponse;
    toJSON(_: MsgSendTransactionResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendTransactionResponse>): MsgSendTransactionResponse;
};
export declare const MsgRejectTransaction: {
    encode(message: MsgRejectTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRejectTransaction;
    fromJSON(object: any): MsgRejectTransaction;
    toJSON(message: MsgRejectTransaction): unknown;
    fromPartial(object: DeepPartial<MsgRejectTransaction>): MsgRejectTransaction;
};
export declare const MsgRejectTransactionResponse: {
    encode(_: MsgRejectTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRejectTransactionResponse;
    fromJSON(_: any): MsgRejectTransactionResponse;
    toJSON(_: MsgRejectTransactionResponse): unknown;
    fromPartial(_: DeepPartial<MsgRejectTransactionResponse>): MsgRejectTransactionResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    RequestTransaction(request: MsgRequestTransaction): Promise<MsgRequestTransactionResponse>;
    ApproveTransaction(request: MsgApproveTransaction): Promise<MsgApproveTransactionResponse>;
    SendTransaction(request: MsgSendTransaction): Promise<MsgSendTransactionResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    RejectTransaction(request: MsgRejectTransaction): Promise<MsgRejectTransactionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RequestTransaction(request: MsgRequestTransaction): Promise<MsgRequestTransactionResponse>;
    ApproveTransaction(request: MsgApproveTransaction): Promise<MsgApproveTransactionResponse>;
    SendTransaction(request: MsgSendTransaction): Promise<MsgSendTransactionResponse>;
    RejectTransaction(request: MsgRejectTransaction): Promise<MsgRejectTransactionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

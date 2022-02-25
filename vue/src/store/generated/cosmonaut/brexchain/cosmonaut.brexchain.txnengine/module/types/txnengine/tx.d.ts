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
/** Msg defines the Msg service. */
export interface Msg {
    RequestTransaction(request: MsgRequestTransaction): Promise<MsgRequestTransactionResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    ApproveTransaction(request: MsgApproveTransaction): Promise<MsgApproveTransactionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RequestTransaction(request: MsgRequestTransaction): Promise<MsgRequestTransactionResponse>;
    ApproveTransaction(request: MsgApproveTransaction): Promise<MsgApproveTransactionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

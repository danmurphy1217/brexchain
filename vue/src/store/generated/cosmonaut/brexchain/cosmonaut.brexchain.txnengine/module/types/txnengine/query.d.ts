import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../txnengine/params";
import { Transaction } from "../txnengine/transaction";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "cosmonaut.brexchain.txnengine";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetTransactionRequest {
    id: number;
}
export interface QueryGetTransactionResponse {
    Transaction: Transaction | undefined;
}
export interface QueryAllTransactionRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTransactionResponse {
    Transaction: Transaction[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetTransactionRequest: {
    encode(message: QueryGetTransactionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTransactionRequest;
    fromJSON(object: any): QueryGetTransactionRequest;
    toJSON(message: QueryGetTransactionRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTransactionRequest>): QueryGetTransactionRequest;
};
export declare const QueryGetTransactionResponse: {
    encode(message: QueryGetTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTransactionResponse;
    fromJSON(object: any): QueryGetTransactionResponse;
    toJSON(message: QueryGetTransactionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTransactionResponse>): QueryGetTransactionResponse;
};
export declare const QueryAllTransactionRequest: {
    encode(message: QueryAllTransactionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTransactionRequest;
    fromJSON(object: any): QueryAllTransactionRequest;
    toJSON(message: QueryAllTransactionRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTransactionRequest>): QueryAllTransactionRequest;
};
export declare const QueryAllTransactionResponse: {
    encode(message: QueryAllTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTransactionResponse;
    fromJSON(object: any): QueryAllTransactionResponse;
    toJSON(message: QueryAllTransactionResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTransactionResponse>): QueryAllTransactionResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Transaction by id. */
    Transaction(request: QueryGetTransactionRequest): Promise<QueryGetTransactionResponse>;
    /** Queries a list of Transaction items. */
    TransactionAll(request: QueryAllTransactionRequest): Promise<QueryAllTransactionResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Transaction(request: QueryGetTransactionRequest): Promise<QueryGetTransactionResponse>;
    TransactionAll(request: QueryAllTransactionRequest): Promise<QueryAllTransactionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

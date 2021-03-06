/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../txnengine/params";
import { Transaction } from "../txnengine/transaction";
export const protobufPackage = "cosmonaut.brexchain.txnengine";
const baseGenesisState = { transactionCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.transactionList) {
            Transaction.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.transactionCount !== 0) {
            writer.uint32(24).uint64(message.transactionCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.transactionList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.transactionList.push(Transaction.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.transactionCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.transactionList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.transactionList !== undefined &&
            object.transactionList !== null) {
            for (const e of object.transactionList) {
                message.transactionList.push(Transaction.fromJSON(e));
            }
        }
        if (object.transactionCount !== undefined &&
            object.transactionCount !== null) {
            message.transactionCount = Number(object.transactionCount);
        }
        else {
            message.transactionCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.transactionList) {
            obj.transactionList = message.transactionList.map((e) => e ? Transaction.toJSON(e) : undefined);
        }
        else {
            obj.transactionList = [];
        }
        message.transactionCount !== undefined &&
            (obj.transactionCount = message.transactionCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.transactionList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.transactionList !== undefined &&
            object.transactionList !== null) {
            for (const e of object.transactionList) {
                message.transactionList.push(Transaction.fromPartial(e));
            }
        }
        if (object.transactionCount !== undefined &&
            object.transactionCount !== null) {
            message.transactionCount = object.transactionCount;
        }
        else {
            message.transactionCount = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}

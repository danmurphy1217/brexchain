// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendTransaction } from "./types/txnengine/tx";
import { MsgApproveTransaction } from "./types/txnengine/tx";
import { MsgRejectTransaction } from "./types/txnengine/tx";
import { MsgRequestTransaction } from "./types/txnengine/tx";
const types = [
    ["/cosmonaut.brexchain.txnengine.MsgSendTransaction", MsgSendTransaction],
    ["/cosmonaut.brexchain.txnengine.MsgApproveTransaction", MsgApproveTransaction],
    ["/cosmonaut.brexchain.txnengine.MsgRejectTransaction", MsgRejectTransaction],
    ["/cosmonaut.brexchain.txnengine.MsgRequestTransaction", MsgRequestTransaction],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgSendTransaction: (data) => ({ typeUrl: "/cosmonaut.brexchain.txnengine.MsgSendTransaction", value: MsgSendTransaction.fromPartial(data) }),
        msgApproveTransaction: (data) => ({ typeUrl: "/cosmonaut.brexchain.txnengine.MsgApproveTransaction", value: MsgApproveTransaction.fromPartial(data) }),
        msgRejectTransaction: (data) => ({ typeUrl: "/cosmonaut.brexchain.txnengine.MsgRejectTransaction", value: MsgRejectTransaction.fromPartial(data) }),
        msgRequestTransaction: (data) => ({ typeUrl: "/cosmonaut.brexchain.txnengine.MsgRequestTransaction", value: MsgRequestTransaction.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };

import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendTransaction } from "./types/txnengine/tx";
import { MsgApproveTransaction } from "./types/txnengine/tx";
import { MsgRejectTransaction } from "./types/txnengine/tx";
import { MsgRequestTransaction } from "./types/txnengine/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgSendTransaction: (data: MsgSendTransaction) => EncodeObject;
    msgApproveTransaction: (data: MsgApproveTransaction) => EncodeObject;
    msgRejectTransaction: (data: MsgRejectTransaction) => EncodeObject;
    msgRequestTransaction: (data: MsgRequestTransaction) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };

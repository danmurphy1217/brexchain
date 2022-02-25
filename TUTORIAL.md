1. init blockchain: `starport scaffold chain github.com/cosmonaut/brexchain --no-module && \
cd brexchain && starport chain serve -r`
2. scaffold txn-engine module for P2P payments logic: `starport scaffold module txn-engine --dep bank`
3. create data structure for storing transaction data: `starport scaffold list transaction amount fee sender receiver status note --no-message --module txn-engine`
4. create messages for initializing and mutation transaction data:
    - `send-transaction`
        - scaffold message: `starport scaffold message send-transaction amount fee note receiver --module txn-engine`
        - add code to `msg_server_send_transaction.go`, `expected_keepers.go`, and `errors.go`

          [msg_server_send_transaction.go](https://github.com/danmurphy1217/brexchain/blob/main/x/txnengine/keeper/msg_server_send_transaction.go)
          [expected_keepers.go](https://github.com/danmurphy1217/brexchain/blob/main/x/txnengine/types/expected_keepers.go)
          [errors.go](https://github.com/danmurphy1217/brexchain/blob/main/x/txnengine/types/errors.go)

        - test the functionality by 
           (1) taking note of the new public keys, 
           (2) checking balances with `brexchaind query bank balances [cosmos_publickey]`, and 
           (3) using the new message with `brexchaind tx txnengine send-transaction 1token 0token  "Note" "[cosmos_publickey]" --from alice -y`. 
               You can also list transactions: `brexchaind query txnengine list-transaction`
    - `request-transaction`
        - scaffold message: `starport scaffold message request-transaction amount fee note sender --module txn-engine`
        - add code to `msg_server_request_transaction.go`, `expected_keepers.go`, and `errors.go`

          [msg_server_request_transaction.go](https://github.com/danmurphy1217/brexchain/blob/main/x/txnengine/keeper/msg_server_request_transaction.go)
          [expected_keepers.go](https://github.com/danmurphy1217/brexchain/blob/main/x/txnengine/types/expected_keepers.go)
          [errors.go](https://github.com/danmurphy1217/brexchain/blob/main/x/txnengine/types/errors.go)

        - test the functionality by 
           (1) taking note of the new public keys, 
           (2) checking balances with `brexchaind query bank balances [cosmos_publickey]`, and 
           (3) using the new message with `brexchaind tx txnengine request-transaction 1token 0token  "Note" "[cosmos_publickey]" --from alice -y`. 
               You can also list transactions: `brexchaind query txnengine list-transaction`
    - `approve-transaction`
        - scaffold message: `starport scaffold message approve-transaction id:uint --module txn-engine`
        - add code to `msg_server_approve_transaction.go`, `expected_keepers.go`, and `errors.go`

          [msg_server_approve_transaction.go](https://github.com/danmurphy1217/brexchain/blob/main/x/txnengine/keeper/msg_server_approve_transaction.go)
          [expected_keepers.go](https://github.com/danmurphy1217/brexchain/blob/main/x/txnengine/types/expected_keepers.go)
          [errors.go](https://github.com/danmurphy1217/brexchain/blob/main/x/txnengine/types/errors.go)

        - test the functionality by 
           (1) checking balances with `brexchaind query bank balances [cosmos_publickey]`, and 
           (2) using the new message with `brexchaind tx txnengine approve-transaction "1" --from bob -y`. 
               You can also list transactions: `brexchaind query txnengine list-transaction`

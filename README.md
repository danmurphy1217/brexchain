# brexchain
A Tutorial using Cosmos SDK and Starport built for Brex EPD Learning Day. This presentation was originally given on behalf of the Brex Crypto Paper Reading Group.

# Steps Taken

## Manual Installation
- To properly run Starport on your machine you'll need Go: https://go.dev/doc/install
- Install Starport with: `curl https://get.starport.network/starport\! | bash`
-   If this fails due to write permission issues, try `curl https://get.starport.network/starport | bash`
- Verify installation with `starport version`
- Add starport to `/usr/local/bin`: `sudo mv starport /usr/local/bin/`
-   If this fails then retry with this: `sudo curl https://get.starport.network/starport! | sudo bash`

## Installation with Brew
- `brew install tendermint/tap/starport`

## Creating a Blockchain
- `starport scaffold chain github.com/cosmonaut/name-of-chain`
- `cd name-of-chain && starport chain serve`

## Customizing a Blockchain

The following flow is typical:
- Start with proto files to define Cosmos SDK messages
- Define and register queries
- Define message handler logic
- Finally, implement the logic of these queries and message handlers in keeper functions

Steps:
- `starport scaffold chain github.com/cosmonaut/brexchain --no-module` to create chain with no in-built module
- `cd brexchain && starport scaffold module txn-engine --dep bank` to scaffold txn-engine module
- `starport scaffold list transaction amount fee sender receiver status note --no-message --module txn-engine` to scaffold the transaction list and protobuf def for the txn-engine module
- Next we need to create the messages:
-   Send Transaction
-       We need to (1) scaffold a message `starport scaffold message send-transaction amount fee note receiver --module txn-engine`, (2) add the functionality for this message to  `msg_server_send_transaction.go` and update `expected_keepers.go` and `errors.go`, and (3) test the functionality by (1) taking note of the new public keys, (2) checking both of their balances with `brexchain2d query bank balances [cosmos_publickey]`, and (3) leveraging the new message with `brexchain2d tx txnengine send-transaction 1token 0token  "Note" "cosmos1gakyns598c6m3rmgq3s5lyj083s52cx3fkcuz7" --from alice -y`. You can also list transactions: `brexchain2d query txnengine list-transaction`
-   Request Transaction
-       Same as above but we will hold funds in an escrow account prior to releasingi. (1) `starport scaffold message request-transaction amount fee note sender --module txn-engine`, (2) add the functionality to `msg_server_request_transaction.go`, and (3) test it with something similar to: ` brexchain2d tx txnengine request-transaction-2 1token 0token "Hey, you owe me 1token" cosmos10ed4h64ndhzdw4060q0k57ehx22rf40eat6ndr --from bob`
-   Approve Transaction
-       `starport scaffold message approve-transaction id:uint --module txnengine`, then we need to add the functionality for this to `msg_server_approve_transaction`, and finally we need to test it out with Request Transaction. For approve-transaction we can use something similar to `brexchain2d query txnengine approve-transaction 0 --from alice -y`

useful command-line tools: `brexchain2d query txnengine list-transaction`, `brexchaind query bank balances [address]`

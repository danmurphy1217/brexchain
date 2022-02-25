package cli

import (
	"strconv"

	"github.com/cosmonaut/brexchain/x/txnengine/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdRequestTransaction() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "request-transaction [amount] [fee] [note] [sender]",
		Short: "Broadcast message request-transaction",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAmount := args[0]
			argFee := args[1]
			argNote := args[2]
			argSender := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRequestTransaction(
				clientCtx.GetFromAddress().String(),
				argAmount,
				argFee,
				argNote,
				argSender,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

package keeper

import (
	"context"

	"github.com/cosmonaut/brexchain/x/txnengine/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) SendTransaction(goCtx context.Context, msg *types.MsgSendTransaction) (*types.MsgSendTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var transaction = types.Transaction{
		Amount:   msg.Amount,
		Fee:      msg.Fee,
		Note:     msg.Note,
		Status:   "processing",
		Sender:   msg.Creator,
		Receiver: msg.Receiver,
	}

	k.AppendTransaction(ctx, transaction)

	sender, _ := sdk.AccAddressFromBech32(transaction.Sender)
	receiver, _ := sdk.AccAddressFromBech32(transaction.Receiver)
	amount, err := sdk.ParseCoinsNormalized(transaction.Amount)
	if err != nil {
		transaction.Status = "failed"
		k.SetTransaction(ctx, transaction)
		return nil, sdkerrors.Wrap(types.ErrWrongTransactionAmount, "Cannot parse coins in transaction amount")
	}

	k.bankKeeper.SendCoins(ctx, sender, receiver, amount)
	transaction.Status = "approved"

	k.SetTransaction(ctx, transaction)

	return &types.MsgSendTransactionResponse{}, nil
}

package keeper

import (
	"context"

    "github.com/cosmonaut/brexchain/x/txnengine/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)


func (k msgServer) RequestTransaction(goCtx context.Context,  msg *types.MsgRequestTransaction) (*types.MsgRequestTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var transaction = types.Transaction{
		Amount:   msg.Amount,
		Fee:      msg.Fee,
		Note:     msg.Note,
		Status:   "processing",
		Sender:   msg.Sender,
		Receiver: msg.Creator,
	}

	sender, _ := sdk.AccAddressFromBech32(transaction.Sender)
	amount, err := sdk.ParseCoinsNormalized(transaction.Amount)
	if err != nil {
		transaction.Status = "failed"
		k.SetTransaction(ctx, transaction)
		return nil, sdkerrors.Wrap(types.ErrWrongTransactionAmount, "Cannot parse coins in transaction amount")
	}
	
	// Use the module account as escrow account
	sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, sender, types.ModuleName, amount)
	if sdkError != nil {
		return nil, sdkError
	}

	k.AppendTransaction(
		ctx,
		transaction,
	)

	return &types.MsgRequestTransactionResponse{}, nil
}
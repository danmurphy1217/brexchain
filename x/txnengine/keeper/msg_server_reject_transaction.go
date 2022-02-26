package keeper

import (
	"context"

	"github.com/cosmonaut/brexchain/x/txnengine/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) RejectTransaction(goCtx context.Context, msg *types.MsgRejectTransaction) (*types.MsgRejectTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	transaction, found := k.GetTransaction(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrKeyNotFound, "key %d doesn't exist", msg.Id)
	}

	if transaction.Status != "processing" {
		return nil, sdkerrors.Wrapf(types.ErrWrongTransactionState, "%v", transaction.Status)
	}

	sender, _ := sdk.AccAddressFromBech32(transaction.Sender)
	amount, err := sdk.ParseCoinsNormalized(transaction.Amount)
	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrWrongTransactionState, "Cannot parse coins in transaction amount")
	}

	// transfer out of escrow account to the `receiver`
	k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, sender, amount)
	transaction.Status = "rejected"

	k.SetTransaction(ctx, transaction)

	return &types.MsgRejectTransactionResponse{}, nil
}

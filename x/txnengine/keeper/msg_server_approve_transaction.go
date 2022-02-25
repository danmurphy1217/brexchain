package keeper

import (
	"context"

	"github.com/cosmonaut/brexchain/x/txnengine/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) ApproveTransaction(goCtx context.Context, msg *types.MsgApproveTransaction) (*types.MsgApproveTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	transaction, found := k.GetTransaction(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrKeyNotFound, "key %d doesn't exist", msg.Id)
	}

	// TODO: for some reason the error doesn't get printed to the terminal
	if transaction.Status != "processing" {
		return nil, sdkerrors.Wrapf(types.ErrWrongTransactionState, "%v", transaction.Status)
	}

	receiver, _ := sdk.AccAddressFromBech32(transaction.Receiver)
	amount, err := sdk.ParseCoinsNormalized(transaction.Amount)
	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrWrongTransactionState, "Cannot parse coins in transaction amount")
	}

	k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, receiver, amount)
	transaction.Status = "approved"

	k.SetTransaction(ctx, transaction)

	return &types.MsgApproveTransactionResponse{}, nil
}

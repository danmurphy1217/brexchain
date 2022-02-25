package types

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/txnengine module sentinel errors
var (
	ErrSample                 = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrWrongTransactionAmount = sdkerrors.Register(ModuleName, 1, "Cannot parse Transaction.Amount")
	ErrWrongTransactionState  = sdkerrors.Register(ModuleName, 2, "wrong transaction state")
)

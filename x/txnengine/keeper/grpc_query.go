package keeper

import (
	"github.com/cosmonaut/brexchain/x/txnengine/types"
)

var _ types.QueryServer = Keeper{}

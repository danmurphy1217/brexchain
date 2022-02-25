package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/cosmonaut/brexchain/testutil/keeper"
	"github.com/cosmonaut/brexchain/x/txnengine/keeper"
	"github.com/cosmonaut/brexchain/x/txnengine/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.TxnengineKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}

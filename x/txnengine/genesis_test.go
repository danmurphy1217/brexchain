package txnengine_test

import (
	"testing"

	keepertest "github.com/cosmonaut/brexchain/testutil/keeper"
	"github.com/cosmonaut/brexchain/testutil/nullify"
	"github.com/cosmonaut/brexchain/x/txnengine"
	"github.com/cosmonaut/brexchain/x/txnengine/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		TransactionList: []types.Transaction{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		TransactionCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TxnengineKeeper(t)
	txnengine.InitGenesis(ctx, *k, genesisState)
	got := txnengine.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.TransactionList, got.TransactionList)
	require.Equal(t, genesisState.TransactionCount, got.TransactionCount)
	// this line is used by starport scaffolding # genesis/test/assert
}

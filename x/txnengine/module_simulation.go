package txnengine

import (
	"math/rand"

	"github.com/cosmonaut/brexchain/testutil/sample"
	txnenginesimulation "github.com/cosmonaut/brexchain/x/txnengine/simulation"
	"github.com/cosmonaut/brexchain/x/txnengine/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = txnenginesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgRequestTransaction = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRequestTransaction int = 100

	opWeightMsgApproveTransaction = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgApproveTransaction int = 100

	opWeightMsgSendTransaction = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSendTransaction int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	txnengineGenesis := types.GenesisState{
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&txnengineGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgRequestTransaction int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRequestTransaction, &weightMsgRequestTransaction, nil,
		func(_ *rand.Rand) {
			weightMsgRequestTransaction = defaultWeightMsgRequestTransaction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRequestTransaction,
		txnenginesimulation.SimulateMsgRequestTransaction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgApproveTransaction int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgApproveTransaction, &weightMsgApproveTransaction, nil,
		func(_ *rand.Rand) {
			weightMsgApproveTransaction = defaultWeightMsgApproveTransaction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgApproveTransaction,
		txnenginesimulation.SimulateMsgApproveTransaction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSendTransaction int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSendTransaction, &weightMsgSendTransaction, nil,
		func(_ *rand.Rand) {
			weightMsgSendTransaction = defaultWeightMsgSendTransaction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSendTransaction,
		txnenginesimulation.SimulateMsgSendTransaction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

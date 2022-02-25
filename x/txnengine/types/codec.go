package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgRequestTransaction{}, "txnengine/RequestTransaction", nil)
	cdc.RegisterConcrete(&MsgApproveTransaction{}, "txnengine/ApproveTransaction", nil)
	cdc.RegisterConcrete(&MsgSendTransaction{}, "txnengine/SendTransaction", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRequestTransaction{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgApproveTransaction{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendTransaction{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)

package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRejectTransaction = "reject_transaction"

var _ sdk.Msg = &MsgRejectTransaction{}

func NewMsgRejectTransaction(creator string, id uint64) *MsgRejectTransaction {
	return &MsgRejectTransaction{
		Creator: creator,
		Id:      id,
	}
}

func (msg *MsgRejectTransaction) Route() string {
	return RouterKey
}

func (msg *MsgRejectTransaction) Type() string {
	return TypeMsgRejectTransaction
}

func (msg *MsgRejectTransaction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRejectTransaction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRejectTransaction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

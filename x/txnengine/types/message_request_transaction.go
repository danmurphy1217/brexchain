package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRequestTransaction = "request_transaction"

var _ sdk.Msg = &MsgRequestTransaction{}

func NewMsgRequestTransaction(creator string, amount string, fee string, note string, sender string) *MsgRequestTransaction {
	return &MsgRequestTransaction{
		Creator: creator,
		Amount:  amount,
		Fee:     fee,
		Note:    note,
		Sender:  sender,
	}
}

func (msg *MsgRequestTransaction) Route() string {
	return RouterKey
}

func (msg *MsgRequestTransaction) Type() string {
	return TypeMsgRequestTransaction
}

func (msg *MsgRequestTransaction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRequestTransaction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRequestTransaction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

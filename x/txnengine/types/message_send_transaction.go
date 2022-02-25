package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendTransaction = "send_transaction"

var _ sdk.Msg = &MsgSendTransaction{}

func NewMsgSendTransaction(creator string, amount string, fee string, note string, receiver string) *MsgSendTransaction {
	return &MsgSendTransaction{
		Creator:  creator,
		Amount:   amount,
		Fee:      fee,
		Note:     note,
		Receiver: receiver,
	}
}

func (msg *MsgSendTransaction) Route() string {
	return RouterKey
}

func (msg *MsgSendTransaction) Type() string {
	return TypeMsgSendTransaction
}

func (msg *MsgSendTransaction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendTransaction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendTransaction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

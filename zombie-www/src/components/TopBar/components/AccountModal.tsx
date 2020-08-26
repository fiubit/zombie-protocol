import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'

import { yam as yamAddress } from '../../../constants/tokenAddresses'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getDisplayBalance } from '../../../utils/formatBalance'

import Button from '../../Button'
import CardIcon from '../../CardIcon'
import IconButton from '../../IconButton'
import { AddIcon, RemoveIcon } from '../../icons'
import Label from '../../Label'
import Modal, { ModalProps } from '../../Modal'
import ModalTitle from '../../ModalTitle'

import zombie from'../../../assets/img/zombie.png'

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {

  const handleSignOutClick = useCallback(() => {
    onDismiss!()
  }, [onDismiss])

  const yamBalance = useTokenBalance(yamAddress)
  const displayBalance = useMemo(() => {
    return getDisplayBalance(yamBalance)
  }, [yamBalance])

  return (
    <Modal>
      <ModalTitle text="My Account" />

      <StyledBalanceWrapper>
        <CardIcon><img width="34px" height="34px" alt="a zombie" src={zombie} /></CardIcon>
        <StyledBalance>
          <StyledValue>{displayBalance}</StyledValue>
          <Label text="ZOMBIE Balance" />
        </StyledBalance>
        <StyledBalanceActions>
          <IconButton>
            <RemoveIcon /> 
          </IconButton>
          <StyledSpacer />
          <IconButton>
            <AddIcon />
          </IconButton>
        </StyledBalanceActions>
      </StyledBalanceWrapper>

      <StyledSpacer />
      <Button
        href=""
        text="More info"
        variant="secondary"
      />
      <StyledSpacer />
      <Button
        onClick={handleSignOutClick}
        text="Sign out"
      />
    </Modal>
  )
}

const StyledSpacer = styled.div`
  height: ${props => props.theme.spacing[4]}px;
  width: ${props => props.theme.spacing[4]}px;
`

const StyledValue = styled.div`
  color: ${props => props.theme.color.grey[600]};
  font-size: 36px;
  font-weight: 700;
`

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.spacing[4]}px;
`

const StyledBalanceIcon = styled.div`
  font-size: 36px;
  margin-right: ${props => props.theme.spacing[3]}px;
`

const StyledBalanceActions = styled.div`
  align-items: center;
  display: flex;
  margin-top: ${props => props.theme.spacing[4]}px;
`

export default AccountModal
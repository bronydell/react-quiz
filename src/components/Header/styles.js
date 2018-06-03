import styled from 'styled-components'
import { Constants } from 'expo'

export const Container = styled.View`
  padding-top: ${Constants.statusBarHeight};
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
`

export const ButtonWrapper = styled.View`
  padding-right: 16;
  padding-left: 16;
`

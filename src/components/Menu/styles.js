import styled from 'styled-components'
import { Constants } from 'expo'

export const Container = styled.View`
  padding-left: 32;
  padding-top: ${Constants.statusBarHeight + 8};
  padding-right: 32;
  flex: 1;
  align-items: center;
`

export const RowWrapper = styled.View`
  padding-top: 8;
  width: 100%;
`

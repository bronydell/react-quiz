import styled from 'styled-components'
import { Constants } from 'expo'

export const Container = styled.KeyboardAvoidingView`
  padding-top: ${Constants.statusBarHeight};
  flex: 1;
`
export const Content = styled.View`
  padding-left: 32;
  padding-right: 32;
  flex: 1;
`

export const InfoWrapper = styled.View`
  padding-top: 32;
  padding-bottom: 16;
`

export const TitleWrapper = styled.View`
  padding-top: 8;
  justify-content: center;
  align-items: center;
`

export const RowWrapper = styled.View`
  padding-top: 8;
  width: 100%;
`

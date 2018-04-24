import styled from 'styled-components'
import { Constants } from 'expo'

export const Container = styled.KeyboardAvoidingView`
  padding-top: ${Constants.statusBarHeight};
  flex: 1;
`

export const TitleWrapper = styled.View`
  padding-top: 8;
  justify-content: center;
  align-items: center;
`

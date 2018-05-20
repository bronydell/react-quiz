import styled from 'styled-components'
import { Constants } from 'expo'

export const Container = styled.KeyboardAvoidingView`
  padding-top: ${Constants.statusBarHeight};
  flex-grow: 1;
`
export const Content = styled.ScrollView`
`

export const EmptySpace = styled.View`
  flex: 1;
`

export const BottomButtonWrapper = styled.View`
  padding-top: 8;
  padding-bottom: 8;
  padding-left: 8;
  padding-right: 8;
`

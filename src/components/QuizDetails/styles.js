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
export const Content = styled.View`
  flex: 1;
  padding-top: 8;
  padding-right: 8;
  padding-left: 8;
  padding-bottom: 8;
`
export const DetailsWrapper = styled.ScrollView`
  flex: 1;
`

import styled from 'styled-components'
import { COLOR_INPUT_BACKGROUND } from 'src/lib/cssvars'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`
export const Content = styled.View`
  padding-left: 32;
  padding-right: 32;
  flex: 1;
  align-items: center;
`

export const LoginWrapper = styled.View`
  background-color: ${COLOR_INPUT_BACKGROUND};
`

export const FormWrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 8;
  border-bottom-width: 1;
  border-color: gray;
  width: 100%;
`

export const TitleWrapper = styled.View`
  padding-top: 8;
`

export const RowWrapper = styled.View`
  padding-top: 8;
  width: 100%;
`

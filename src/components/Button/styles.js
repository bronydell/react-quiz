import styled from 'styled-components'

import {
  COLOR_PRIMARY_BUTTON,
  COLOR_PRIMARY_BUTTON_SHADOW,
} from 'src/lib/cssvars'

export const Container = styled.TouchableHighlight`
  padding-top: 7;
  padding-right: 20;
  padding-bottom: 7;
  padding-left: 20;
  border-radius: 18;
  border-color: ${COLOR_PRIMARY_BUTTON_SHADOW};
  border-bottom-width: 3;
  border-right-width: 3;
  background-color: ${COLOR_PRIMARY_BUTTON};
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Text = styled.Text`
  font-size: 32;
  color: white;
  font-family: Dimbo;
`

import styled from 'styled-components'

import { COLOR_WHITE, COLOR_BLACK_TRANSLUCENT } from 'src/lib/cssvars'

const COLOR_MODAL_BACKGROUND = COLOR_WHITE
const COLOR_OVERLAY_BACKGROUND = COLOR_BLACK_TRANSLUCENT

export const ModalContent = styled.View`
  width: 75%;
  border-radius: 4;
  background: ${COLOR_MODAL_BACKGROUND};
`

export const Background = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${COLOR_OVERLAY_BACKGROUND};
`

export const CloseButton = styled.TouchableOpacity`
  margin-left: auto;
  padding-horizontal: 10;
  padding-bottom: 5;
`

export const CloseButtonText = styled.Text`
  font-size: 25;
  font-family: 'Dimbo';
`

export const Content = styled.View`
  padding-horizontal: 35;
  padding-bottom: 35;
  align-items: center;
`

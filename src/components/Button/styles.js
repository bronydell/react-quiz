import styled from 'styled-components'

export const Container = styled.TouchableHighlight`
  padding-top: 7;
  padding-right: 20;
  padding-bottom: 7;
  padding-left: 20;
  border-radius: 18;
  border-color: ${props => props.underlayColor};
  border-bottom-width: 3;
  border-right-width: 3;
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Text = styled.Text`
  font-size: 32;
  color: white;
  text-align: center;
  font-family: Dimbo;
`

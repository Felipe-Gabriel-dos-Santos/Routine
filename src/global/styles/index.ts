import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundColor.primary};
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Font = styled.Text`
  font-size: 30px;
  color: ${({theme}) => theme.colors.fontColor.primary};
`;

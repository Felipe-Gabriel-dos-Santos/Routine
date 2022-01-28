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
  font-size: 20px;
  color: ${({theme}) => theme.colors.fontColor.primary};
`;

export const Description = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.colors.fontColor.secondary};
`;

export const Title = styled(Font)`
  font-size: 50px;
  font-weight: bold;
  text-transform: capitalize;
`;

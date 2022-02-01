import styled from 'styled-components/native';

export const MenuBody = styled.View`
  height: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundColor.primary};
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.View`
  height: 6px;
  width: 33%;
  background-color: ${({ theme }) => theme.colors.fontColor.primary};
  border-radius: 100px;
  opacity: 0.9;
`;
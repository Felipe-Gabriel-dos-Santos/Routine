import styled from 'styled-components/native';

export const Backdrop = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: flex-end;
  align-items: center;
`;

export const MenuBox = styled.View`
    height: 50%;
    width: 95%;
    background-color: ${({ theme }) => theme.colors.backgroundColor.secondary};
    border-radius: 20px;
`;

export const ContentContainer = styled.View`
    flex: 1;
    padding: 15px;
`;

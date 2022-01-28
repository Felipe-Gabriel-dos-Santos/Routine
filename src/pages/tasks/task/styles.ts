import styled from 'styled-components/native';

export const TaskBackground = styled.View`
  justify-content: center;
  padding: 0px 15px 0px 15px;
  margin: 10px 5% 10px 5%;
  background-color: ${({theme}) => theme.colors.backgroundColor.secondary};
  min-height: 80px;
  border-radius: 13px;
`;

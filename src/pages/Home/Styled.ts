import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  > button {
    margin-bottom: ${(props) => props.theme.space[2]};
  }
`;

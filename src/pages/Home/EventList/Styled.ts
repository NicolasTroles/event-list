import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  > input {
    margin-bottom: ${(props) => props.theme.space[2]};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

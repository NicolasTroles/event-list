import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 30px;
  box-shadow: ${(props) => props.theme.shadows.md};
  min-height: 100vh;
  .ant-layout {
    background: transparent;
  }
  @media (min-width: 476px) {
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;
  }
  @media (min-width: 768px) {
    padding-right: 15px;
    padding-left: 15px;
    width: 720px;
    max-width: 100%;
  }
  @media (min-width: 992px) {
    padding-right: 15px;
    padding-left: 15px;
    width: 960px;
    max-width: 100%;
  }
  @media (min-width: 1200px) {
    padding-right: 15px;
    padding-left: 15px;
    width: 1140px;
    max-width: 100%;
  }

  @media (min-width: 1400px) {
    width: 1340px;
    max-width: 100%;
  }
`;

export const HeaderWrapper = styled.div`
  .ant-layout-header {
    background: transparent;
    text-align: center;
    margin: ${(props) => props.theme.space[4]} 0;
  }
`;

import { globalSelector } from 'src/redux/global/selectors';
import { useSelector } from 'react-redux';

// Components
import { Spin } from 'antd';

// Styles
import * as Styled from './Styled';

export default function Spinner() {
  const { globalLoading } = useSelector(globalSelector);

  if (!globalLoading) {
    return <></>;
  }

  return (
    <Styled.Wrapper>
      <Spin size="large" />
    </Styled.Wrapper>
  );
}

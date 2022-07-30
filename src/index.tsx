import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Components
import { HomePage } from './pages/Home/Home';
import { Layout } from 'antd';
const { Header, Content } = Layout;
import Spinner from 'src/components/Spinner/Spinner';

// Styled
import 'antd/dist/antd.min.css';
import './styles/index.css';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/theme';
import * as GlobalStyled from './styles/GlobalStyled';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <GlobalStyled.Wrapper>
        <Layout>
          <GlobalStyled.HeaderWrapper>
            <Header>
              <img
                width={300}
                src="https://assets.website-files.com/5e2495f5992bfa2a8b2e2365/5e583b4ac8f5875e1262a672_22_Logo_MW_Font_dark.svg"
              />
            </Header>
          </GlobalStyled.HeaderWrapper>
          <Content>
            <HomePage />
          </Content>
        </Layout>
      </GlobalStyled.Wrapper>
      <Spinner />
    </ThemeProvider>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <img height="100" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_170805.png" />
                <img height="100" src="https://www.specbee.com/sites/default/files/inline-images/Ant.png" />
                <img
                  height="80"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                />
                <img height="80" src="https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png" />
                <img
                  height="80"
                  src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"
                />
              </div>
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

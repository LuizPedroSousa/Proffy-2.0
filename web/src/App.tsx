import React, { useContext } from 'react';
import Router from './routers';
import GlobalStyle from './Assets/Styles/global';
import { ThemeProvider } from 'styled-components';
import light from './Assets/Styles/themes/light';

import ThemeChangeProvider from './Assets/Styles/themes/provider';
import Context from './Assets/Styles/themes/context';
function App() {
  return (
    <div className="App">
      <ThemeChangeProvider>
        <Context.Consumer>
          {theme => (
            <ThemeProvider theme={theme.theme}>
              <GlobalStyle />
              <Router />
            </ThemeProvider>
          )}
        </Context.Consumer>
      </ThemeChangeProvider>
    </div>
  );
}

export default App;
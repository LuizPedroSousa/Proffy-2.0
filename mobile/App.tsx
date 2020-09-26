import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Context from './src/Styles/Context';
import ThemeChangeProvider from './src/Styles/provider';

export default function App() {
  return (
    <>
      <ThemeChangeProvider>
        <Context.Consumer>
          {theme =>
            <ThemeProvider theme={theme.theme} >
              <StatusBar style="auto" />
            </ThemeProvider>
          }
        </Context.Consumer>
      </ThemeChangeProvider>
    </>
  );
}
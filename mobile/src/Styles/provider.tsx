import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import usePersistedState from '../Utils/UsePeristedState';
import Context from './Context';
import dark from './themes/dark';
import light from './themes/light';

const ThemeChangeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
    const toggleChangeTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }
    return (
        <Context.Provider
            value={{
                theme,
                toggleChangeTheme,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default ThemeChangeProvider;
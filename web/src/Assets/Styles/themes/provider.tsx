import React, { useState } from 'react';
import Context from './context';
import light from './light';
import dark from './dark';

const ThemeChangeProvider: React.FunctionComponent = ({ children }) => {
    const [theme, setTheme] = useState(light);

    const toggleChangeTheme = () => {
        setTheme(theme.title == 'light' ? dark : light);
    }
    return (
        <Context.Provider
            value={{
                theme: theme,
                setTheme: toggleChangeTheme
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default ThemeChangeProvider;
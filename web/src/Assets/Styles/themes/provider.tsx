import React from 'react';
import Context from './context';
import light from './light';
import dark from './dark';

import usePersistedState from '../../../Utils/usePersistedState';

const ThemeChangeProvider: React.FunctionComponent = ({ children }) => {
    const [theme, setTheme] = usePersistedState('theme', light);

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
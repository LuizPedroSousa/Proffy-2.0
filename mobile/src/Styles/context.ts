import { createContext } from 'react';
import light from './themes/light';

const Context = createContext({
    theme: light,
    toggleChangeTheme: () => {},
});

export default Context;
import {createContext} from 'react';
import light from './light';
import dark from './dark';

const Context = createContext({
    theme: light,
    setTheme: () => { },
});

export default Context;
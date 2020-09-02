import React, { useState } from 'react';
import light from './light';
import dark from './dark';

const Context = React.createContext({
    theme: light,
    setTheme: () => { },
});

export default Context;
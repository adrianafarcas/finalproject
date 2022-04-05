import * as React from 'react';

export const GrapesContext = React.createContext({
    grapes: [],
    setGrapes: () => (false),
});
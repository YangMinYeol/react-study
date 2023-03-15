import React from 'react';
import ReactDOM from 'react-dom/client';

const pVirtualDOM = React.createElement('p', null, "Hello virtual DOM world!");
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(pVirtualDOM);
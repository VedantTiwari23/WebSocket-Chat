import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    // <StrictMode> //nhi krenge tho 2 baar call hoga
    <App />
    // </StrictMode>
);

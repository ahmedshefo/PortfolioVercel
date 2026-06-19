import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

window.addEventListener('error', (e) => {
  console.error("Global error caught:", e.error);
  document.body.innerHTML += `<div style="color:red; background: #fff; position: absolute; z-index: 9999; top: 0; left: 0; padding: 20px;"><h1>Runtime Error:</h1><pre>${e.error?.stack || e.message}</pre></div>`;
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

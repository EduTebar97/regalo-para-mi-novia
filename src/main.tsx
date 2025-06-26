import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './globalStyles.ts'; // Asegúrate de que esta importación existe

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle /> {/* Esta línea inyecta los estilos en toda la app */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Importa las fuentes desde Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500&display=swap');

  /*
    Reseteo de CSS más robusto para asegurar consistencia entre navegadores.
    Esto soluciona el problema de centrado.
  */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Asegura que la app ocupe toda la pantalla */
  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Poppins', 'sans-serif';
    background-color: #fdf2f8;
    color: #374151;
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
  }
  
  h1, h2, h3 {
    font-family: 'Playfair Display', 'serif';
    text-wrap: balance; /* Mejora cómo se parten los títulos en varias líneas */
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyle;
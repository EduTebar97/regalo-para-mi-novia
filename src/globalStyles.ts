import { createGlobalStyle } from 'styled-components';

// Este archivo reemplaza a index.css para los estilos base.
const GlobalStyle = createGlobalStyle`
  /* Importa las fuentes desde Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500&display=swap');

  /* Reset básico y estilos del body */
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: #fdf2f8; /* Color rosa pálido de fondo */
    color: #374151; /* Color de texto gris oscuro */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Estilos para los encabezados */
  h1, h2, h3 {
    font-family: 'Playfair Display', serif;
  }
`;

export default GlobalStyle;
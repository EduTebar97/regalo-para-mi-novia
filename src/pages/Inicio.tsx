import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AnimatedPage from '../components/AnimatedPage';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid; // CAMBIO: Usamos 'grid' para un mejor control del centrado.
  place-items: center; // CAMBIO: Centra el contenido perfectamente en el medio.
  text-align: center;
  padding: 1rem;
  box-sizing: border-box; // Asegura que el padding no cause desbordamiento.
`;

const Title = styled.h1`
  font-size: 2.5rem; // Ajustado para móviles
  color: #db2777;
  margin-bottom: 1rem;
  @media (min-width: 768px) { font-size: 4.5rem; }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2.5rem;
  @media (min-width: 768px) { font-size: 1.5rem; }
`;

const StyledLink = styled(Link)`
  background-color: #ec4899;
  color: white;
  font-weight: bold;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  display: inline-block;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #db2777;
    transform: scale(1.05);
  }
`;

const Inicio = () => (
  <AnimatedPage>
    <PageContainer>
      <div>
        <Title>¡Feliz Cumpleaños, Mi Amor!</Title>
        <Subtitle>He creado un pequeño viaje para ti. ¿Empezamos?</Subtitle>
        <StyledLink to="/fotos-1">Comenzar la Aventura</StyledLink>
      </div>
    </PageContainer>
  </AnimatedPage>
);

export default Inicio;
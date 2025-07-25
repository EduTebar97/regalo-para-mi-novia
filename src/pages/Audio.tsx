import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AnimatedPage from '../components/AnimatedPage';

// CAMBIO IMPORTANTE: Se importa el archivo de audio localmente.
// Asegúrate de que el archivo 'audio-regalo.mp3' exista en la carpeta 'src/assets'.
import miAudio from '../assets/audio-regalo.mp3';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div` 
  max-width: 640px; 
  width: 100%; 
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;

const Title = styled.h1` 
  font-size: 2.5rem; 
  color: #db2777; 
  margin-bottom: 1rem; 
`;

const Subtitle = styled.p` 
  font-size: 1.25rem; 
  color: #4b5563; 
  margin-bottom: 2.5rem; 
`;

const AudioPlayer = styled.audio`
    width: 100%; 
    max-width: 28rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    border-radius: 9999px; 
    margin-bottom: 2.5rem;
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

const Audio = () => (
    <AnimatedPage>
        <PageContainer>
            <ContentWrapper>
                <Title>Quería decírtelo con mi voz...</Title>
                <Subtitle>Dale al play y cierra los ojos.</Subtitle>
                
                {/* SOLUCIÓN DEFINITIVA: Se usa la variable importada del audio local.
                  Esto asegura que el archivo siempre esté disponible para la aplicación.
                */}
                <AudioPlayer 
                    controls 
                    src={miAudio}
                >
                    Tu navegador no soporta el elemento de audio.
                </AudioPlayer>

                <StyledLink to="/formulario">El regalo final</StyledLink>
            </ContentWrapper>
        </PageContainer>
    </AnimatedPage>
);

export default Audio;
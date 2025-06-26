import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AnimatedPage from '../components/AnimatedPage';

const PageContainer = styled.div`
  min-height: 100vh; display: flex; flex-direction: column; justify-content: center; 
  align-items: center; text-align: center; padding: 1rem;
`;
const ContentWrapper = styled.div` display: flex; flex-direction: column; align-items: center; width: 100%;`;
const Title = styled.h1`
  font-size: 3rem; color: #db2777; margin-bottom: 1rem;
  @media (min-width: 768px) { font-size: 4.5rem; }
`;
const Subtitle = styled.p`
  font-size: 1.25rem; color: #4b5563; margin-bottom: 2.5rem;
  @media (min-width: 768px) { font-size: 1.5rem; }
`;
const VideoContainer = styled.div`
    width: 100%; max-width: 64rem; aspect-ratio: 16 / 9;
    background-color: black; border-radius: 0.5rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
    overflow: hidden; margin-bottom: 2.5rem;
`;
const StyledLink = styled(Link)`
  background-color: #ec4899; color: white; font-weight: bold; padding: 1rem 2.5rem;
  border-radius: 9999px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  display: inline-block; transition: all 0.3s ease; text-decoration: none;
  &:hover { background-color: #db2777; transform: scale(1.05); }
`;

const Video = () => {
    return (
        <AnimatedPage>
            <PageContainer>
                <ContentWrapper>
                    <Title>¡Respuesta Correcta!</Title>
                    <Subtitle>Sabía que lo recordarías. Te has ganado una recompensa.</Subtitle>
                    <VideoContainer>
                        <iframe 
                            width="100%" height="100%" 
                            src="https://drive.google.com/file/d/19u3P9LVSQstKppicBh2EDiFLIlPap2y5/preview" 
                            title="Un video para ti" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                        ></iframe>
                    </VideoContainer>
                    <StyledLink to="/prueba-absurda">Siguiente prueba</StyledLink>
                </ContentWrapper>
            </PageContainer>
        </AnimatedPage>
    );
};

export default Video;
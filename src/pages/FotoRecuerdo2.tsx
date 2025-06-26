import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AnimatedPage from '../components/AnimatedPage';

// Estilos Reutilizados
const PageContainer = styled.div`
  min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;
  text-align: center; padding: 2rem;
`;
const ContentWrapper = styled.div` max-width: 1024px; `;
const Title = styled.h1` font-size: 2.5rem; color: #db2777; margin-bottom: 1rem; `;
const Subtitle = styled.p` font-size: 1.25rem; color: #374151; margin-bottom: 2.5rem; `;
const CollageImage = styled.img`
    width: 100%; height: 100%; object-fit: cover; border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); transition: transform 0.3s ease;
    &:hover { transform: scale(1.05); }
`;
const StyledLink = styled(Link)`
  background-color: #ec4899; color: white; font-weight: bold; padding: 0.75rem 2rem;
  border-radius: 9999px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  display: inline-block; transition: all 0.3s ease; text-decoration: none;
  &:hover { background-color: #db2777; transform: scale(1.05); }
`;
const Collage = styled.div`
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 2.5rem;
    @media (min-width: 768px) { grid-template-columns: repeat(4, 1fr); }
`;
const CollageItem = styled.div<{ gridClass?: string }>`
    ${props => props.gridClass === 'md:col-span-2 md:row-span-2' && `
        @media (min-width: 768px) {
            grid-column: span 2 / span 2;
            grid-row: span 2 / span 2;
        }
    `}
`;

const images = [
    { src: "https://i.imgur.com/OCYE11M.jpeg", alt: "Recuerdo 6", gridClass: "md:col-span-2 md:row-span-2" },
    { src: "https://i.imgur.com/bMIRQM0.jpeg", alt: "Recuerdo 7" },
    { src: "https://i.imgur.com/Wth8mFs.jpeg", alt: "Recuerdo 8" },
    { src: "https://i.imgur.com/XrJNAls.jpeg", alt: "Recuerdo 9" },
    { src: "https://i.imgur.com/YRtKn7I.jpeg", alt: "Recuerdo 10" },
];

const FotoRecuerdo2 = () => (
    <AnimatedPage>
        <PageContainer>
            <ContentWrapper>
                <Title>Creando momentos inolvidables</Title>
                <Subtitle>Y cada día que pasa, sumamos más páginas a nuestro libro.</Subtitle>
                <Collage>
                    {images.map(img => (
                        <CollageItem key={img.src} gridClass={img.gridClass}>
                            <CollageImage src={img.src} alt={img.alt} />
                        </CollageItem>
                    ))}
                </Collage>
                <StyledLink to="/pregunta">Ahora, a probar tu memoria</StyledLink>
            </ContentWrapper>
        </PageContainer>
    </AnimatedPage>
);

export default FotoRecuerdo2;
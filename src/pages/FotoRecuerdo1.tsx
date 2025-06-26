import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AnimatedPage from '../components/AnimatedPage';

const PageContainer = styled.div`
  min-height: 100vh; 
  width: 100%;
  display: grid;
  place-items: center;
  text-align: center; 
  padding: 2rem;
  box-sizing: border-box;
`;
const ContentWrapper = styled.div` 
  max-width: 1024px; 
  width: 100%;
`;
const Title = styled.h1` 
  font-size: 2.5rem; 
  color: #db2777; 
  margin-bottom: 1rem; 
`;
const Subtitle = styled.p` 
  font-size: 1.25rem; 
  color: #374151; 
  margin-bottom: 2.5rem; 
`;
const Collage = styled.div`
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    gap: 1rem; 
    margin-bottom: 2.5rem;
    @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`;
const CollageItem = styled.div<{ gridClass?: string }>`
    ${props => props.gridClass === 'md:col-span-2' && `
        @media (min-width: 768px) { grid-column: span 2 / span 2; }
    `}
`;
const CollageImage = styled.img`
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); 
    transition: transform 0.3s ease;
    &:hover { transform: scale(1.05); }
`;
const StyledLink = styled(Link)`
  background-color: #ec4899; 
  color: white; 
  font-weight: bold; 
  padding: 0.75rem 2rem;
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

// CAMBIO: Se vuelve a la lógica original con URLs externas.
const images = [
  { src: "https://i.imgur.com/IYVypFc.jpeg", alt: "Recuerdo 1", gridClass: "md:col-span-2" },
  { src: "https://i.imgur.com/zLS3nc7.jpeg", alt: "Recuerdo 2" },
  { src: "https://i.imgur.com/3YGfkx4.jpeg", alt: "Recuerdo 3" },
  { src: "https://i.imgur.com/eQxO6Nv.jpeg", alt: "Recuerdo 4" },
  { src: "https://i.imgur.com/7jYL3it.jpeg", alt: "Recuerdo 5" },
];

const FotoRecuerdo1 = () => (
  <AnimatedPage>
    <PageContainer>
      <ContentWrapper>
        <Title>Algunos de nuestros comienzos</Title>
        <Subtitle>Cada una de estas imágenes guarda un pedacito de nuestra historia.</Subtitle>
        <Collage>
          {images.map(img => (
            <CollageItem key={img.src} gridClass={img.gridClass}>
              <CollageImage src={img.src} alt={img.alt}/>
            </CollageItem>
          ))}
        </Collage>
        <StyledLink to="/fotos-2">Y la historia continuó</StyledLink>
      </ContentWrapper>
    </PageContainer>
  </AnimatedPage>
);

export default FotoRecuerdo1;
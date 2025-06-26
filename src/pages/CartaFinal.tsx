import styled from 'styled-components';
import AnimatedPage from '../components/AnimatedPage';

const PageContainer = styled.div`
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  padding: 1rem;
  @media (min-width: 768px) { padding: 3rem; }
`;
const MainContent = styled.main`
    max-width: 896px; width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(4px);
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    border-radius: 1rem;
    padding: 2rem;
    @media (min-width: 768px) { padding: 3rem; }
    @media (min-width: 1024px) { padding: 4rem; }
`;
const Title = styled.h1`
    font-size: 2.25rem; color: #be185d; text-align: center; margin-bottom: 2rem;
    @media (min-width: 768px) { font-size: 3rem; }
`;
const LetterBody = styled.div`
    font-size: 1.125rem; color: #374151;
    line-height: 1.7;
    p { margin-bottom: 1.5rem; }
`;

const Signature = styled.p`
    text-align: right; margin-top: 3rem;
`;
const SignatureName = styled.span`
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
`;

const CartaFinal = () => {
    return (
        <AnimatedPage>
            <PageContainer>
                <MainContent>
                    <Title>Para el amor de mi vida</Title>
                    <LetterBody>
                        <p>Mi amor,</p>
                        <p>Si estás leyendo esto, es que has completado el pequeño viaje que he creado para ti. No es más que una pequeña muestra, un torpe intento de poner en una pantalla todo lo que me haces sentir.</p>
                        <p>Quería empezar este día tan especial recordándote algunos de los momentos que hemos construido juntos, ladrillo a ladrillo, risa a risa. Ver esas fotos y recordar esos momentos me hace darme cuenta de la inmensa suerte que tengo de tenerte a mi lado.</p>
                        <p>Y hablando de esa luz que tienes, de esa fuerza que te mencioné en el audio, quiero que sepas algo que pienso todos los días. Admiro tu increíble fuerza de voluntad, cómo luchas por tus sueños sin descanso. Tu capacidad de concentración, tu mente brillante, para mí, eres un verdadero ejemplo a seguir. Ojalá yo tuviera esa capacidad, y no me refiero solo a poder estudiar o retener información, que ya de por sí me parece una locura, sino a todo lo que eso conlleva: el esfuerzo, la disciplina inquebrantable, la constancia. Tantas cosas que demuestran la persona tan increíble que eres. Por eso, siéntete inmensamente orgullosa. No permitas ni por un segundo que nada te haga dudar o te impida pensar en positivo, porque ya has recorrido un camino enorme y estás a un paso de la meta.</p>
                        <p>Quiero que sepas que el motivo real por el que estoy en España, la razón por la que lucho y me enfrento a lo que haga falta, eres tú. Todo es por conseguir un futuro contigo, por formar esa familia que soñamos y disfrutar cada segundo de la vida a tu lado.</p>
                        <p>Hoy, en tu día, te envío el mayor de mis deseos. Espero de todo corazón que te haya gustado este regalo. Me hubiera encantado estar ahí para dártelo con un abrazo, pero ya sabes que en menos de un mes estaré allí, dándote toda la guerra del mundo, pero sin distraerte mucho de tus asuntos, lo prometo.</p>
                        <p>Feliz cumpleaños, mi vida. Te quiero más de lo que las palabras pueden expresar.</p>
                        <Signature>Con todo mi amor,<br />
                          <SignatureName>Maty</SignatureName>
                        </Signature>
                    </LetterBody>
                </MainContent>
            </PageContainer>
        </AnimatedPage>
    );
};

export default CartaFinal;
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AnimatedPage from '../components/AnimatedPage';
import { FaCheckCircle } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh; display: flex; flex-direction: column; 
  justify-content: center; align-items: center; text-align: center; padding: 2rem;
`;
const ContentWrapper = styled.div` max-width: 640px; width: 100%;`;
const Title = styled.h1` font-size: 2.5rem; color: #db2777; margin-bottom: 1rem; `;
const Subtitle = styled.p` font-size: 1.125rem; color: #374151; margin-bottom: 2rem; `;
const QuestionRow = styled.div`
    display: flex; align-items: center; gap: 0.75rem;
    background-color: rgba(255, 255, 255, 0.6); padding: 0.75rem; border-radius: 0.5rem;
`;
const QuestionLabel = styled.label` flex: 1; text-align: left; font-size: 1.125rem; color: #374151; `;
const Input = styled.input`
    width: 5rem; padding: 0.5rem 0.75rem; border: 2px solid #fbcfe8;
    border-radius: 0.5rem; text-align: center; font-size: 1.25rem; font-weight: bold;
    -moz-appearance: textfield;
    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
    &:focus { outline: none; border-color: #f472b6; }
`;
const StatusIcon = styled.span` width: 2rem; height: 2rem; display: flex; align-items: center; justify-content: center; `;
const ContinueButton = styled.button`
    width: 100%; font-weight: bold; padding: 0.75rem 3rem; border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); transition: all 0.3s ease;
    border: none; color: white; margin-top: 2rem;
    background-color: ${props => props.disabled ? '#f9a8d4' : '#ec4899'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled ? 0.5 : 1};
    &:hover {
        background-color: ${props => !props.disabled && '#db2777'};
        transform: ${props => !props.disabled && 'scale(1.05)'};
    }
    @media (min-width: 768px) { width: auto; }
`;
const ItalicText = styled.p` font-size: 0.875rem; color: #6b7280; font-style: italic; margin-top: 1rem;`;

const absurdQuestions = [ "Del 1 al 10, ¿Cuánto me quieres?", "Del 1 al 10, ¿Qué tan guapo soy?", "Del 1 al 10, ¿Me echas de menos?", "Del 1 al 10, ¿Cuántas ganas tienes de que vivamos juntos?", "Del 1 al 10, ¿Cómo de buenos son mis chistes?", "Del 1 al 10, ¿Te gusta esta sorpresa?", "Del 1 al 10, ¿Cuál es mi nota como novio?", "Del 1 al 10, ¿Soy el amor de tu vida?", "Del 1 al 10, ¿Cuántos besos me vas a dar luego?", "Del 1 al 10, ¿Volverías a elegirme?" ];

const PruebaAbsurda = () => {
  const [answers, setAnswers] = useState<string[]>(new Array(absurdQuestions.length).fill(''));
  const navigate = useNavigate();
  const correctAnswer = '10';

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const allTens = useMemo(() => answers.every(answer => answer === correctAnswer), [answers]);

  return (
    <AnimatedPage>
      <PageContainer>
        <ContentWrapper>
          <Title>Un Test Muy Serio</Title>
          <Subtitle>La única respuesta posible es la máxima puntuación 😉</Subtitle>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem'}}>
            {absurdQuestions.map((question, index) => (
              <QuestionRow key={index}>
                <QuestionLabel>{question}</QuestionLabel>
                <Input type="number" value={answers[index]} onChange={e => handleInputChange(index, e.target.value)} min="0" max="10"/>
                <StatusIcon>
                  {answers[index] === correctAnswer && <FaCheckCircle style={{color: '#22c55e', fontSize: '1.5rem'}} />}
                </StatusIcon>
              </QuestionRow>
            ))}
          </div>
          <ItalicText>Más te vale poner todo 10, sino el universo podría generar un error 😉</ItalicText>
          <ContinueButton onClick={() => allTens && navigate('/audio')} disabled={!allTens}>
            Continuar
          </ContinueButton>
        </ContentWrapper>
      </PageContainer>
    </AnimatedPage>
  );
};

export default PruebaAbsurda;
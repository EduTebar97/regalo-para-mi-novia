import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  max-width: 640px; 
  width: 100%; 
`;
const Title = styled.h1` 
  font-size: 2.5rem; 
  color: #db2777; 
  margin-bottom: 1rem; 
`;
const Subtitle = styled.p` 
  font-size: 1.125rem; 
  color: #374151; 
  margin-bottom: 0.5rem; 
`;
const Instructions = styled.p`
    font-size: 0.875rem; 
    background-color: #fef3c7; 
    border: 1px solid #fde68a;
    color: #92400e; 
    border-radius: 0.5rem; 
    padding: 0.75rem; 
    margin-bottom: 2rem;
`;
const QuestionRow = styled.div`
    display: flex; 
    align-items: center; 
    gap: 0.75rem;
`;
const QuestionLabel = styled.label`
    flex: 1; 
    text-align: left; 
    font-size: 1.125rem; 
    color: #374151;
`;
const Input = styled.input`
    width: 12rem; 
    padding: 0.5rem 0.75rem; 
    border: 2px solid #fbcfe8;
    border-radius: 0.5rem; 
    text-align: center;
    &:focus { 
      outline: none; 
      border-color: #f472b6; 
    }
`;
const ContinueButton = styled.button`
    width: 100%; 
    font-weight: bold; 
    padding: 0.75rem 3rem; 
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); 
    transition: all 0.3s ease;
    border: none; 
    color: white; 
    margin-top: 2rem;
    background-color: #ec4899;
    cursor: pointer;

    &:hover {
        background-color: #db2777;
        transform: scale(1.05);
    }

    @media (min-width: 768px) { width: auto; }
`;

const questions = [
  { question: "¿Ciudad de nuestro primer viaje?" },
  { question: "¿Lugar donde nos vimos por primera vez?" },
  { question: "¿Mes en que nos conocimos?" },
  { question: "¿Cual es mi color favorito?" },
  { question: "¿Dónde tuvimos nuestra primera cita?" },
];

const Pregunta = () => {
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(''));
  const navigate = useNavigate();

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <AnimatedPage>
      <PageContainer>
        <ContentWrapper>
          <Title>El Reto</Title>
          <Subtitle>Responde a estas preguntas sobre nosotros para continuar.</Subtitle>
          <Instructions>
            <strong>Instrucciones:</strong> ¡Cualquier respuesta es válida!
          </Instructions>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            {questions.map((item, index) => (
              <QuestionRow key={index}>
                <QuestionLabel>{item.question}</QuestionLabel>
                <Input
                  type="text"
                  value={answers[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </QuestionRow>
            ))}
          </div>
          <ContinueButton onClick={() => navigate('/video')}>
            Continuar
          </ContinueButton>
        </ContentWrapper>
      </PageContainer>
    </AnimatedPage>
  );
};

export default Pregunta;
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AnimatedPage from '../components/AnimatedPage';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh; display: flex; flex-direction: column; 
  justify-content: center; align-items: center; text-align: center; padding: 2rem;
`;
const ContentWrapper = styled.div` max-width: 640px; width: 100%; `;
const Title = styled.h1` font-size: 2.5rem; color: #db2777; margin-bottom: 1rem; `;
const Subtitle = styled.p` font-size: 1.125rem; color: #374151; margin-bottom: 0.5rem; `;
const Instructions = styled.p`
    font-size: 0.875rem; background-color: #fef3c7; border: 1px solid #fde68a;
    color: #92400e; border-radius: 0.5rem; padding: 0.75rem; margin-bottom: 2rem;
`;
const QuestionRow = styled.div`
    display: flex; align-items: center; gap: 0.75rem;
`;
const QuestionLabel = styled.label`
    flex: 1; text-align: left; font-size: 1.125rem; color: #374151;
`;
const Input = styled.input`
    width: 12rem; padding: 0.5rem 0.75rem; border: 2px solid #fbcfe8;
    border-radius: 0.5rem; text-align: center;
    &:focus { outline: none; border-color: #f472b6; }
`;
const StatusIcon = styled.span` width: 2rem; height: 2rem; display: flex; align-items: center; justify-content: center;`;
const ContinueButton = styled.button`
    width: 100%; font-weight: bold; padding: 0.75rem 3rem; border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); transition: all 0.3s ease;
    border: none; color: white; margin-top: 1rem;
    background-color: ${props => props.disabled ? '#f9a8d4' : '#ec4899'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled ? 0.5 : 1};
    &:hover {
        background-color: ${props => !props.disabled && '#db2777'};
        transform: ${props => !props.disabled && 'scale(1.05)'};
    }
    @media (min-width: 768px) { width: auto; }
`;

const questions = [
  { question: "Ciudad de nuestro primer viaje?", answer: "Paris" },
  { question: "Nombre de nuestra mascota imaginaria?", answer: "Fido" },
  { question: "Mes en que nos conocimos?", answer: "Julio" },
  { question: "Tu color favorito?", answer: "Azul" },
  { question: "Película que vimos en nuestra primera cita?", answer: "Titanic" }
];

const Pregunta = () => {
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(''));
  const navigate = useNavigate();

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const allCorrect = useMemo(() => {
    return questions.every((q, index) => q.answer === answers[index]);
  }, [answers]);

  return (
    <AnimatedPage>
      <PageContainer>
        <ContentWrapper>
          <Title>El Reto Final</Title>
          <Subtitle>Para desbloquear tu recompensa, responde a estas 5 preguntas sobre nosotros.</Subtitle>
          <Instructions>
            <strong>Instrucciones:</strong> La respuesta es una única palabra. Escribe siempre la primera letra en mayúscula y no uses acentos (ej: <span style={{fontFamily: 'monospace'}}>Paris</span>).
          </Instructions>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem'}}>
            {questions.map((item, index) => (
              <QuestionRow key={index}>
                <QuestionLabel>{item.question}</QuestionLabel>
                <Input
                  type="text"
                  value={answers[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                <StatusIcon>
                  {answers[index] && (answers[index] === item.answer ? <FaCheckCircle style={{color: '#22c55e', fontSize: '1.5rem'}} /> : <FaTimesCircle style={{color: '#ef4444', fontSize: '1.5rem'}} />)}
                </StatusIcon>
              </QuestionRow>
            ))}
          </div>
          <ContinueButton
            onClick={() => allCorrect && navigate('/video')}
            disabled={!allCorrect}
          >
            Continuar
          </ContinueButton>
        </ContentWrapper>
      </PageContainer>
    </AnimatedPage>
  );
};

export default Pregunta;
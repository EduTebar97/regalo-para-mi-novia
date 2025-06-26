import { useState, useRef, type FormEvent } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import AnimatedPage from '../components/AnimatedPage';

const PageContainer = styled.div`
  min-height: 100vh; display: flex; flex-direction: column; justify-content: center; 
  align-items: center; text-align: center; padding: 1rem;
`;
const ContentWrapper = styled.div` max-width: 640px; width: 100%;`;
const Title = styled.h1` font-size: 2.5rem; color: #db2777; margin-bottom: 1rem; `;
const Subtitle = styled.p` font-size: 1.25rem; color: #374151; margin-bottom: 2rem; max-width: 56ch; margin-left: auto; margin-right: auto;`;
const FormWrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    padding: 2rem; border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    max-width: 28rem; margin: 1rem auto 0;
`;
const FormTitle = styled.h3` font-size: 1.5rem; margin-bottom: 1rem;`;
const FormText = styled.p` margin-bottom: 1rem; `;
const Input = styled.input`
    width: 100%; padding: 0.75rem 1rem; border: 2px solid #fbcfe8;
    border-radius: 0.5rem; margin-bottom: 1rem; font-size: 1.125rem;
    text-align: center; box-sizing: border-box;
    &:focus { outline: none; border-color: #f472b6; }
`;
const SubmitButton = styled.button`
    width: 100%; background-color: #10b981; color: white; font-weight: bold;
    padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: none;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    transition: all 0.3s ease;
    &:hover:not(:disabled) { background-color: #059669; transform: scale(1.05); }
    &:disabled { opacity: 0.5; cursor: wait; }
`;
const ErrorMessage = styled.p`margin-top: 1rem; color: #ef4444; font-weight: 500;`;
const SuccessMessage = styled.div`
    p { margin-bottom: 1rem; }
`;

const FormularioCorreo = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [recipientEmail, setRecipientEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        
        if (!form.current || !recipientEmail.includes('@')) {
            setErrorMessage('Por favor, introduce un correo válido.');
            setStatus('error');
            return;
        }

        setStatus('sending');
        setErrorMessage('');

        const serviceID = "service_qptebgl";
        const templateID = "template_5125wif";
        const publicKey = "LDBu5EPHosHNz9IFS";
        
        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then(() => {
                setStatus('success');
            }, (error) => {
                console.error('FALLO DE EMAILJS:', error);
                setErrorMessage(`Error del servicio: ${error.text}. Revisa las claves o la configuración de EmailJS.`);
                setStatus('error');
            });
    };

    return (
        <AnimatedPage>
            <PageContainer>
                <ContentWrapper>
                    <Title>Hemos llegado al final del viaje...</Title>
                    <Subtitle>... pero es solo el comienzo de tu increíble día. ¡Feliz cumpleaños una vez más, mi vida!</Subtitle>
                    <FormWrapper>
                        {status !== 'success' ? (
                            <form ref={form} onSubmit={sendEmail}>
                                <FormTitle>Un último regalo</FormTitle>
                                <FormText>Tengo una carta para ti. Escribe tu correo aquí abajo y te la enviaré al instante.</FormText>
                                <Input 
                                    type="email" 
                                    // IMPORTANTE: Este atributo 'name' debe coincidir con la configuración de "Auto Reply" en EmailJS.
                                    name="to_email" 
                                    placeholder="Tu correo electrónico"
                                    value={recipientEmail}
                                    onChange={(e) => setRecipientEmail(e.target.value)}
                                />
                                <SubmitButton type="submit" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Enviando...' : 'Recibir mi carta'}
                                </SubmitButton>
                                {status === 'error' && <ErrorMessage>{errorMessage}</ErrorMessage>}
                            </form>
                        ) : (
                            <SuccessMessage>
                                <FormTitle style={{color: '#059669'}}>¡Carta Enviada!</FormTitle>
                                <p>Revisa la bandeja de entrada de <strong>{recipientEmail}</strong>.</p>
                                <p>Espero que te guste. ¡Te quiero!</p>
                            </SuccessMessage>
                        )}
                    </FormWrapper>
                </ContentWrapper>
            </PageContainer>
        </AnimatedPage>
    );
};

export default FormularioCorreo;
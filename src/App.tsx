import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Importa todas las páginas
import Inicio from './pages/Inicio';
import FotoRecuerdo1 from './pages/FotoRecuerdo1';
import FotoRecuerdo2 from './pages/FotoRecuerdo2';
import Pregunta from './pages/Pregunta';
import Video from './pages/Video';
import PruebaAbsurda from './pages/PruebaAbsurda';
import Audio from './pages/Audio';
import FormularioCorreo from './pages/FormularioCorreo';
import CartaFinal from './pages/CartaFinal';

function App() {
  const location = useLocation();

  return (
    // AnimatePresence permite animar las transiciones entre rutas
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Inicio />} />
        <Route path="/fotos-1" element={<FotoRecuerdo1 />} />
        <Route path="/fotos-2" element={<FotoRecuerdo2 />} />
        <Route path="/pregunta" element={<Pregunta />} />
        <Route path="/video" element={<Video />} />
        <Route path="/prueba-absurda" element={<PruebaAbsurda />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/formulario" element={<FormularioCorreo />} />
        <Route path="/carta-final" element={<CartaFinal />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
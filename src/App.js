import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Plants from './pages/Plants';
import Tips from './pages/Tips';
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

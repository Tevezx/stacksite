import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import Empresa from '../Components/Empresa/Empresa';
import Contato from '../Components/Contato/Contato';
import Equipe from '../Components/Equipe/Equipe';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/stacksite" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/equipe" element={<Equipe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
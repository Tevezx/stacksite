import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import Empresa from '../Components/Empresa/Empresa';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/stacksite" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
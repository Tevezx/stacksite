import '../../Style/Home/Home.css';
import estrela from '../../src/assets/estrela.png';
import fundo from '../../src/assets/fundo.png';
import logo_home from '../../src/assets/logo_home.png';
import estrela_pequena from '../../src/assets/estrela_pequena.png';
import { Link } from 'react-router-dom';
import degrade from '../../src/assets/degrade.png';

export default function Home() {
    return (
        <section className="home-container">
            <div className="logo_home">
                <img src={logo_home} alt="Logo Home" />
                <p className="logo-description">
                    Tal como uma pilha de elementos de programação, o Stack procura acumular soluções, conhecimentos e tecnologias para criar algo maior e mais poderoso do que a soma das suas partes individuais.
                </p>
                <Link className="saibamais" to="/empresa">Saiba Mais ➜</Link>
            </div>
            <div className="estrela">
                <img src={estrela} alt="Estrela" />
            </div>
            <div className="estrela2">
                <img src={estrela_pequena} alt="Estrela Pequena" />
            </div>
            <div className="ilustração">
                <img src={fundo} alt="Fundo" />
            </div>
            <div className="degrade">
                <img src={degrade} alt="Degradê" />
            </div>
            <div className="estrela3">
                <img src={estrela} alt="Estrela 3" />
            </div>
        </section>
    );
}

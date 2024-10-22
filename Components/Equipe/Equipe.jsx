import '../../Style/Equipe/Equipe.css';
import linha from '../../src/assets/linha.png';
import javascript from '../../src/assets/javas.png';
import node from '../../src/assets/node.png';
import css from '../../src/assets/css.png';
import sql from '../../src/assets/sql.png';
import react from '../../src/assets/react.svg';

export default function Equipe() {
    return (
        <section className="equipe-container">
            <div className="section-equipe">
                <div className="linha_equipe">
                    <img src={linha} alt="Linha decorativa no topo" />
                </div>
                <div className="text-equipe">
                    <h1>
                        <span className="text-conheca">Conheça as</span>
                        <span className="text-tecnologia"> Tecnologias</span>
                        <span className="text-usadas"> usadas</span>
                        <span className="text-nossa"> pela nossa equipe</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}

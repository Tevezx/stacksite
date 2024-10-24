import '../../Style/Solucoes/Solucoes.css';
import linha_solucoes from '../../src/assets/linha.png';
import img_telas_app from '../../src/assets/Case-study__image.png';
import vector from '../../src/assets/Vector.png';
import { Link } from 'react-router-dom';

export default function Solucoes() {
    return (
        <section className='Solucao-container'>
            <div className='linha_solucoes1'>
                <img src={linha_solucoes} alt="Linha Soluções" />
            </div>
            <span className='titulo_solucoes1'>
                O que são <span className='txtSolucao'>Soluções</span>?
            </span>
            <p className='textInicial'>
                Nossas soluções são aplicativos desenvolvidos para facilitar o dia a dia e resolver problemas comuns de forma prática e eficiente...
            </p>
            <img src={linha_solucoes} className='linha_solucoes' alt="Linha Soluções" />
            <span className='titulo2_solucoes'>
                Nossas <span className='txt_nossas_solucoes'>Soluções</span>
            </span>
            <img className='img_telas_app' src={img_telas_app} alt="Tela do Aplicativo" />
            <span className='titulo_mgp'>MGP - Meu Guia Pessoal</span>
            <p className='descricao_mgp'>Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
            <a className='btn_link' style={{ fontSize: 14 }} href="https://github.com" target="_blank" rel="noopener noreferrer">
                Visualizar mais no Git-Hub <img className='img_vector' src={vector} alt="Vector" />
            </a>
            <span className='emBreve'>- Mais soluções em breve -</span>
        </section>
    );
}

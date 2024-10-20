import '../../Style/Contato/Contato.css'
import estrela from '../../src/assets/estrela.png';

export default function Contato() {
    return (
        <section className="Contato-container">

            <div className='estrela'>
                <img src={estrela} alt="estrela"/>
            </div>
            <h2 className='titulo'>Entre em <span className='txtContato'>Contato</span>Conosco</h2>

            <p className='text'>Tem alguma sugestão, crítica construtiva, requisição ou algo assim? Entre em contato e nos informe sobre!</p>
            

            <button className='button'>Git-Hub</button>            
            <button className='button'>Linkedin</button>            
            <button className='button'>Facebook</button>            
            <button className='button'>Instagram</button>            
            <button className='button'>email</button>            
            
            

        </section>
    );
}

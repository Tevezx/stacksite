//*import '../../Style/Contato/Contato.css';
import estrela from '../../src/assets/estrela.png';
import git from '../../src/assests_contato/github.png';
import facebook from '../../src/assests_contato/facebook.png';
import instagram from '../../src/assests_contato/insta.png';
import linkedin from '../../src/assests_contato/linkedin.png';
import email from '../../src/assests_contato/mail.png';

export default function Contato() {
    return (
        <section className="Contato-container">

            <div className='estrela'>
                <img src={estrela} alt="estrela"/>
            </div>
            <span className='titulo'>Entre em <span className='txtContato'>Contato</span><span className='titulo2'> Conosco</span></span>

            <p className='text'>Tem alguma sugestão, crítica construtiva, requisição ou algo assim? Entre em contato e nos informe sobre!</p>
            

            <button className='button' style={{backgroundColor: '#D115D4'}}>
                <img src={git} alt='img_git' className='img_git'/>
                Git-Hub
            </button>            
            <button className='button' style={{backgroundColor: '#B719DA'}}>
                <img src={linkedin} alt='img_linkedin' className='img_linkedin'/>
                Linkedin
            </button>            
            <button className='button' style={{backgroundColor: '#9123D8'}}>
                <img src={facebook} alt='img_facebook' className='img_facebook'/>
                Facebook
            </button>            
             <button className='button' style={{backgroundColor: '#7B2AD8'}}>
                <img src={instagram} alt='img_instagram' className='img_instagram'/>
                Instagram
            </button>            
            <button className='button' style={{backgroundColor: '#5122BC'}}>
                <img src={email} alt='img_email' className='img_email'/>
                email
            </button>            
        </section>
    );
}
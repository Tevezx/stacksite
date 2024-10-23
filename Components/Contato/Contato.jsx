import '../../Style/Contato/Contato.css';
import estrela_contact from '../../src/assets/estrela.png';
import estrela_contact2 from '../../src/assets/estrela_pequena.png';
import git from '../../src/assets/github_contact.png';
import facebook from '../../src/assets/facebook_contact.png';
import instagram from '../../src/assets/instagram_contact.png';
import linkedin from '../../src/assets/linkedin_contact.png';
import email from '../../src/assets/mail_contact.png';
import ilustracao from '../../src/assets/ilustracao_contact.png';
import ilustracao_transparente from '../../src/assets/ilustracao_contact_transparente.png'
import line_decoration from '../../src/assets/linha.png'    

export default function Contato() {
    return (
        
        <section className="Contato-container">
            <div className='estrela_contact'>
                <img src={estrela_contact} alt="estrela"/>
            </div>
            <div className='line_decoration'>
                <img src={line_decoration} alt='linha decoracao'></img>
            </div>
            <span className='titulo'>Entre em <span className='txtContato'>Contato</span><span className='titulo2'> Conosco</span></span>

            <p className='text'>Tem alguma sugestão, crítica construtiva, requisição ou algo assim? Entre em contato e nos informe sobre!</p>


            <a className='btn_link' href='https://github.com/StackCorp' target="_blank">
                <button className='button' style={{backgroundColor: '#D115D4'}}>
                    <img src={git} alt='img_git' className='img_git'/>
                    Git-Hub
                </button>            
            </a>

            <a className='btn_link' href='https://www.linkedin.com/in/stack-inova%C3%A7%C3%A3o-009557311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank">
                <button className='button' style={{backgroundColor: '#B719DA'}}>
                    <img src={linkedin} alt='img_linkedin' className='img_linkedin'/>
                    Linkedin
                </button>            
            </a>

            <a className='btn_link' target="_blank" href='https://web.facebook.com/people/Stack-Corp/pfbid02NgtgG1J6f8F7qGcKFoirep6gQqDzQoBdvuU29qz4Nnc14W9xEaTXBCJMT4iWGHPBl/?sfnsn=wiwspwa&mibextid=RUbZ1f'>
                <button className='button' style={{backgroundColor: '#9123D8'}}>
                    <img src={facebook} alt='img_facebook' className='img_facebook'/>
                    Facebook
                </button>
            </a>

            <a className='btn_link' href='https://www.instagram.com/stack_corp' target="_blank">            
                <button className='button' style={{backgroundColor: '#7B2AD8'}}>
                    <img src={instagram} alt='img_instagram' className='img_instagram'/>
                    Instagram
                </button>   
            </a>

            <a className='btn_link' href='mailto:stackinovacao@gmail.com' target="_blank">         
                <button className='button' style={{backgroundColor: '#5122BC'}}>
                    <img src={email} alt='img_email' className='img_email'/>
                    stackinovacao@gmail.com
                </button>
            </a>            
            <div className='estrela_contact2'>
                <img src={estrela_contact2} alt='estrela2'/>

            </div>

            <div className='img_ilustracao'>
                <img src={ilustracao}></img>
            </div>
            <div className='img_ilustracao_transparente'>
                <img src={ilustracao_transparente}></img>
            </div>
        </section>
    );
}
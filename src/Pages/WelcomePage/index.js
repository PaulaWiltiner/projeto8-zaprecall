
import logo from '../../assets/images/logo.png';
import './WelcomePage.css';
import { Link } from "react-router-dom";

export default function WelcomePage({ setInit }) {

  return(
    <div className='conteudo_welcome'>
      <img src={logo} alt='um raio amarelo com fundo vermelho'/>
      <h1 >ZapRecall</h1>
      <Link to='/deckpage' ><button >Iniciar Recall!</button></Link>
    </div>
  )
} 

import logo from '../../assets/images/logo.png'
import './WelcomePage.css'

export default function WelcomePage() {

  return(
    <>
      <div className='conteudo_welcome'>
        <img src={logo} alt='um raio amarelo com fundo vermelho'/>
        <h1 >ZapRecall</h1>
        <button>Iniciar Recall!</button>
      </div>
    </>
  )
} 
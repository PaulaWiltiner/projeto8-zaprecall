import './FlashCards.css'
import React from 'react';
import turn from '../../assets/images/setinha.png';



export default function FlashCards() {

  const [init, setInit] = React.useState(false);
  const [newclass, setClass] = React.useState('card flip');

  return(
    <div className='flashcard'>
    
        { !init ?
          <button onClick={() => setInit(true)} >
            Pergunta 1
            <ion-icon name="play-outline"></ion-icon>
          </button>
          : 
            <div className={newclass} >
              <div className='front face'>
                <p>O que é JSX ?</p>
                <img src={turn} alt='seta para virar carta'  onClick={()=> setClass('card')} />
              </div>
              <div className='back face'>
                <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                <div className='button_list'>
                  <button className='not_remenber'>Não lembrei</button>
                  <button>Quase não lembrei</button>
                  <button>Zap!</button>
                </div>
              </div>
          </div>
        }
        
    
      <button >
        Pergunta 2
        <ion-icon name="play-outline"></ion-icon>
      </button>
      <button >
        Pergunta 3
        <ion-icon name="play-outline"></ion-icon>
      </button>
      <button >
        Pergunta 4
        <ion-icon name="play-outline"></ion-icon>
      </button>
      <button >
        Pergunta 5
        <ion-icon name="play-outline"></ion-icon>
      </button>
      <button >
        Pergunta 6
        <ion-icon name="play-outline"></ion-icon>
      </button>
      <button >
        Pergunta 7
        <ion-icon name="play-outline"></ion-icon>
      </button>
      <button >
        Pergunta 8
        <ion-icon name="play-outline"></ion-icon>
      </button>
    </div>

  )
} 
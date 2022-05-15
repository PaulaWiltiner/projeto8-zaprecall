import FlashCards from '../../components/FlashCards'
import Top from '../../components/Top'
import Footer from '../../components/Footer'
import './DeckPage.css'
import React from 'react';
import emoji_party from '../../assets/images/party.png'
import emoji_sad from '../../assets/images/sad.png'

export default function DeckPage() {

  const [value, setValue] = React.useState(0);
  const [listaIcones, setListaIcones]=React.useState([]);
  const [ind, setRemember]=React.useState(0);
  const listaEnd=[{titulo_text:'Parabéns!', emoji:emoji_party,text:'Você não esqueceu de nenhum flashcard!'},{titulo_text:'Putz...', emoji:emoji_sad,text:'Ainda faltam alguns... Mas não desanime!'}]
  

  return(
      <div className='deck'>
        <Top />
        <FlashCards val={value} function_one={setValue} listaIcones={listaIcones} function_two={setListaIcones} function_three={setRemember}/>
        <Footer>
          {value!==8 ? '': 
           <div className='end'>
             <div><img src={listaEnd[ind].emoji} alt='' /> <h2>{listaEnd[ind].titulo_text}!</h2></div>
             <p>{listaEnd[ind].text}</p>
            </div>
          }

          <p> {value} /8 CONCLUÍDOS</p>
          { value===0 ? '':
            <div className='icones'>
              { 
                listaIcones.map( (elem,index) =>
                <div key={index} className={elem.classIcon}>
                  <ion-icon  name={elem.nomeIcon}></ion-icon>
                </div> )
              }
            </div>
          }
        </Footer>
      </div>
  )
} 
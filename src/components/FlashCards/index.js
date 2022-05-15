import './FlashCards.css'
import React from 'react';
import turn from '../../assets/images/setinha.png';

let listaCards=[{question:'O que é JSX?', answer:'Uma extensão de linguagem do JavaScript'},
  {question:'O React é __ ' ,answer:'uma biblioteca JavaScript para construção de interfaces'},
  {question:'Componentes devem iniciar com __ ' ,answer:'letra maiúscula'},
  {question:'Podemos colocar __ dentro do JSX ' ,answer:'expressões'},
  {question:'O ReactDOM nos ajuda __ ' ,answer:'interagindo com a DOM para colocar componentes React na mesma'},
  {question:'Usamos o npm para __ ' ,answer:'gerenciar os pacotes necessários e suas dependências'},
  {question:'Usamos props para __ ' ,answer:'passar diferentes informações para componentes'} ,
  {question:'Usamos estado (state) para __ ', answer:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}]
  
 

function shuffle() { 
  return Math.random() - 0.5; 
}

listaCards.sort(shuffle);



function Card(props) {

  const [init, setInit] = React.useState(0);
  const [newclass, setClass] = React.useState('card flip');
  const [colorName, setClassQuestion] = React.useState('styleblack');
  const [iconame, setIcon] = React.useState("play-outline");
  const [statusbutton, setButton] = React.useState(false);
  const [statusButtonSecond, setButtonSecond] = React.useState(true);


  function mandaLista(color,name){
    let elemento={classIcon:color,nomeIcon:name};
    props.listaIcon.push(elemento);
    props.setIconesLista(props.listaIcon);
  }

  return(
    <div>
        { (init!==props.numberKey ) ?
          <button className={'question '+ colorName}  onClick={() => [setInit(props.numberKey)]} disabled={statusbutton} >
            Pergunta {props.numberKey}
            <ion-icon  name={iconame}></ion-icon>
          </button>
          : 
          <div className={newclass} >
            <div className='front face'>
              <p>{props.question}</p>
              <img src={turn} alt='seta para virar carta'  onClick={()=> [setClass('card'),setButtonSecond(false)]} />
            </div>
            <div className='back face'>
              <p>{props.answer}</p>
              <div className='button_list'>
                <button className='not_remember'onClick={()=> 
                  [setClassQuestion('stylered'),setInit('0'),setIcon('close-circle'),setButton(true),props.setValue(props.value+1),mandaLista('stylered','close-circle'),props.setRemember(1)]} disabled={statusButtonSecond} > 
                  Não lembrei 
                </button>
                <button className='almost_remember' onClick={()=> 
                  [setClassQuestion('styleorange'),setInit('0'),setIcon('help-circle'), setButton(true),props.setValue(props.value+1),mandaLista('styleorange','help-circle')]} disabled={statusButtonSecond} > 
                  Quase não lembrei 
                </button>
                <button className='zap'onClick={()=> 
                  [setClassQuestion('stylegreen'),setInit('0'),setIcon('checkmark-circle'),setButton(true),props.setValue(props.value+1),mandaLista('stylegreen','checkmark-circle')]} disabled={statusButtonSecond} > 
                  Zap! 
                </button>
              </div>
            </div>
          </div>
        }
      </div>
  )
}



export default function FlashCards(props) {

  const {val:value , function_one:setValue, listaIcones:listaIcon, function_two:setIconesLista, function_three:setRemember}=props;

  return(
    <div className='flashcard'>
      
      { 
      listaCards.map((elem,index) => <Card key={index+1} setRemember={setRemember} listaIcon={listaIcon} setIconesLista={setIconesLista} value={value} setValue={setValue} numberKey={index+1} question={elem.question} answer={elem.answer} />) 
      }

    </div> 

  )
} 
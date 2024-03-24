import {useState } from 'react'
import play from "./Img/play.svg"
import stop from "./Img/stop.svg"
import reset from "./Img/reset.svg"
import "./app.css";

let  segundo = 0;
let  minuto = 0;
let  hora = 0;
let intervalo;


function App() {
  
  
  const [segundos, setsegundos] = useState("00")
  const [minutos , setMinutos]  = useState("00")  
  const [horas, setHoras]  = useState("00")  
  const [btn , setBtn] = useState(null)

  
  function Play() {
     setBtn(true)
    intervalo = true;
    if(intervalo ==  null) return;

    intervalo =  setInterval(function (params) {
      setsegundos(segundo++)

      minuto >= 60 ? setHoras(hora++) : ""
      minuto == 60 ? minuto = 0  : ""
      hora < 10 ?  setHoras(`0${hora}`) : setHoras(hora)
      segundo >= 60  ?  setMinutos(minuto++) : ""
      minuto < 10 ?  setMinutos(`0${minuto}`) : setMinutos(minuto)
      segundo < 10 ?  setsegundos(`0${segundo}`) : setsegundos(segundo)
      segundo == 60 ? segundo = 0  : ""
    
  },1000);
   
}



  function pause() {
    setBtn(false) 
    clearInterval(intervalo)
    intervalo = null;
 
  }

  function Reset(params) {
    setBtn(null) 
   clearTimeout(intervalo);
    setsegundos("00")
    setMinutos("00")
    setHoras("00")
    segundo = 0;
    minuto = 0;
    hora = 0;
  }
    

 
  
  return (
    <div className='container-one'> 
         <h1>Cronômetro ReactJs</h1>
      <div className='container-numero'>
        <p>{horas}:</p>
        <p>{minutos}:</p>
        <p>{segundos}</p>
        
        

      </div>
         
        <div className='botoes'>

          {btn == null  &&(
            <img className='play' src={play} onClick={Play} alt="" />            
            )}
            
          {btn !== null && btn === false  &&(
            <img className='play' src={play} onClick={Play} alt="" />            
            )}
            
            
            {btn !== null  && (
              <img src={stop} onClick={pause} /> 
              )}

            {btn !== null && (
              <img src={reset} onClick={Reset} /> 
              )}
              </div>

        

   </div>
  )
}

export default App

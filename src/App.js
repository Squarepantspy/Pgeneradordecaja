import React, {useState} from 'react';
import './App.css';
import Box from './components/Box';
import Form from './components/Form';

function App() {
  const [currentColors,setCurrentColor]=useState([]); //el estado inicial es un array vacio
  const [currentTams,setCurrentTam]=useState([]);

  const nuevoColor= (color)=>{ //se eleva el estado con esta funcion 
    setCurrentColor(arrayviejo => [...arrayviejo, color]);   //https://stackoverflow.com/questions/54676966/push-method-in-react-hooks-usestate tambien se puede solo con [...arrayviejo,color] pero solo para eventos como onclick, submit no para mousemove
  }
  const nuevoTamanho=(tam)=>{
    setCurrentTam(viejoarray=>[...viejoarray,tam]);
  }
  return (
    <div className='container'>
      <Form onNewColor={nuevoColor} onNewTamanho={nuevoTamanho}/>
      <div className='contenedorcolores'>
      {currentColors.map((valor,index)=> <Box key={index} colorcito={valor} tam={currentTams[index]}/>)}
      </div>
    </div>
  );
}

export default App;

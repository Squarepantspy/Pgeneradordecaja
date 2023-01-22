import React, {useState} from 'react';
import styles from "../styles/Form.module.css"

const Form = (props) => {

    const [color,setColor]=useState('');
    const [tamano,setTamano]=useState('');

    const createbox=(e)=>{
        e.preventDefault();
        props.onNewColor(color); // aqui podemos validar el color con https://www.npmjs.com/package/validate-color
        props.onNewTamanho(tamano);
    }
  return (
    <form className={styles.formu}onSubmit={createbox}>
        <label className='form-label'>Color</label>
        <input className='form-control' onChange={e=>setColor(e.target.value)} value={color}/>
        <label className='form-label'>Dimension de lado por default: 200px , favor especificar px,rem,%,etc</label>
        <input className='form-control' onChange={e=>setTamano(e.target.value)} value={tamano}/>
        <input type="submit" value= "Añadir"/>
    </form>
  )
}

export default Form
import React from 'react'
import { useState } from 'react'
import '../../styles/App.css'
import { BotonSemaforo } from './BotonSemaforo'

export const Semaforo = () => {
    const [colorActivo, setColorActivo] = useState([])

    const activarCambioColor =(color) =>{
        console.log('el color es:', color )
        //mostrar en consola el nuevo color

    }


return (
    <div className='semaforo-container'>
        <BotonSemaforo color = {'cruzar'} cambiarColor= {activarCambioColor}/>
        <BotonSemaforo color = {'atencion'}/>
        <BotonSemaforo color = {'stop'}/>
    </div>
)
}

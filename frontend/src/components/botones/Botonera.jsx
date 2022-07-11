import React from 'react'
import { useState } from 'react'

export const Botonera = ({color, setColor}) => {



return (
    <div>
        <button onClick={() =>setColor('rojo')}>cambiar a rojo</button>
        <button onClick={() =>setColor('verde')}>cambiar a verde</button>
        <button onClick={() =>setColor('violeta')}>cambiar a violeta</button>
        <button onClick={() =>setColor('azul')}>cambiar a azul</button>
        <button onClick={() =>setColor('gris')}>cambiar a gris</button>
        <span>colores: {color}</span>
    </div>
)
}

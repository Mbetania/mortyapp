import React from 'react'

export const BotonSemaforo = ({color, cambiarColor}) => {

return (
    <div className={`color-cambio color-${color}`} onClick={() =>cambiarColor(color)}></div>
)
}

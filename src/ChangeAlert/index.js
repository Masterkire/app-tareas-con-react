import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

function ChangeAlert({sincronize}) {
    const { show, toggleShow } = useStorageListener(sincronize);

    if (show) {
        return (
            <div className='contenedor-alert'>
                <p className='alert-info-update'>Hubo Cambios</p>
                <button
                    className='btn-alert-update-info'
                    onClick={() => toggleShow(false)}
                >
                    Volver a cargar la información
                </button>
            </div>
        );
    } else {
        return null;
    }
    
}


 
export { ChangeAlert };
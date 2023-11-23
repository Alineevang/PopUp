"use client"
import React from 'react';
import { useState } from 'react';

function Page() {
    let padraoContador = 0;
    const [contador, setContador] = useState (padraoContador);

    const adicionar = () => {
        setContador (contador + 1);
    }

    const remover = () => {
        setContador (contador>0 ? contador -1: padraoContador); 
    }

    const reset = () => {
       setContador (padraoContador);
    }
    
    return (
        <div>
            <button onClick={adicionar}>Adicionar</button>
            <button onClick={remover}>Remover</button>
            <button onClick={reset}>Resetar</button>
            <p>contagem: {contador}</p>

        </div>
    )
}
export default Page;

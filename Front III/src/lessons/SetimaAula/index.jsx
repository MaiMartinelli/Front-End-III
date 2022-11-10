import { useState } from 'react'
import './styles.scss'

export function SetimaAula() {

    // let contador = 0

    const [contador, setContador] = useState(0)

    // const [temaEscuro, setTemaEscuro] = useState(false)

    function somarNumero() {
        setContador(contador + 1)
    }

    // function mudarTema() {

    //     setTemaEscuro(!temaEscuro)

    // }

    return (
        // <main className={`setima-aula-main ${temaEscuro ? 'dark-theme' : ''}`}>
        <main className='setima-aula-main'>

            <h1>Contador</h1>

            {/* <button onClick={() => mudarTema()}>Mudar tema</button> */}
            <button onClick={somarNumero}>Adicionar</button>
            <span>Número atual: {contador}</span>

        </main>
    )
}
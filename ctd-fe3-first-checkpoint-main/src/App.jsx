import { useState } from "react"
import {Card} from './Card'
import './styles.scss'
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
  function addCor(nome) {
      let nomeSemEspaco = nome.trim()
      return nomeSemEspaco
  }

  function validaHexa(valor) {
    const valoresEsperados = /^#(?:[0-9a-f]{3}){1,2}$/i
    return valoresEsperados.test(valor)
  }

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
    const [nomeCor, setNomeCor] = useState('')
    const [valorCor, setValorCor] = useState('')
    const [erroForm, setErroForm] = useState(false)
    const [cores, setCores] = useState([

      {
        nomeCor: 'Rosa',
        valorCor: '#ffcbdb'
      },

      {
        nomeCor: 'Verde',
        valorCor: '#008000'
      },

      {
        nomeCor: 'Cinza',
        valorCor: '#808080'
      },

    ])


    function adicionarCor(event) {
      
      event.preventDefault()

      const novaCor = {nomeCor: nomeCor, valorCor: valorCor }
    

    if(addCor(nomeCor) && validaHexa(valorCor)) {
      setErroForm(false)

      setCores([...cores, novaCor])
      setNomeCor('')
      setValorCor('')
    
    } else {

      setErroForm(true)

    }
  }




  return (

    <main className="checkpoint">

      <div className="tittle-wrapper">
          <h1>Adicionar nova cor</h1>
      </div>
      <form className={`erroForm ? 'erro-form' : ''`} onSubmit={event=>adicionarCor(event)}>
       <div className="inputs">
        <div>
          <label htmlFor="nomeCor">Nome</label>
          <input type="text" nome='nomeCor' onChange={event=> setNomeCor(event.target.value)} />
        </div>
        <div>
          <label htmlFor="valorCor">Cor</label>
          <input type="color" nome="valorCor" placeholder="Insira sua cor no formato hexadecimal" value={valorCor} onChange={event => setValorCor(event.target.value)}/>
        </div>
       </div>

        <button type="submit">Cadastrar cor</button>

      </form>
    
      {
        erroForm ? (
          <span>Por favor, verifique os dados inseridos</span>
        ) : null
      }

      <h1>Cores Favoritas</h1>

      <section className="listaDeCores">
        {
          cores.map(
            cor => {
              return (
                <Card corInfo={cor} />
              )
            }
          )
        }
      </section>

    </main>
  )
}

export default App
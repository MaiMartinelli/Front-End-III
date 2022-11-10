import './styles.scss'

//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  
  return (
    <div className="card">
      <h1>{props.cor.nomeCor}</h1>
      <p>{props.cor.valorCor}</p>
    </div>
  )
}
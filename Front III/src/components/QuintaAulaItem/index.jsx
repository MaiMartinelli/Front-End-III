import './styles.scss'

export function QuintaAulaItem(props) {

    return (
        // <h1>{props.title}</h1>

        <li key={props.idKey.index}>
        <h1>{props.item.title}</h1>
        <p>{props.item.text}</p>
        <img src={props.item.image} />
    </li>
    )
}
import './styles.scss'
import gifgato from './../../assets/image/gifgato.gif' 
import gato from './../../assets/image/gato.gif'

export function TerceiraAula() {

    const components = [
        {name: 'Component Card 1', description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Laudantium debitis maxime harum dolore dolores expedita nostrum 
        atque reprehenderit accusamus? Quia rerum ab repudiandae hic nulla maxime minima 
        perferendis sit facere!`, image: 'https://i.gifer.com/y2.gif'},

        {name: 'Component Card 2', description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Laudantium debitis maxime harum dolore dolores expedita nostrum 
        atque reprehenderit accusamus? Quia rerum ab repudiandae hic nulla maxime minima 
        perferendis sit facere!`, image: gifgato},

        {name: 'Component Card 3', description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Laudantium debitis maxime harum dolore dolores expedita nostrum 
        atque reprehenderit accusamus? Quia rerum ab repudiandae hic nulla maxime minima 
        perferendis sit facere!`, image: gato}
    ]

    return (
        <div className='terceira-aula-div'>
           
           <h1>Lista de componentes encontrados no sistema</h1>
            <ul>
                {
                    components.map(component => (
                        <li>
                             <h1>{component.name}</h1>
                             <p>{component.description}</p>
                             <img src={component.image}/>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}
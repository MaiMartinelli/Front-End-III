import { QuintaAulaItem } from '../../components/QuintaAulaItem'
import './styles.scss'

export function QuintaAula() {
        const componentFinded = [

            {
                title: 'Video component',
                image: 'https://mlabs-s3-blog.s3.amazonaws.com/wp-content/uploads/2020/05/14164641/tamanho-da-capa-do-youtube-header.jpg',
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quam 
                commodi laudantium minima nostrum quae quaerat consequatur tempora adipisci illo 
                dolor optio sit, deserunt blanditiis expedita minus? Fugiat, dignissimos ut!`
            },
    
            {
                title: 'Input component',
                image: 'https://www.alura.com.br/artigos/assets/recebendo-dados-usuario-na-web-com-inputs/imagem1.png',
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quam 
                commodi laudantium minima nostrum quae quaerat consequatur tempora adipisci illo 
                dolor optio sit, deserunt blanditiis expedita minus? Fugiat, dignissimos ut!`
            },
    
            {
                title: 'Button component',
                image: 'https://elfsight.com/wp-content/uploads/2021/05/button-widget-hero-image.png',
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quam 
                commodi laudantium minima nostrum quae quaerat consequatur tempora adipisci illo 
                dolor optio sit, deserunt blanditiis expedita minus? Fugiat, dignissimos ut!`
            }
        ]
    
        return (
            <div className="quarta-aula-div">

                <h1 className='name-title'>Componentes identificados</h1>
{/* 
                <QuintaAulaItem title='Primeiro componente'/>
                <QuintaAulaItem title='Primeiro componente 2'/>
                <QuintaAulaItem title='Primeiro componente 3'/> */}

                 <ul className='components-finded'>
    
                { 
                   
                    componentFinded.map(
                        (componentFinded, index) => {
                        return (
                         <QuintaAulaItem item={componentFinded} idKey={index}/>
                    )
                })
                   
                }
    
                 </ul>
            </div>
           
        )
}
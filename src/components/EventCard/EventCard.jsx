import './styles.css'
import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'

/* em um componente dinamico recebemos os valores em um parametro 
de objeto cujo nome por convenção se chama props. 
Neste caso, nomeamos o objeto de evento e não da nada {}
*/

const Card = styled.div`
    width: 25rem;
    /* height sumiu */
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 0 0 5px gray;
    background-color: ${({ dataJaPassou }) => dataJaPassou ? "red" : "white"};
    transition: 0.2s;

    ${
        ({ dataJaPassou }) => dataJaPassou && css`
        color: white;
        `  
    }

    &:hover {
        transform: scale(1.04);
    }

    img {
        width: 100%;
        height: 50%; /* de 60% para 50% */
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`

export function EventCard(props) {
    const navigate = useNavigate()
    /* retorna uma função pra mudar de página */

    function navegarParaDetalhes() {
        navigate(`/eventos/${props.id}`, {
            state: {
                nome: props.nome,
                data: props.data,
                img: props.img,
                descricao: props.descricao,
                id: props.id
            }
        })
    }

    const dataJaPassou = new Date(props.data).getTime() < new Date().getTime()
    /* const dataJaPassou = true */ 

    return (
        <Card dataJaPassou={dataJaPassou}>
            {
                props.img && <img src={props.img} /> 
            }

            <div> {/* criei uma div */}
                <h2>{props.nome}</h2>
                <p>{props.descricao ? props.descricao : "Sem descrição"}</p>
                <p>{props.data ? props.data : "Sem data Definida"}</p>

                <button onClick={() => props.deletarEvento(props.id)} >Deletar</button>
                <button onClick={navegarParaDetalhes} >Ver detalhes</button>
            </div>
        </Card>
    )
}
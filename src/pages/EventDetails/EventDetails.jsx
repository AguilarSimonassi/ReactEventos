import { useEffect } from 'react'
import './EventDetails.css'
import { useLocation, useNavigate } from 'react-router-dom'

export function EventDetailsPage() {
    const { state } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if(!state) {
            navigate('/')
        }
        /* useEffect aqui precisa testar se o state ta null, senão ele 
        volta para a pagina inicial. Só que ele tenta rodar ao mesmo tempo
        que tenta retornar o <h1> utilizando o state. E se o state for null
        este retorno vai quebrar antes mesmo do useEffect conseguir testar o if */

        /* Neste caso, eu tenho uma segunda verificação fora para caso o state for null,
        ele retorne vazio ao inves de tentar retornar o <h1>, dando tempo do useEffect 
        fazer o processo dele */

    }, [])


    if(!state) {
        return <></>
    }

    return <h1>{state.nome}</h1>
}
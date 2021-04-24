import { DivPrincipal, Header } from "./styles"
import {useParams} from 'react-router-dom'
import { useContext, useEffect } from "react"
import GlobalStateContext from "../../globalState/globalStateContext"
import LanguageIcon from '@material-ui/icons/Language';

const PaginaDetalhes = () => {
    const {requests, states} = useContext(GlobalStateContext)

    const param = useParams()

    useEffect(() => {
        requests.detalhesPais(param.nomePais)
    }, [])

    return (
        <div>
            {states.detalhePais.map((pais) => {
                return (
                <DivPrincipal>    
                    <Header key={pais.name}><h3>{pais.translation.br}</h3></Header>
                    <img alt={pais.name} src={pais.flag}></img>
                    <div><LanguageIcon/>{pais.languages.map((idioma) => { return <p>{idioma.name}</p> })}</div>
                </DivPrincipal>
                )
            })}
        </div>
    )
}

export default PaginaDetalhes
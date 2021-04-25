import { DivIndiceDetalhe, DivPrincipal, Header } from "./styles"
import {useHistory, useParams} from 'react-router-dom'
import { useContext, useEffect } from "react"
import GlobalStateContext from "../../globalState/globalStateContext"
import LanguageIcon from '@material-ui/icons/Language';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TranslateIcon from '@material-ui/icons/Translate';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { voltarParaInicio } from "../../routes/coordinator/coordinator";

const PaginaDetalhes = () => {
    const {requests, states} = useContext(GlobalStateContext)
    
    const history = useHistory()

    const param = useParams()

    useEffect(() => {
        requests.detalhesPais(param.nomePais)
    }, [])

    return (
        <div>
            {states.detalhePais.map((pais) => {
                return (
                <DivPrincipal>    
                    <Header key={pais.name}>
                        <div><ArrowBackIcon onClick={() => voltarParaInicio(history)}/></div>
                        <h3>{pais.translations.br}</h3>
                    </Header>
                    <img alt={pais.name} src={pais.flag}></img>
                    <DivIndiceDetalhe>
                        <HomeIcon/><h3>Capital: </h3>
                        <p>{pais.capital}</p>
                    </DivIndiceDetalhe>
                    <DivIndiceDetalhe>
                        <LanguageIcon/><h3>Languages: </h3>
                        {pais.languages.map((idioma) => { return <p>{idioma.name}</p>})}
                    </DivIndiceDetalhe>
                    <DivIndiceDetalhe>
                        <PersonIcon/><h3>Population: </h3>
                        <p>{(pais.population).toLocaleString('pt-br')}</p>
                    </DivIndiceDetalhe>
                    <DivIndiceDetalhe>
                        <AccessTimeIcon/><h3>Time zone: </h3>
                        <p>{pais.timezones}</p>
                    </DivIndiceDetalhe>
                    <DivIndiceDetalhe>
                        <TranslateIcon/><h3>Name translations: </h3>
                        <p>{pais.translations.br}</p>
                        <p>{pais.translations.it}</p>
                        <p>{pais.translations.es}</p>
                        <p>{pais.translations.ja}</p>
                        <p>{pais.translations.fr}</p>
                        <p>{pais.translations.de}</p>
                        <p>{pais.translations.hr}</p>
                        <p>{pais.translations.nl}</p>
                    </DivIndiceDetalhe>
                </DivPrincipal>
                )
            })}
        </div>
    )
}

export default PaginaDetalhes
import { useContext, useEffect } from "react"
import GlobalStateContext from "../../globalState/globalStateContext"
import { DivCards, DivFixada, DivPrincipal, DivSelectH3, HeaderInicio } from "./styles"
import CardPais from '../../components/cardPais/cardPais'
import useValorSelect from "../../customHooks/useSelect"
import useValorInput from "../../customHooks/useInput"

const PaginaInicial = () => {

    const [valorSelect, onChangeSelect] = useValorSelect()
    const [valorInput, onChangeInput] = useValorInput()

    const {requests, states} = useContext(GlobalStateContext)

    useEffect(() => {
        if(valorSelect === "" && valorInput === ""){
            requests.todosOsPaises()
        }else if(valorSelect !== "" && valorInput === ""){
            requests.filtroRegiao(valorSelect)
        }else if(valorInput !== "" && valorSelect === ""){
            requests.detalhesPais(valorInput)
        }else{
            requests.todosOsPaises()
        }
    }, [valorSelect, valorInput])

    return (
        <DivPrincipal>
            <HeaderInicio key="header">
                <DivFixada>
                    <DivSelectH3>
                    <h3>Search by continent: </h3>
                        <select value={valorSelect} onChange={onChangeSelect}>
                            <option value="" selected>Choose the continent</option>
                            <option value="asia">Asia</option>
                            <option value="americas">América</option>
                            <option value="africa">África</option>
                            <option value="europe">Europa</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </DivSelectH3>
                    <DivSelectH3>
                        <h3>Search by name: </h3>
                        <input value={valorInput} onChange={onChangeInput} placeholder="Enter the name of the country:"></input>
                    </DivSelectH3>
                </DivFixada>
            </HeaderInicio>
            <DivCards>
            {states.paises.map((pais) => {
                return (
                    <CardPais
                        key={pais.name}
                        nomePais={pais.name}
                        nomeNativo={pais.nativeName}
                        bandeiraPais={pais.flag}
                        regiaoPais={pais.region}
                        capitalPais={pais.capital}
                        populacaoPais={pais.population}
                    />
                )
            })}
            </DivCards>
        </DivPrincipal>
    )
}

export default PaginaInicial
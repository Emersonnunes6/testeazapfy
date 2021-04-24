import React, { useState } from 'react'
import axios from 'axios'
import GlobalStateContext from './globalStateContext'

const GlobalState = (props) => {

    const [paises, setPaises] = useState([])
    const [detalhePais, setDetalhePais] = useState([])

    const todosOsPaises = () => {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then((res) => {
            console.log(res.data)
            setPaises(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const detalhesPais = (pais) => {
        axios.get(`https://restcountries.eu/rest/v2/name/${pais}`)
        .then((res) => {
            setPaises(res.data)
            setDetalhePais(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const filtroRegiao = (regiao) => {
        axios.get(`https://restcountries.eu/rest/v2/region/${regiao}`)
        .then((res) => {
            setPaises(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const requests = { todosOsPaises, detalhesPais, filtroRegiao }
    const states = {paises, detalhePais}
    const setters = {setPaises, setDetalhePais}

    const dados = { requests, states, setters }
    
    return(
        <GlobalStateContext.Provider value={dados}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
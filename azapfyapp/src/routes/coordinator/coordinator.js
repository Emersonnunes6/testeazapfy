export const irParaDetalhes = (history, nomePais) => {
    history.push(`/${nomePais}`)
}

export const voltarParaInicio = (history) => {
    history.goBack()
}
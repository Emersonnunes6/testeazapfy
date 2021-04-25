import styled from 'styled-components'

export const DivPrincipal = styled.div`
    height: 100%;
    width: 100vw;
    margin: 0px;
    padding: 0px;
    background-color: #DCDCDC;

@media screen and (min-width: 800px){
    display: grid;
    grid-template-columns: auto auto;
header{
    height: 100%;
    width: 20vw;
}}
`

export const DivCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 100vw;
    padding: 0px;

@media screen and (min-width: 800px){
    height: 100%;
    width: 80vw;
    display: grid;
    justify-content: space-around;
    grid-template-columns: auto auto;
}
`

export const HeaderInicio = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-around;
    margin: 0px;
    padding: 0px;
    height: 100px;
    width: 100vw;
    background-color: gray;

@media screen and (min-width: 800px){
    margin-top: 5vh;
}

select{
    margin: 0;
    width: 150px;
    height: 40px;
}
h3{
    margin-top: 0px;
    margin: 5px;
    color: black;
}
input{
    width: 140px;
    height: 40px;
}

@media screen and (min-width: 800px){
    display: flex;
    flex-direction: column;
    justify-content: initial;
    align-items: center;
    margin-top: 0px;
    margin: 5px;
    height: 70px;
}
`

export const DivFixada = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;

@media screen and (min-width: 800px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 30vh;
    width: 100vw;
}
`

export const DivSelectH3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin: 5px;
    height: 100px;
    width: 100vw;

@media screen and (min-width: 800px){
    height: 20vh;
    width: 20vw;
}
`
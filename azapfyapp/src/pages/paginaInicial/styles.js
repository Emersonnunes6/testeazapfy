import styled from 'styled-components'

export const DivPrincipal = styled.div`
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    background-color: #DCDCDC;
@media screen and (min-width: 500px){
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 100%;
header{
    height: 100%;
    width: 20vw;
}}
`

export const DivCards = styled.div`
    height: 80%;
    width: 100%;

@media screen and (min-width: 500px){
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
}
`

export const HeaderInicio = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0px;
    padding: 0px;
    height: 80px;
    width: 100vw;
    background-color: gray;
div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin: 5px;
    height: 70px;

@media screen and (min-width: 500px){
    margin-top: 10vh;
}}

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

@media screen and (min-width: 500px){
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
    justify-content: center;
    align-items: space-around;
    width: 100vw;

@media screen and (min-width: 500px){
    position: fixed;
    height: 20vh;
    width: 100%;
}
`
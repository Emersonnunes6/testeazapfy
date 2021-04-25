import styled from 'styled-components'

export const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #DCDCDC;
img{
@media screen and (min-width: 800px){
    height: 60vh;
}
    height: 30vh;
    width: 80vw;
    margin: 5vh;
}
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 100vw;
    background-color: gray;
div{
    width: 5vw;
    margin-right: 30vw;
}
h3{
    font-size: 40px;
    margin-right: 35vw;
}
`

export const DivIndiceDetalhe = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    min-height: 10px;
    padding: 2vh;
    margin: 3vh;
    width: 80vw;
    background-color: white;
h3{
    font-size: 25px;
}
p{
    font-size: 20px;
    font-family: sans-serif;
}
`
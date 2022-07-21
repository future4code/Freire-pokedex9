import React from "react";
import styled from "styled-components";
import { irParaPokedex, voltarPagina } from "../Routes/Coordinator";
import { useNavigate } from "react-router-dom";


const HeaderStyled = styled.div`
background-image: radial-gradient(circle at 83.36% 65.56%, #8a97d4 0, #3a5da8 50%, #002b7d 100%);

display: flex;
align-items: center; 
justify-content: space-between; 
padding: 0% 1.5%;
width:auto;
height:65px;

`
const Button = styled.div`
color: #FFAFA;
width:100px;
background-color:#F2B807;
border: solid 2px black;
border-radius:35px;
display: inline-block;
text-align:center;
transition: all 0.5s;
cursor: pointer;


    &:hover{
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: drop-shadow(10px 5px 3px rgba(0,0,0,.5));
}
`

const Logo = styled.div `

text-align: center;
img {
    max-width:45vh;
    min-width:25vh;
    height: 100px;
    padding-top: 30px;
  }

`

export const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <HeaderStyled>
        
                <Button onClick={() => irParaPokedex(navigate)}>Pokedéx</Button>
                <Logo>
                <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-4-1.png" alt="pokemon-image"></img>
                </Logo>
                <Button onClick={() => voltarPagina(navigate)}> Voltar </Button>


            </HeaderStyled>
        </div>
    )
}
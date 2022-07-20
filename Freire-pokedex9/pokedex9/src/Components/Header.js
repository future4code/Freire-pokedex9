import React from "react";
import styled from "styled-components";
import { irParaPokedex, voltarPagina } from "../Routes/Coordinator";
import { useNavigate } from "react-router-dom";


const HeaderStyled = styled.div`
background-color: #0511F2;
display: flex; 
align-items: center; 
justify-content: space-between; 
padding: 0% 1.5%;

`
const Button = styled.div`
color: #FFAFA;
width:60px;
background-color:#F2B807;
border: solid 2px black;
border-radius:17%;
display: inline-block;
text-align:right;
cursor:pointer;


`


export const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <HeaderStyled>
                <img src="https://assets.pokemon.com/assets/cms2-pt-br/img/misc/gus/buttons/logo-pokemon-79x45.png" alt="pokemon-image"></img>
                <Button onClick={() => irParaPokedex(navigate)}>Pokedéx</Button>
                
                
            </HeaderStyled>
        </div>
    )
}
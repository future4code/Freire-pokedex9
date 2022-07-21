import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { irParaDetalhes } from "../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Router } from "../Routes/Router";
import { MainContainer } from "../pages/Home";

const CardContainer = styled.div`
  width: 350px;
  height: 450px;
  display: flex;
  justify-content: space-around;
  padding:5vh;
 
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-image: radial-gradient(circle at 57.82% 71.49%, #9abfff 0, #3a5da8 50%, #000222 100%);
  width: 100%;
  padding: 20px 15px;
  border-radius: 45px;
  box-shadow: 5px 5px 5px;
  transition: all 0.5s;
    cursor: pointer;
     &:hover{
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: drop-shadow(25px 15px 5px rgba(0,0,0,.5));
}
  /* transition: 1ms;
  &:hover{
    transform: scale(1.08);} */
  h2{
    margin: 0 auto;
    color: #F2B807;}
  `

export const Imagem = styled.div`
margin: 0 auto;
  img {
    max-width:20vh;
    min-width:15vh;
  }
`
export const Stats = styled.div`
  text-align:center;
  margin: 0 auto;
    p {
      background-color: #F2B807;
      border-radius: 5px;
    }
`
export const Buttons = styled.div`
display: flex;
  justify-content: space-between;
  button {
    background-color:#F2B807;
    border: none;
    transition: 100ms;
    padding: 6px 8px;
    border-radius: 25px;
    transition: all 0.5s;
    cursor: pointer;
    &:hover{
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: drop-shadow(10px 5px 3px rgba(0,0,0,.5));
}
    }
  
`


export const CardPokemon = (props) => {
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState({});

    const getPokemon = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${props.nome}`)
            .then((res) => {
                setPokemon(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                alert("error")
            })
    }

    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <CardContainer>
            <Card>

                <>
                    <h2>{pokemon.name && (
                        <>{pokemon.name.toUpperCase()}</>
                    )}</h2>
                </>
                <Imagem>
                    {pokemon.sprites && (
                        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                    )}
                </Imagem>
                <Stats>
                    <p>ATTACK: <span>{pokemon.stats && <>{pokemon.stats[1].base_stat}</>}</span></p>
                    <p>DEFENSE: <span>{pokemon.stats && <>{pokemon.stats[2].base_stat}</>}</span></p>
                    <p>HP:<span> {pokemon.stats && <>{pokemon.stats[0].base_stat}</>}</span></p>
                </Stats>
                <Buttons>
                    <button onClick={() =>props.adicionarAPokedex(pokemon.name)}>Add to pokedéx</button>
                    <button onClick={() => irParaDetalhes(navigate, pokemon.name)}>Details</button>
                </Buttons>
            </Card>
        </CardContainer>


    )
}



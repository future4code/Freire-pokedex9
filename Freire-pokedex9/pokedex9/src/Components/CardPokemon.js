import React,{useState,useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import {irParaDetalhes} from "../Routes/Coordinator";
import {useNavigate} from  "react-router-dom";
import { Router } from "../Routes/Router";
import { MainContainer } from "../pages/Home";

export const Card = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
width: 100%;
padding: 20px 15px;
border-radius: 10px;
`
export const Imagem = styled.div`
`
export const Stats = styled.div`
`
export const Buttons = styled.div`
`


export const CardPokemon = (props) =>{
    const navigate = useNavigate();
    const [pokemon,setPokemon]=useState({});

    const getPokemon = () =>{
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${props.nome}`)
        .then((res)=>{
            setPokemon(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            alert ("error")
        })
    }

    useEffect(()=>{
        getPokemon();
    },[]);

    return(
        <MainContainer>
            <Card>
                
            <Imagem>
                <img src="https://assets.pokemon.com/assets/cms2-pt-br/img/misc/gus/buttons/logo-pokemon-79x45.png" alt="img"/>
            </Imagem>
            <>
        <h3>{pokemon.name && (
              <>{pokemon.name.toUpperCase()}</>
            )}</h3>
            </>
            <Stats>
            <p>ATTACK: <span>{pokemon.stats && <>{pokemon.stats[1].base_stat}</>}</span></p>
          <p>DEFENSE: <span>{pokemon.stats && <>{pokemon.stats[2].base_stat}</>}</span></p>
            </Stats>
            <Buttons>
                <button onClick={()=>props.adicionarAPokedex(pokemon.name)}>Add to pokedéx</button>
                <button onClick={()=>irParaDetalhes(navigate,pokemon.name)}>Details</button>
            </Buttons>
            </Card>
        </MainContainer>

    )
}



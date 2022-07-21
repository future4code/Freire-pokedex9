import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { voltarPagina } from "../Routes/Coordinator";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "./Header";


const ContainerDetalhes = styled.div`
   width: auto;
  height: auto;
  display: flex;
  justify-content: space-around;
  padding:5vh;
 
`
const Titulo = styled.div`
 text-align: center;
 height: 100px;
 color: #F2B807;
    
  
`;

const CardBasic = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-image: radial-gradient(circle at 57.82% 71.49%, #9abfff 0, #3a5da8 50%, #000222 100%);
 width:500px;
 height: 1000px;
  padding: 20px 15px;
  border-radius: 45px;
  box-shadow: 5px 5px 5px;
  transition: all 0.5s;
    cursor: pointer;
     &:hover{
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: drop-shadow(25px 15px 5px rgba(0,0,0,.5));
}
`;

const Stats = styled.div`
text-align:center;
  background-color: #F2B807;
   border-radius: 20px;
  width: 200px;
  
`

const Moves = styled.div`
background: #F2B807 ;
 border-radius:20px;
 text-align: center;
 width: 200px;
  height: 70px; 


`
const Subtitulo = styled.div`
    text-align: 20px;
    text-align: center;
    
`
const Descrição = styled.div`
  text-align:75px;
   margin: 0 auto;
   font-size: 10px;
   background-color: #F2B807;
    border-radius: 5px;
    border: solid black 2px; 
    width: 100px;
  
 
    
`
const Imagem = styled.div`

text-align: center;
 img{
  width:200px;
 
 }
 `
export const CardDetalhes = () => {
  const navigate = useNavigate();

  const params = useParams();

  const [pokemon, setPokemon] = useState({});

  console.log(params);
  console.log(pokemon.types);
  console.log(pokemon.stats);

  const pegarNomesPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        alert("ERRO");
      });
  };

  useEffect(() => {
    pegarNomesPokemons();
  }, []);

  return (
    <ContainerDetalhes>
      <CardBasic>

        <Titulo>
          <h1>{pokemon.name && <>{pokemon.name.toUpperCase()}</>}</h1>
        </Titulo>

        <div>

          {pokemon.sprites && (
            <Imagem>

              {pokemon.sprites && (
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
              )}
            </Imagem>
          )}

        </div>

        <Descrição>

          <Stats>
            <Subtitulo>
              <h2>STATS</h2>
            </Subtitulo>
            <h3>HP: {pokemon.stats && <>{pokemon.stats[0].base_stat}</>} </h3>
            <h3>ATTACK: {pokemon.stats && <>{pokemon.stats[1].base_stat}</>}</h3>
            <h3>DEFENSE: {pokemon.stats && <>{pokemon.stats[2].base_stat}</>}</h3>
            <h3>
              SPECIAL-ATTACK:{pokemon.stats && <>{pokemon.stats[3].base_stat}</>}
            </h3>
            <h3>
              SPECIAL-DEFENSE:{" "}
              {pokemon.stats && <>{pokemon.stats[4].base_stat}</>}
            </h3>
            <h3>SPEED: {pokemon.stats && <>{pokemon.stats[5].base_stat}</>}</h3>




            <div>
              <h3>
                {" "}
                Type 1: {pokemon.types && <>{pokemon.types[0].type.name}</>}
              </h3>
              <h3>
                Type 2: {pokemon.types && (pokemon.types.length > 1 ? <>{pokemon.types[1].type.name}</> : " null ")}
              </h3>
            </div>
            <br />
          </Stats>

          <Moves>
            <h2>MOVES</h2>
            <h3>{pokemon.moves && <>{pokemon.moves[0].move.name}</>}</h3>
            <h3>{pokemon.moves && <>{pokemon.moves[1].move.name}</>}</h3>
            <h3>{pokemon.moves && <>{pokemon.moves[2].move.name}</>}</h3>
          </Moves>

        </Descrição>
      </CardBasic>
    </ContainerDetalhes>

  );
}
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import irParaPokedex from "../Routes/Coordinator";
import voltarPagina from "../Routes/Coordinator";
import { Header } from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { CardPokemon } from "../Components/CardPokemon";
import { Detalhes } from "../pages/Detalhes";
import { Card } from "../Components/CardPokemon";
import {Logo} from "../Components/Header";


export const MainContainer = styled.div`
background-color:#2a3760;



`
const CardBug = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
`
export const Home = (props) => {
    const navigate = useNavigate();
    const [listaDePokemons, setListaDePokemons] = useState([]);
    const pegarNomesPokemons = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=28")
            .then((res) => {
                setListaDePokemons(res.data.results);
            })
            .catch((err) => {
                alert("error");
            })
    }

    useEffect(() => {
        pegarNomesPokemons()
    }, [])

    const mapearPokemons =
        listaDePokemons &&
        listaDePokemons.map((pokemon) => {
            return (
                <>
                    <CardPokemon adicionarAPokedex={props.adicionarAPokedex} nome={pokemon.name} />
                </>
            )
        })

    const mapearDetalhes = listaDePokemons && listaDePokemons.map((pokemon) => {
        return <Detalhes nome={pokemon.name} />

    })



    return (
        <MainContainer>
            <Header></Header>

            <CardBug>{mapearPokemons}</CardBug>

        </MainContainer>



    )
}
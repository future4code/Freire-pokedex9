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


export const MainContainer = styled.div`
background-color:#1C2B59;
flex-wrap: wrap; 
min-height: 100vh;
height: max-content; 
padding-top:0; 
padding-bottom: 10%;

`
const Container = styled.div`
`
export const Home = () => {
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
                    <CardPokemon adicionarAPokedex={pegarNomesPokemons.adicionarAPokedex} nome={pokemon.name} />
                </>
            )
        })

    const mapearDetalhes = listaDePokemons && listaDePokemons.map((pokemon) => {
        return <Detalhes nome={pokemon.name} />

    })



    return (
        <MainContainer>
            <Header></Header>
            <Container>
                <Card>{mapearPokemons}</Card>
            </Container>
        </MainContainer>


    )
}
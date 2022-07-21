import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home";
import {Detalhes} from "../pages/Detalhes";
import {Pokedex} from "../pages/Pokedex";
import React,{useState} from "react";

export const Router = () => {

    const [pokemonsPokedex,setPokemonsPokedex] = useState([])

    const adicionarAPokedex = (pokemon) =>{
        const arrayDePokemons = [...pokemonsPokedex,pokemon]
        setPokemonsPokedex(arrayDePokemons)
        alert('Gotchaaa! Pokemón capturado e adicionado a sua pokedéx!')
    }

    const removerDaPokedex = (nome) =>{
        const remover = window.confirm ("Remover pokemón?")
        if (removerDaPokedex){
            const arrayDePokemons = pokemonsPokedex.filter((pokemon)=>{
                return pokemon !== nome
            })
            setPokemonsPokedex(arrayDePokemons)
        }
    }


    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home adicionarAPokedex={adicionarAPokedex}/>} />
                <Route path="pokedex" element={<Pokedex pokemonsPokedex={pokemonsPokedex} removerDaPokedex={removerDaPokedex} />} />
                <Route path="/detalhes/:name" element={<Detalhes />} />

            </Routes>

        </BrowserRouter>
    )
}

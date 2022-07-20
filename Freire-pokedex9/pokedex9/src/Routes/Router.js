import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home";
import {Detalhes} from "../pages/Detalhes";
import {Pokedex} from "../pages/Pokedex";
import React,{useState} from "react";

export const Router = () => {

    const [addPokedex,setAddPokedex] = useState([])

    const adicionarAPokedex = (pokemon) =>{
        const arrayDePokemons = [...addPokedex,pokemon]
        setAddPokedex(arrayDePokemons)
        alert('Gotchaaa! Pokemón capturado e adicionado a sua pokedéx!')
    }

    const removerDaPokedex = (nome) =>{
        const remover = window.confirm ("Remover pokemón?")
        if (removerDaPokedex){
            const arrayDePokemons = addPokedex.filter((pokemon)=>{
                return pokemon !== nome
            })
            setAddPokedex(arrayDePokemons)
        }
    }


    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="pokedex" element={<Pokedex />} />
                <Route path="/detalhes" element={<Detalhes />} />

            </Routes>

        </BrowserRouter>
    )
}

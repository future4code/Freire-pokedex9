import React from "react";
import axios from "axios";
import styled from "styled-components";
import irParaPokedex from "../Routes/Coordinator";
import voltarPagina from "../Routes/Coordinator";
import {Header} from "../Components/Header";

const MainContainer = styled.div`
background-color:#1C2B59;
flex-wrap: wrap; 
min-height: 100vh;
height: max-content; 
padding-top: 0; 
padding-bottom: 10%;

`
const Container = styled.div`
`


export const Pokedex = () =>{
    return(
        <MainContainer>
        <Header></Header>
        <Container></Container>
        </MainContainer>

        
    )
}
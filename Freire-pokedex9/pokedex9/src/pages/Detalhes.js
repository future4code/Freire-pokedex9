import React from "react";
import axios from "axios";
import styled from "styled-components";
import { voltarPagina } from "../Routes/Coordinator";
import { Header } from "../Components/Header";
import { CardDetalhes } from "../Components/CardDetalhes";
import { useNavigate } from "react-router-dom";



export const MainContainer = styled.div`
background-color:#2a3760;

`


export const Detalhes = () => {
    const navigate = useNavigate()
    return (
        <MainContainer>

            <Header />
            <CardDetalhes />

        </MainContainer>

    )
}
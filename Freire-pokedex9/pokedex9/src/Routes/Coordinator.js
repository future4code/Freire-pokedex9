export const irParaHome = (navigate) =>{
    navigate("/");
};
export const irParaDetalhes = (navigate, name) =>{
    navigate(`/detalhes/${name}`)
}
export const irParaPokedex = (navigate) =>{
    navigate("/pokedex")
}
export const voltarPagina = (navigate) =>{
    navigate(-1)
}
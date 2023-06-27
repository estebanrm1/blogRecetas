const URL_recetas = import.meta.env.VITE_API_RECETAS


export const obtenerListaRecetas = async ()=> {
    try {
        const respuesta = await fetch(URL_recetas);
        const listaRecetas = await respuesta.json();
        return listaRecetas;
    } catch (error) {
        console.error(error);
    }
}

export const crearReceta = async (receta)=>{
    try {
        const respuesta = await fetch(URL_recetas, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify()
        });
        const listaRecetas = await respuesta.json();
        return listaRecetas;
    } catch (error) {
        console.log(error)
    }
}
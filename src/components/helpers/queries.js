const URL_recetas = import.meta.env.VITE_API_RECETAS
const URL_usuario = import.meta.env.VITE_API_USUARIO


export const iniciarSesion = async (usuario) => {
    try {
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            //email era correcto
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado
            }else{
                console.log('La contraseña es incorrecta')
                return null
            }
        }else{
            console.log('El mail no existe')
            //el email no exixte
            return null
        }
    } catch (error) {
        console.log(error);
    }
}

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
            body: JSON.stringify(receta)
        });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const editarReceta = async (receta, id)=>{
    try {
        const respuesta = await fetch(URL_recetas+'/'+id, {
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(receta)
        });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const borrarReceta = async (id)=>{
    try {
        const respuesta = await fetch(URL_recetas+'/'+id, {
            method: "DELETE",
        });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const obtenerReceta = async (id)=>{
    try {
        const respuesta = await fetch(URL_recetas+'/'+id);
        const receta = await respuesta.json();
        return receta;
    } catch (error) {
        console.log(error)
    }
}
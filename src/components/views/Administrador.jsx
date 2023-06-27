import { Table, Button } from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";
import { obtenerListaRecetas } from "../helpers/queries";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Administrador = () => {
    const [recetas, SetRecetas] = useState([]);

    useEffect(() => {
        //consultar a la api y guardar la respuesta en el state
        obtenerListaRecetas().then((respuesta) => {
            if (respuesta) {
                SetRecetas(respuesta);
            } else {
                Swal.fire(
                    "Error",
                    "Intente realizar esta operación en unos minutos",
                    "error"
                );
            }
        });
    }, []);

    return (
        <section className="mainSection text-light bg-secondary bg-opacity-50">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <h1 className="display-6">Productos disponibles</h1>
                    <Link className="btn btn-primary" to="/administrador/crear-receta">
                        Agregar
                    </Link>
                </div>
                <hr />
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Cod</th>
                            <th>Receta</th>
                            <th>Tipo</th>
                            <th>URL de Imagen</th>
                            <th>Duracion</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recetas.map((receta) => (
                            <ItemReceta 
                            key={receta.id}
                            recetas={recetas} 
                            receta={receta}
                            SetRecetas={SetRecetas}></ItemReceta>
                        ))}
                    </tbody>
                </Table>
            </div>
        </section>
    );
};

export default Administrador;

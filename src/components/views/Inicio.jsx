import { Container, Row, Spinner } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";
import { useEffect, useState } from "react";
import { obtenerListaRecetas } from "../helpers/queries";
import Swal from "sweetalert2";

const Inicio = () => {

    const [recetas, setRecetas] = useState([]);
    const [mostrarSpinner, setMostrarSpinner] = useState(true);

    useEffect(() => {
        obtenerListaRecetas().then((respuesta) => {
            if (respuesta) {
                setRecetas(respuesta);
                setMostrarSpinner(false);
            } else {
                Swal.fire({
                    title: "Hubo un error!",
                    text: "Intente Realizar esta operacion en un momento por favor",
                    icon: 'error'
                })
            }
        })
    }, [])


    return (
        <section className="text-light mainSection bg-secondary bg-opacity-50">
            <Container>
                <h1 className="display-6 text-center">Recetas disponibles:</h1>
                <hr />
                <Row xs={1} md={2} lg={3} xl={4} className="justify-content-center align-items-stretch">
                    {mostrarSpinner ? (
                        <div className="my-3 text-center">
                            <Spinner animation="grow" variant="danger"></Spinner>
                        </div>
                    ) : (
                        recetas.map((receta) => (
                            <CardReceta key={receta.id} receta={receta}></CardReceta>
                        ))
                    )}
                </Row>
            </Container>
        </section>
    );
};

export default Inicio;
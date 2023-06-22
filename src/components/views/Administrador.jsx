import { Table, Button } from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";

const Administrador = () => {
    return (
        <section className="mainSection text-light bg-secondary bg-opacity-50">
                <div className="container">
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <h1 className="display-6">Productos disponibles</h1>
                    <Button className="btn btn-primary" to='/administrar/crear'>
                        Agregar
                    </Button>
                </div>
                <hr />
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Cod</th>
                            <th>Receta</th>
                            <th>Tipo</th>
                            <th>URL de Imagen</th>
                            <th>Tipo</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    <ItemReceta></ItemReceta>
                    </tbody>
                </Table>
        </div>
            </section>
    );
};

export default Administrador;
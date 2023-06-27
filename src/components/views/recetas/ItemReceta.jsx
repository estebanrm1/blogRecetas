import { Button } from "react-bootstrap";

const ItemReceta = ({ receta }) => {
    return (
        <tr>
            {/* <td>{props.producto._id}</td> */}
            <td>{receta.id}</td>
            <td>{receta.nombreReceta}</td>
            <td>{receta.tipo}</td>
            <td>{receta.imagen}</td>
            <td>{receta.duracion}</td>
            <td>
                <Button className="btn btn-warning">Editar</Button>
                <Button variant="danger">
                    Borrar
                </Button>
            </td>
        </tr>
    );
};

export default ItemReceta;
import { ListGroup } from "react-bootstrap";


const IngredientesReceta = ({ingredientes}) => {

    console.log(ingredientes);

    return (
        <ListGroup.Item>

        {
            ingredientes.map((ingrediente, indiceIngrediente)=><li key={indiceIngrediente}>{ingrediente}</li>)
        }

        </ListGroup.Item>
    );
};

export default IngredientesReceta;
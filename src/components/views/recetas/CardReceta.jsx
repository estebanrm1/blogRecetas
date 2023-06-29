import { Col, Card, Button } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import ModalReceta from "./ModalReceta";
import { useState } from "react";

const CardReceta = ({ receta }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Card className="m-3 bg-body-secondary bg-opacity-75" style={{ width: '18rem' }}>
            <Card.Img className="p-2" style={{ height: '9.5rem' }} variant="top" src={receta.imagenUrl}/>
            <Card.Body>
                <Card.Title>{receta.nombreReceta}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{receta.categoria}</ListGroup.Item>
                <ListGroup.Item>Duracion: {receta.duracion} min.</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button className="btn btn-primary" type="submit" onClick={handleShow}>Ver receta</Button>
            </Card.Body>
        </Card>
        <ModalReceta receta={receta} show={show} handleClose={handleClose}></ModalReceta>
        </>
    );
};

export default CardReceta;

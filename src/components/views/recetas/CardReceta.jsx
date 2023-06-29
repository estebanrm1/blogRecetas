import { Col, Card, Button, Accordion } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import ModalReceta from "./ModalReceta";
import { useEffect, useState } from "react";


const CardReceta = ({ receta, ingrediente }) => {

    const { ingredientes } = receta

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Card className="m-3 bg-body-secondary bg-opacity-50" style={{ width: '25rem' }}>
                <Card.Img className="p-2" style={{ height: '15rem' }} variant="top" src={receta.imagenUrl} />
                <Card.Body>
                    <Card.Title>{receta.nombreReceta}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><b>Ideal para:</b> {receta.categoria}</ListGroup.Item>
                    <ListGroup.Item><b>Duracion:</b> {receta.duracion} min.</ListGroup.Item>
                </ListGroup>
                <ListGroup>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><b>Ingredientes</b>:</Accordion.Header>
                            <Accordion.Body>
                                {receta.ingredientes && receta.ingredientes.map((ingrediente, index) => (
                                    <ListGroup.Item key={index}>{ingrediente}</ListGroup.Item>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
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

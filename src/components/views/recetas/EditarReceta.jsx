import { useEffect } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { editarReceta, obtenerReceta } from "../../helpers/queries";

const EditarReceta = () => {



    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm();

    const { id } = useParams();

    useEffect(() => {
        obtenerReceta(id).then((respuesta) => {
            if (respuesta) {
                setValue('nombreReceta', respuesta.nombreReceta);
                setValue('duracion', respuesta.duracion);
                setValue('url', respuesta.url);
                setValue('categoria', respuesta.categoria);
            }
        })
    }, [])

    const onSubmit = (recetaEditada) => {
        console.log(recetaEditada);
        editarReceta(recetaEditada, id).then((recetaEditada) => {
            if (recetaEditada.status === 200) {
                Swal.fire('Receta editada', `La receta fue editada correctamente`, 'success');
            } else {
                Swal.fire('Ocurrio un error', `La receta no pudo ser editada`, 'error');
            }
        })
    }

    return (
        <section className="container text-light">
            <h1 className="display-4 mt-5">Producto:</h1>
            <hr />
            <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formNombreReceta">
                    <Form.Label>Nombre de la Receta*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Pollo a la portuguesa"
                        {...register("nombreReceta", {
                            required: "El nombre de la receta es obligatorio",
                            minLength: {
                                value: 2,
                                message: "La cantidad minima de caracteres es de 2 digitos",
                            },
                            maxLength: {
                                value: 100,
                                message: "La cantidad maxima de caracteres es de 100 digitos",
                            }
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.nombreReceta?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDuracion">
                    <Form.Label>Duracion*</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ej: 50 (minutos)"
                        {...register("duracion", {
                            required: "El tiempo de la receta es obligatorio",
                            min: {
                                value: 1,
                                message: "la duracion mini es de 1",
                            },
                            max: {
                                value: 10000,
                                message: "El tiempo maximo es de 10000",
                            },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.duracion?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagenUrl">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
                        {...register("imagenUrl", {
                            required: "La imagen es obligatoria",
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.imagenUrl?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Ingrese la preparacion*</Form.Label>
                    <FloatingLabel className="text-secondary" controlId="formPreparacion" label="Preparación:">
                        <Form.Control as="textarea" style={{ height: '100px' }} 
                        {...register("preparacion",{
                            required:"La preparación es obligatoria"
                        })}/>
                    </FloatingLabel>
                    <Form.Text className="text-danger">
                        {errors.preparacion?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCategoria">
                    <Form.Label>Elija para que momento del dia es ideal*</Form.Label>
                    <Form.Select
                        {...register("categoria", {
                            required: "La categoria es obligatoria",
                        })}
                    >
                        <option value="">Seleccione una opcion</option>
                        <option value="desayuno">Desayuno</option>
                        <option value="almuerzo">Almuerzo</option>
                        <option value="merienda">Merienda</option>
                        <option value="cena">Cena</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {errors.categoria?.message}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </section>
    );
};

export default EditarReceta;
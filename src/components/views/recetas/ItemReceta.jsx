import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarReceta } from "../../helpers/queries";
import { Link } from "react-router-dom";

const ItemReceta = ({ receta, recetas, setRecetas }) => {

   const handleDelete = () => {
      Swal.fire({
         title: 'Esta seguro de borrar la siguiente receta?',
         text: "El siguiente cambio no podra ser revertido",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Si, quiero borrar!',
         cancelButtonText: 'Cancelar'
      }).then((result) => {
         if (result.isConfirmed) {
            borrarReceta(receta.id).then((respuesta) => {
               if (respuesta.status === 200) {
                  eliminarReceta();
                  Swal.fire(
                     'Borrado!',
                     'La receta fue borrada.',
                     'success'
                  )
               } else {
                  Swal.fire({
                     title: "Lo siento!",
                     text: "La receta no pudo ser eliminada.",
                     icon: "error",
                     confirmButtonColor: "#fa8072",
                  });
               }
            })
         }
      })
   }

   const eliminarReceta = () => {
      const nuevaListaReceta = recetas.filter((recetaFiltrada) => recetaFiltrada !== receta);
      setRecetas(nuevaListaReceta);
   }

   return (
      <tr>
         <td>{receta.id}</td>
         <td>{receta.nombreReceta}</td>
         <td>{receta.categoria}</td>
         <td><span className="d-inline-block text-truncate" style={{ maxWidth: 180 }}>{receta.imagenUrl}</span></td>
         <td>{receta.duracion} min.</td>
         <td>
            <Link className="btn btn-warning" to={'/editar-receta/'+ receta.id}>Editar</Link>
            <Button className="mx-lg-1 my-1 my-lg-0" variant="danger" onClick={handleDelete}>
               Borrar
            </Button>
         </td>
      </tr>
   );
};

export default ItemReceta;
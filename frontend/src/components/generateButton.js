import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBoxArrowInDown, BsCheckLg, BsPencil, BsSearch, BsXSquare } from "react-icons/bs";

const BotonAsignar = (direccionAsignar, id_resp) => {
    return(
        <Button>
            <Link to={direccionAsignar} uni_res={id_resp}>
            <BsCheckLg/>
            </Link>
        </Button>
    );
}

const BotonEditar = (direccionEditar) => {
    return(
        <Button>
            <Link to={direccionEditar}>
                <BsPencil />
            </Link>
        </Button>
    );
}

const BotonEliminar = (direccionEliminar) => {
    return(
        <Button>
            <Link to={direccionEliminar}>
                <BsXSquare />
            </Link>
        </Button>
    );
}

const BotonBuscar = (metodoReaccion) => {
    return(
        <Button onClick={metodoReaccion}>
            <BsSearch />
        </Button>
    )
}

const BotonGuardarAsignacion = (direccionGuardar) => {
    return(
        <Button>
          <Link to={direccionGuardar}>
            <BsBoxArrowInDown />
          </Link>          
        </Button>
    )
}

export {
  BotonAsignar, 
  BotonEliminar, 
  BotonEditar, 
  BotonBuscar, 
  BotonGuardarAsignacion
};
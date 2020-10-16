import React, {useState, useEffect, Fragment} from 'react'
import ListLabel from '../components/crud/ListLabel';
import CLoading from "../components/CLoading";
import { getLabels, deleteLabelById } from '../services/label';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

export default function LabelView() {

    let [productoslabel, setProductosLabel] = useState([]);
    const [cargando, setCargando] = useState(true);

    const getProductosLabel = async () => {
        let data = await getLabels();
        setProductosLabel(data);
        setCargando(false);
    }  

    const deleteLabel = ({id}) => {
        Swal.fire({
            icon: "warning",
            title: "¿Está seguro de eliminar la label?",
            showConfirmButton: true,
            confirmButtonText: "Si, Eliminar",
            showCancelButton: true,
        }).then( async (resultSwal) => {
            if(resultSwal.isDismissed === true){ //si es que doy click a cancelar no haga nada
                console.log("cancelar")
            }
            console.log("Eliminar")
            setCargando(true); //comienzo a cargar porque mi peticion demora
            const productoEliminado = await deleteLabelById(id); //borro, va a demorar
            getProductosLabel();
        }

        )
    }

 
    useEffect(() => {
        getProductosLabel();
    }, [])
        
    return (
        <Fragment>
            {
                cargando ? (
                    <CLoading />
                ) : (
                    <div style={{marginTop: '5rem', marginBottom: '1rem'}}>
                        <h1 className="align-self-center">Listado de label</h1>  
                        <div className="ml-auto mb-3 mt-2">
                            <Link className="btn btn-primary btn-sm ml-auto" to={`/label`}>Agregar Label</Link>
                        </div>
                        <ListLabel  productoslabel={productoslabel} deleteLabel={deleteLabel}/> 
                    </div>
                )

            }
        </Fragment> 
    )
}
 
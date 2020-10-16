import React, { useState, useEffect } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'; 
import { getCategories } from '../../services/category';
import { getSubCategoriesByCategory } from '../../services/subcategory';
import { getProductTypesBySubCategory } from '../../services/producttype';
import { getLabels } from '../../services/label';
import { createType } from '../../services/producttype';
import Swal from 'sweetalert2';
import { useHistory } from  'react-router-dom';

import {storage} from '../../FirestoreConfig';
import { useForm } from "react-hook-form";

let imagenProducto;

export default function CreateType(){

    const history = useHistory();
    let { register, handleSubmit, errors} = useForm();

    const [labels, setLabels] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [productTypes, setProductTypes] = useState([]);

const [productoTypeNameTp, setproductoTypeNameTp] = useState(""); 
//   const [productoSubcategoryIdTP, setproductoSubcategoryIdTP] = useState("")

    const manejarSubmit = async (e) => {    
        let manejarSubmit = {
            producttypeName: productoTypeNameTp,
        }  
        
        Swal.fire({
            icon: "success",
            title: "Producto creado exitosamente",
            showConfirmButton: false,
            timer: 1000
        })
        
        let data = await createType(manejarSubmit); 
        // window.history.back();
        return history.push('/tipo');

    }
  
    const getCategory = async () => {
        let data = await getCategories(); 
        setCategories(data);
    } 

    const getSubCategory = async (categoryId) => { 
        let data = await getSubCategoriesByCategory(categoryId); 
        setSubCategories(data);
    } 

    const getProductType = async (subCategoryId) => { 
        let data = await getProductTypesBySubCategory(subCategoryId); 
        setProductTypes(data);
    } 

    const getLabel = async () => {
        let data = await getLabels(); 
        setLabels(data);
    }  

    const asignarCategoria = (categoria) =>{
        getSubCategory(categoria);
    }

    const asignarSubCategoria = (subcategoria) =>{
        getProductType(subcategoria);
    }


    //* Validar Select **/
    
    let validateSelect = (value) => {
        console.log("value", value);
        if(value === "0"){
            return false;
        }else{
            return true;
        }
    }

  
    useEffect(() => {
        getCategory();
        getLabel();
    },[])

    return (

        <div className="d-flex justify-content-center">
              <form
                onSubmit={handleSubmit(manejarSubmit)}
                >

                    <div style={{width: '600px', marginTop: '5rem', marginBottom: '1rem'}}>
                        <div className="card mt-3">
                            <div className="card-body" style={{paddingTop:'10px', paddingBottom: '0px'}}>

                                <h1 className="align-self-center">Agregar un nuevo tipo</h1>  
                            
                                <div className="form-group">
                                    <label htmlFor="producttypeName">Nombre Tipo:</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="producttypeName"
                                    name="producttypeName"
                                    ref={register({required:true, minLength:2, maxLength:20})}
                                    />
                                    {errors.producttypeName && errors.producttypeName.type === 'required' && (
                                    <small className="text-danger font-weight-bold">Debe ingresar el nombre del tipo</small>
                                    )}
                                    {
                                        errors.producttypeName && errors.producttypeName.type === "minLength" && (
                                            <small className="text-danger font-weight-bold">El nombre no puede ser menor a 10 digitos</small>
                                        )
                                    }
                                    {
                                        errors.producttypeName && errors.producttypeName.type === "maxLength" && (
                                            <small className="text-danger font-weight-bold">El nombre no puede ser mayor a 100 digitos</small>
                                        )
                                    }
                                </div>

                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                Agregar nuevo tipo
                            </button>

                            </div>
                        </div> 
                    </div>

                </form>

            </div>
 
    )
}
 
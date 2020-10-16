import React, { useState, useEffect } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'; 
import { getCategories } from '../../services/category';
import { getSubCategoriesByCategory } from '../../services/subcategory';
import { getProductTypesBySubCategory } from '../../services/producttype';
import { getLabels } from '../../services/label';
import { createSubcategory } from '../../services/subcategory';
import Swal from 'sweetalert2';
import { useHistory } from  'react-router-dom';

import {storage} from '../../FirestoreConfig';
import { useForm } from "react-hook-form";

let imagenProducto;

export default function CreateSubcategory(){

    const history = useHistory();
    let { register, handleSubmit, errors} = useForm();

    const [labels, setLabels] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [productTypes, setProductTypes] = useState([]);

    // const [categoriaIdSub, setcategoriaIdSub] = useState("");
    const [subcategoriaNameSub, setsubcategoriaNameSub] = useState("");

    const manejarSubmit = async (e) => {    
        let manejarSubmit = {
            // categoryId: categoriaIdSub,
            subcategoryName: subcategoriaNameSub,
        }  
        
        Swal.fire({
            icon: "success",
            title: "Producto creado exitosamente",
            showConfirmButton: false,
            timer: 1000
        })
        
        let data = await createSubcategory(manejarSubmit); 
        // window.history.back();
        return history.push('/subcategory');

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

                                <h1 className="align-self-center">Agregar un nuevo categoria</h1>  
                            
                                <div className="form-group">
                                    <label htmlFor="subcategoryName">Nombre Subcategoria:</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="subcategoryName"
                                    name="subcategoryName"
                                    ref={register({required:true, minLength:2, maxLength:20})}
                                    />
                                    {errors.subcategoryName && errors.subcategoryName.type === 'required' && (
                                    <small className="text-danger font-weight-bold">Debe ingresar el nombre de la subcategoria</small>
                                    )}
                                    {
                                        errors.subcategoryName && errors.subcategoryName.type === "minLength" && (
                                            <small className="text-danger font-weight-bold">El nombre no puede ser menor a 2 digitos</small>
                                        )
                                    }
                                    {
                                        errors.subcategoryName && errors.subcategoryName.type === "maxLength" && (
                                            <small className="text-danger font-weight-bold">El nombre no puede ser mayor a 20 digitos</small>
                                        )
                                    }
                                </div>
                       
                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                Agregar nueva subcategoria
                            </button>

                            </div>
                        </div> 
                    </div>

                </form>

            </div>
 
    )
}
 
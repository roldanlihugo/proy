import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import Typography from '@material-ui/core/Typography';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import FormGroup from '@material-ui/core/FormGroup';
 

import CProduct from '../components/CProduct';
import CSearchSubCategory from '../components/CSearchSubCategory';
import { getProductTypesBySubCategory } from '../services/producttype';
import { searchProducts } from '../services/product';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function SearchView(props) {    
    const classes = useStyles();
    
    const [subCategory, setSubCategory] = useState([]);
    const [productTypes, setProductTypes] = useState([]);
    const [productos, setProductos] = useState([]);
    const [productType, setProductType] = useState("");

    const [productTypeFilter, setProductTypeFilter] = useState(['']);

    const getProductType = async () => {  
        setSubCategory(props.match.params);
        let data = await getProductTypesBySubCategory(props.match.params.subCategoryId); 
        setProductTypes(data); 
    } 

    const getProducts = async () => {
        console.log("productTypeFilter", productTypeFilter);
        let data = await searchProducts(productTypeFilter);
        setProductos(data); 
        console.log("productos", data);
    }

    const configFilter = (ev) => {
        let value = ev.target.value;
        if(ev.target.checked)
        { 
            setProductTypeFilter([...productTypeFilter, value])

            console.log("false", productTypeFilter);
        }
        else{
            let productTypeFilterTemp =  productTypeFilter.filter(prod => prod !== value);
            setProductTypeFilter(productTypeFilterTemp)
            console.log("true", value);
        }
    }

    useEffect(() => {
        getProductType();
        getProducts();
    }, [])

    useEffect(() => {
        getProducts();
    }, [productTypeFilter])
    
    
    return (
        <div style={{marginTop: '5rem', marginBottom: '1rem'}} className="d-flex flex-row">
            <div className="mt-3 mr-4 col-3 filtro">
            { 
                <Accordion>
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <Typography className={classes.heading}>{props.match.params.subCategoryName}</Typography>
                        <i className="fas fa-caret-down fa-2x"></i>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        <FormGroup>
                            {
                                productTypes.map((type, i) => ( 
                                    <CSearchSubCategory key={i} typeProductId={type.id} typeProductName={type.producttypeName} setTypeProduct={configFilter}/>
                                ))
                            } 
                            </FormGroup>
                        </Typography>
                    </AccordionDetails>
                </Accordion>  
            } 
            </div>
            <div className="row mt-2 d-flex justify-content-evently contenedor">
            {
                productos.map((prod, i) => (
                    <div className="col-12 col-sm-6 col-lg-4 p-0">
                        <CProduct product={prod} key={i} />
                    </div>
                ))
            }
            </div>
        </div>
    )
}

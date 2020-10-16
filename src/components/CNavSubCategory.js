import React, {Fragment, useState, useEffect, useContext} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom"; 

import {NavSideContext} from '../context/navSideContext';
import { getSubCategoriesByCategory } from '../services/subcategory';

export default function CNavSubCategory({categoryId}) { 
    const [subcategory, setSubCategories] = useState([]);
    const { toggleDrawer } = useContext(NavSideContext); 
    const getSubCategory = async () => { 
        let data = await getSubCategoriesByCategory(categoryId);
        setSubCategories(data);
    } 

    useEffect(() => {
        getSubCategory();
        toggleDrawer('left', false);
    },[])

    return (
        <>
            {
                subcategory.map((sub, i) => (
                    <AccordionDetails key={i}>
                        <Typography>
                            <Link to={`/search/${sub.id}/${sub.subcategoryName}`}>
                                <ListItem button key={sub.subcategoryName}>
                                    <ListItemText primary={sub.subcategoryName} />
                                </ListItem>
                            </Link>   
                        </Typography>
                    </AccordionDetails>
                ))
            }
        </>
    )
}

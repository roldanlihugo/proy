import React, { useState,useEffect,Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';

import CNavSubCategory from './CNavSubCategory';
import { getCategories } from '../services/category';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  
export default function CNavSide() {
    console.log("1")
    const classes = useStyles();
    const [categories, setCategories] = useState([]); 

    const getCategory = async () => {
        let data = await getCategories(); 
        setCategories(data); 
    } 
  
    useEffect(() => {
        getCategory(); 
    },[])


    return (
        <>
            {
                categories.map((cat, i) => (
                    <Accordion key={i}>
                        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                            <Typography className={classes.heading}>{cat.categoryName}</Typography>
                        </AccordionSummary>
                        <CNavSubCategory categoryId={cat.id}/>
                    </Accordion> 
                ))
            }
        </>
    )
}

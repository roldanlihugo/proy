import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import HomeView from './view/HomeView';
import ProductView from './view/ProductView';
import DetailView from './view/DetailView';
import CarritoView from './view/CarritoView';
import CreateProduct from './components/crud/CreateProduct';
import LoginView from './view/LoginView';
import Registerview from './view/RegisterView';
import Profileview from './view/ProfileView';
import ConfirmationView from './view/ConfirmationView';
import SearchView from './view/SearchView';

import CategoryView from './view/CategoryView'
import CreateCategory from './components/crud/CreateCategory'

import LabelView from './view/LabelView'
// import CreateLabel from './components/crud/CreateLabel'


import SubcategoryView from './view/SubcategoryView'

import CreateSubcategory from './components/crud/CreateSubcategory'

import TypeView from './view/TypeView'
import CreateType from './components/crud/CreateType'
 
export default function Routes() {  
    return (
        <Fragment>
            {/* <Redirect from='/' to='/home' /> */}
            <Route exac path="/home" component={HomeView} />
            <Route exac path="/product" component={ProductView} />
            <Route exac path="/productdetail/:id" component={DetailView} />
            <Route exac path="/createproduct" component={CreateProduct} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/register" component={Registerview} />
            <Route exact path="/profile" component={Profileview} />
            <Route exact path="/confirmation" component={ConfirmationView} />
            <Route exac path="/car" component={CarritoView} /> 
            <Route exac path="/search/:subCategoryId/:subCategoryName" component={SearchView} />
            <Route exact path="/category" component={CategoryView} />
            <Route exact path="/createcategory" component={CreateCategory} />

             <Route exact path="/label" component={LabelView} />
            {/* <Route exact path="/createlabel" component={CreateLabel} /> */}

            <Route exact path="/subcategory" component={SubcategoryView} /> 
            <Route exact path="/createsub" component={CreateSubcategory} />

            <Route exact path="/tipo" component={TypeView} />
            <Route exact path="/createtipo" component={CreateType} />
        </Fragment>
    )
}

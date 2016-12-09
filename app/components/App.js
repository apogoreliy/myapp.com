import React from 'react';
import OpenProductModal from '../containers/openProductModal';
import Body from './Body';
import ProductModal from '../containers/ProductModal';
import CategoryModal from '../containers/CategoryModal';
import DeleteModal from '../containers/DeleteModal';

const App = ()=>(
    <div className="container">
        <OpenProductModal />
        <Body/>
        <ProductModal />
        <CategoryModal />
        <DeleteModal />
    </div>
);

export default App;
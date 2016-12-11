import React, {Component} from 'react';
import HandleHeader from '../containers/HandleHeader';
import Body from './Body';
import ProductModal from '../containers/ProductModal';
import CategoryModal from '../containers/CategoryModal';
import DeleteModal from '../containers/DeleteModal';
import { connect } from 'react-redux';
import {fetchProducts, fetchCategories} from '../actions/index'

class App extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.fetchProducts();
        this.props.fetchCategories();
    }

    render() {
        return (
            <div className="container">
                <HandleHeader />
                <Body/>
                <ProductModal />
                <CategoryModal />
                <DeleteModal />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => {
            dispatch(fetchProducts())
        },
        fetchCategories: ()=> {
            dispatch(fetchCategories())
        }
    }
};

export default connect(
    null,
    mapDispatchToProps
)(App);

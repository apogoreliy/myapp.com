import React, {Component, PropTypes} from 'react';
import CategoryModal from '../containers/CategoryModal';
import DeleteModal from '../containers/DeleteModal';

class CategoriesList extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.fetchCategories();
    }

    renderCategories () {
        let arr = [];
        for (let i in this.props.categories.cats){
            if( this.props.categories.cats.hasOwnProperty( i ) ) {
                let obj = this.props.categories.cats[i];
                arr.push (
                    <div key={'category'+obj.categoryID} className="category-item">
                        <span className="btn btn-default" onClick={e => this.props.handleClick(obj.categoryID)} >X</span>
                        <a className={this.props.selectedCategory === obj.categoryID && "active"} onClick={e => { e.preventDefault(); this.props.selectCategory(obj.categoryID)}}> {obj.name} </a>
                    </div>
                );
            }
        }
        return arr;
    }

    render() {
        return (
            <div className="col-md-3">
                {this.props.categories && this.renderCategories()}
                {this.props.categories && <CategoryModal />}
                {this.props.openDeleteCategoryModal && <DeleteModal/>}
            </div>
        )
    }
}

CategoriesList.propTypes = {
    categories: React.PropTypes.shape({
        cats: React.PropTypes.array
    }),
    fetchCategories: React.PropTypes.func.isRequired,
    handleClick: React.PropTypes.func.isRequired,
    selectCategory: React.PropTypes.func.isRequired,
    openDeleteCategoryModal : React.PropTypes.bool,
    selectedCategory : PropTypes.number
};

export default CategoriesList;
import React, {Component, PropTypes} from 'react';
import HandleCategoryModal from '../../containers/Store/HandleCategoryModal';
import HandleDeleteModal from '../../containers/Store/HandleDeleteModal';

class CategoriesList extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.fetchCategories();
    }

    renderCategories (categories, handleClick, selectedCategory, selectCategory) {
        let arr = [];
        for (let i in categories){
            if( categories.hasOwnProperty( i ) ) {
                let obj = categories[i];
                arr.push (
                    <div key={'category'+obj.categoryID} className="category-item">
                        <span className="btn btn-default" onClick={e => handleClick(obj.categoryID)} >X</span>
                        <a className={selectedCategory === obj.categoryID && "active"}
                           onClick={e => { e.preventDefault(); selectCategory(obj.categoryID)}}> {obj.name}
                        </a>
                    </div>
                );
            }
        }
        return arr;
    }

    render() {
        return (
            <div className="col-md-3">
                { this.props.categories &&
                    this.renderCategories(
                        this.props.categories, this.props.handleClick,
                        this.props.selectedCategory, this.props.selectCategory
                    )
                }
                { this.props.openAddCategoryModal && <HandleCategoryModal /> }
                { this.props.openDeleteCategoryModal && <HandleDeleteModal/> }
            </div>
        )
    }
}

CategoriesList.propTypes = {
    categories: React.PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.array
    ]),
    fetchCategories: React.PropTypes.func.isRequired,
    handleClick: React.PropTypes.func.isRequired,
    selectCategory: React.PropTypes.func.isRequired,
    openDeleteCategoryModal : React.PropTypes.bool,
    selectedCategory : PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    openAddCategoryModal : React.PropTypes.bool
};

export default CategoriesList;
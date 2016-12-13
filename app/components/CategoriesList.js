import React, {Component} from 'react';
import CategoryModal from '../containers/CategoryModal';

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
                        <a onClick={e => { e.preventDefault(); this.props.selectCategory(obj.categoryID)}}> {obj.name} </a>
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
                <CategoryModal />
            </div>
        )
    }
}

export default CategoriesList;
import React from 'react';

const renderCategories = (props) => {
    let arr = [];
    for (let i in props.categories.cats){
        if( props.categories.cats.hasOwnProperty( i ) ) {
            let obj = props.categories.cats[i];
            arr.push (
                <div key={'category'+obj.categoryID} style={{marginTop: "10px"}}>
                    <span className="btn btn-default" onClick={e => props.handleClick(obj.categoryID)} style={{marginRight: "10px"}}>X</span>
                    <a onClick={e => { e.preventDefault(); props.selectCategory(obj.categoryID)}}> {obj.name} </a>
                </div>
            );
        }
    }
    return arr;
};

export default (props) => {
    return(
        <div className="col-md-3">
            {props.categories && renderCategories(props)}
        </div>
    )
}
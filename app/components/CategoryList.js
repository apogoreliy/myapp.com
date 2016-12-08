import React, {Component} from 'react';

export default class CategoryList extends Component{
    render(){
        return(
            <div className="col-md-2">
                <div>
                    <span className="btn btn-default">X</span>
                    <span>Category 1</span>
                </div>
                <div>
                    <span className="btn btn-default">X</span>
                    <span>Category 2</span>
                </div>
                <div>
                    <span className="btn btn-default">X</span>
                    <span>Category 3</span>
                </div>
            </div>
        );
    }

}
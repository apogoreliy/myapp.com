import React, {Component} from 'react';

export default class CategoryList extends Component{
    render(){
        return(
            <div className="col-md-3">
                <div style={{marginTop: "10px"}}>
                    <span className="btn btn-default" style={{marginRight: "10px"}}>X</span>
                    <span>Телефоны</span>
                </div>
                <div style={{marginTop: "10px"}}>
                    <span className="btn btn-default" style={{marginRight: "10px"}}>X</span>
                    <span>Планшеты</span>
                </div>
                <div style={{marginTop: "10px"}}>
                    <span className="btn btn-default" style={{marginRight: "10px"}}>X</span>
                    <span>Компьютеры</span>
                </div>
            </div>
        );
    }

}
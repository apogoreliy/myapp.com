import React, {Component} from 'react';

export default class Body extends Component{
    render(){
        return(
            <div className="col-md-10" style={{float: "right"}}>
                <table className="table table-hover">
                    <tr>
                        <th>Id</th>
                        <th>Название товара</th>
                        <th>Цена / зак.</th>
                        <th>Цена</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Телефоны</td>
                        <td>2000</td>
                        <td>2500</td>
                    </tr>
                </table>
            </div>
        );
    }

}
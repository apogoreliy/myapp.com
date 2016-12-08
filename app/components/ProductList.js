import React, {Component} from 'react';

export default class Body extends Component{
    render(){
        return(
            <div className="col-md-9" style={{float: "right"}}>
                <table className="table table-hover">
                    <tr>
                        <th>Id</th>
                        <th>Название товара</th>
                        <th>Цена / зак.</th>
                        <th>Цена</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>HTC</td>
                        <td>20000</td>
                        <td>25000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Samsung</td>
                        <td>20000</td>
                        <td>25000</td>
                    </tr>
                </table>
            </div>
        );
    }

}
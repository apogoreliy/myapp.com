import React from 'react';

export default (props) => {
    console.log(props.categories);
    return(
        <div className="col-md-3">
            {!props.categories ? <div></div> : props.categories.map((c, index) => {
                return (
                    <div key={index} style={{marginTop: "10px"}}>
                        <span className="btn btn-default" onClick={() => props.handleClick()} style={{marginRight: "10px"}}>X</span>
                        <a onClick={e => { e.preventDefault(); props.selectCategory(2); }}> {c} </a>
                    </div>
                )
            })}
        </div>
    )
}
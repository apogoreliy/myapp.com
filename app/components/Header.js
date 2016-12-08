import React from 'react';

const Header = (props) => (
    <div>
        <div className="btn-group" role="group" style={{marginTop : "40px", marginBottom: "40px"}}>
            <button type="button" className="btn btn-default" onClick={props}>Добавить товар</button>
            <button type="button" className="btn btn-default">Добавить категорию</button>
        </div>
    </div>
);

export default Header;
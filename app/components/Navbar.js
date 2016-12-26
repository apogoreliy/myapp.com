import React, {PropTypes} from 'react';
import HandleAuthPanel from '../containers/HandleAuthPanel';
import {Link} from 'react-router';

const Navbar = () => (
    <div>
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar">{}</span>
                        <span className="icon-bar">{}</span>
                        <span className="icon-bar">{}</span>
                    </button>
                    <Link className="navbar-brand" to="/">MY APP</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/store" activeClassName="active">Store</Link>
                        </li>
                        <li>
                            <Link to="/weather" activeClassName="active">Weather</Link>
                        </li>
                        <li>
                            <Link to="/chat" activeClassName="active">Chat</Link>
                        </li>
                        <li>
                            <Link to="/github" activeClassName="active">Github</Link>
                        </li>
                    </ul>
                    <HandleAuthPanel />
                </div>
            </div>
        </nav>
    </div>
);

export default Navbar;
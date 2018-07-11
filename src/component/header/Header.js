import React from 'react';
import logo from '../app/img/logo.png';

const Header = () => {

    return (
        <div className="row">
            <div className="col-12 text-center">
                <img className="img-fluid logo" src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;

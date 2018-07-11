import React from 'react';
import './pokemon.css';

function Pokemon(props) {
    return (
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 text-center s">
            <img className="avatar img-fluid" src={props.avatar} alt="" />
            <div className="pokeName"><span className="name">NAME :</span > {props.name.toUpperCase()}</div>
            <div className="pokeName"><span className="name">TYPE :</span > {props.type}</div>
            <div className="pokeName"><span className="name">ATTRIBUTES :</span> {props.attributes}</div>
        </div>
    );
}

export default Pokemon;


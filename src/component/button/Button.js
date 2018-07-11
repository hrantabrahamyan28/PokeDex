import React from 'react';
import './button.css';

function Button(props) {

    const changePage = (offset, limitValue) => {
        props.offset(offset, limitValue);
        props.loadPokemons(offset, 30);
    };


    return (
        <div className="buttonWrraper d-inline text-center pt-2 ">
            <a className="pageinetionButton pr-3" onClick={() => changePage(props.text, props.limitValue)}>{props.text}</a>
        </div>
    );
}

export default Button;

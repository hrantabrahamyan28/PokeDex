import React from 'react';

const CountSelect = (props) => {


    const updateSelect = (offsetValue, limitValue) => {
        props.limit(offsetValue, limitValue);
    };


    return (
        <div className="row">
            <div className="col-12">
                <select className="select" value={props.limitValue} onChange={(event) => updateSelect(props.offsetValue, event.target.value)}>
                    <option className="option" value="10" >10</option>
                    <option className="option" value="20" >20</option>
                    <option className="option" value="30" >30</option>
                </select>
            </div>
        </div>
    );
};

export default CountSelect;


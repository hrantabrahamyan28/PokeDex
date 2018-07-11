import React from 'react';
import './loader.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index';

function Loader(props) {
    let loadLine = props.state.getData.loadLine;
    let length = props.state.getData.length; 
    let total = Math.ceil(loadLine * 100/length);
    return (
        <div className="container-fluid for_loader">
            <div className="center-on-page">
                <div className="pokeball">
                    <div className="pokeball__button"></div>
                </div>
                <div className="loading_status__wrraper">
                    <div className="loading_status__line" style={{ width: total ? total * 2 : 0}}></div>
                    <p className="loading_status__num">{total ? total : 0}%</p>
                </div>
            </div>
        </div>

    );
}


const mapStateToProps = (state) => {
    return {
        state
    };
};

export default connect(mapStateToProps, actionCreators)(Loader);

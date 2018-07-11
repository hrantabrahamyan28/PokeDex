import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index';
import Button from '../button/Button';
import './buttonList.css';

class ButtonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemIndex: 0
        };
        this.next = this.next.bind(this);
    }
    
    next (buttonArray)  {
        if (this.state.itemIndex < buttonArray.length - 3)
            this.setState({
                itemIndex: this.state.itemIndex + 1
            });
    }

    prev ()  {
        if (this.state.itemIndex > 3)
            this.setState({
                itemIndex: this.state.itemIndex - 1
            });
    }

    render() {
        let buttonArray = [];
        let additionalPgeCount = this.props.state.getData.pagecount % 20 === 0 ? 0 : 1;
        let buttonCount = parseInt(this.props.state.getData.pagecount / 20, 10) + additionalPgeCount;

        for (let i = buttonCount; i > 0; i--) {
            buttonArray.push(i);
        }

        const newbuttonArray = buttonArray.map((item, index) => <Button key={item} text={index} loadPokemons={this.props.loadPokemons} limitValue={this.props.state.getData.limitValue} offsetValue={this.props.state.getData.offsetValue} offset={this.props.offset} />);

        return (
            <div className="row">
                <div className="slider col-12 d-flex justify-content-center">
                    <button onClick={this.state.itemIndex >= 1 ? this.prev : null
                    } className="previous">previous</button>
                    <div >
                        {newbuttonArray[this.state.itemIndex]}
                        {newbuttonArray[this.state.itemIndex + 1]}
                        {newbuttonArray[this.state.itemIndex + 2]}
                    </div>
                    <button onClick={(this.state.itemIndex < buttonArray.length - 3) ? () => this.next(buttonArray) : null} className="next">Next</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        state
    };
};

export default connect(mapStateToProps, actionCreators)(ButtonList);











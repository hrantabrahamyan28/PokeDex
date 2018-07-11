import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index';
import Loader from '../loader/Loader';
import './app.css';
import './fonts.css';
import PokemonList from '../pokemonList/PokemonList';
import Header from '../header/Header';
import ButtonList from '../buttonList/ButtonList';




class App extends React.Component {
    componentDidMount() {
        this.props.loadPokemons();
    }

    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.state.getData.loading ? <Loader /> : <PokemonList />}
                <ButtonList />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state
    };
};

export default connect(mapStateToProps, actionCreators)(App);


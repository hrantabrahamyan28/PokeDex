import React, { Component } from 'react'; /*I used it in component!!!*/
import Pokemon from '../pokemon/Pokemon';
import './pokemonlist.css';
import './search.css';
import CountSelect from '../countSelect/CountSelect';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index';

class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            selectPokemnType: '',
            selectType: ''
        };
        this.updateSearch = this.updateSearch.bind(this);
        this.updateSelectPokemonType = this.updateSelectPokemonType.bind(this);
    }

    updateSearch (event)  {
        this.setState({
            search: event.target.value,
            selectType: 'search'
        });
    }


    updateSelectPokemonType (event) {
        this.setState({
            selectType: '',
            selectPokemnType: event.target.value
        });
    }

    render() {
        let filtretedByTypes = [];
        if (this.props.state.getData.payload) {
            for (let i = 0; i < this.props.state.getData.payload.length; i++) {
                if (filtretedByTypes.indexOf(this.props.state.getData.payload[i].info.data.types[0].type.name) === -1) {
                    filtretedByTypes.push(this.props.state.getData.payload[i].info.data.types[0].type.name);
                }
            }
        }

        let filtretedByTypesList = filtretedByTypes.map((item, index) => <option key={index} className="option" value={item}>{item}</option>);


        let filteredPokemonForShow;
        if (this.props.state.getData.payload) {
            if (this.state.selectPokemnType !== 'all' || '') {
                filteredPokemonForShow = this.props.state.getData.payload.filter((type) => type.info.data.types[0].type.name.indexOf(this.state.selectPokemnType) !== -1);
            } else {
                filteredPokemonForShow = this.props.state.getData.payload;
            }
        }

        return (
            <div className="row pokemon_container">
                <div className="col-12 searchWrraper d-flex justify-content-between">
                    <input value={this.state.search} onChange={this.updateSearch} className="search" type="search" placeholder="SEARCH" />
                    <CountSelect loadPokemons={this.props.loadPokemons} offsetValue={this.props.state.getData.offsetValue} limitValue={this.props.state.getData.limitValue || 30} limit={this.props.limit} />
                    <select onChange={this.updateSelectPokemonType} className="select">
                        <option value="all">All</option>
                        {filtretedByTypesList}
                    </select>
                </div>

                {this.props.state.getData.payload && filteredPokemonForShow.slice(0,this.props.state.getData.limitValue).filter((pokemon) => pokemon.name.indexOf(this.state.search) !== -1).map((item) => <Pokemon
                    key={item.info.data.id}
                    name={item.info.data.name}
                    avatar={item.info.data.sprites.front_default}
                    type={item.info.data.types[0].type.name}
                    attributes={item.info.data.abilities[0].ability.name}
                />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state
    };
};

export default connect(mapStateToProps, actionCreators)(PokemonList);


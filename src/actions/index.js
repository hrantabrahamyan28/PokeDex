import axios from 'axios';
import { GET_POKEMONS, SPINNER, GET_LENGTH } from './types';


export function loadPokemons(offset=0, limit=30) {
    offset *= limit;
    return (dispatch) => {
        dispatch(handleLoading(true));
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit='+ limit +'&offset=' + offset)
            .then((response) => {
                dispatch(length(response.data.results.length));
                let requestCount = 0;
                response.data.results.forEach((element, index) => {
                    axios.get(element.url).then(info => {
                        response.data.results[index]['info'] = info;
                        requestCount++;
                        if (requestCount === response.data.results.length) {
                            dispatch(handleLoading(false));
                        }
                        dispatch(getPokemon(response, requestCount));
                    });
                });
            });
    };
}

export function getPokemon(response, requestCount) {
    return {
        type: GET_POKEMONS,
        payload: response.data.results,
        loadLine: requestCount,
        pagecount: response.data.count
    };
}

export function handleLoading(status) {
    return {
        type: SPINNER,
        payload: status
    };
}

export function length(length) {
    return {
        type: GET_LENGTH,
        length
    };
}

export function limit(offset,limitValue) {
    return {
        type: 'GETLIMIT',
        limitValue
    };
}

export function offset(offsetValue,limit) {
    return {
        type: 'GETOFFSET',
        offsetValue
    };
}




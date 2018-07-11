import { GET_POKEMONS, SPINNER, GET_LENGTH } from '../actions/types';

const getData = (state = {}, action) => {
    const { type, payload, loadLine, pagecount, length, limitValue, offsetValue } = action;
    switch (type) {
    case GET_POKEMONS:
        return {
            ...state,
            payload,
            loadLine,
            pagecount
        };
    case SPINNER:
        return {
            ...state,
            loading: payload
        };
    case GET_LENGTH:
        return {
            ...state,
            length

        };
    case 'GETLIMIT':
        return {
            ...state,
            limitValue
        };
    case 'GETOFFSET':
        return {
            ...state,
            offsetValue
        };
    default:
        return {
            ...state
        };
    }
};

export default getData;
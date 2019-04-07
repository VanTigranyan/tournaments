import actionTypes from '../types/tournament.action-types';

export const getTournaments = (key) => {
    return {
        type: actionTypes.getSearchResults,
        payload: key,
    }
};

export const getTournamentsSuccess = (tournaments) => {
    return {
        type: actionTypes.getSearchResultsSuccess,
        payload: tournaments,
    }
};

export const getToutnamentsfail = (errors) => {
    console.log(errors);
    return {
        type: actionTypes.getSearchResultsFail,
        payload: errors,
    }
};

export const removeSearchResults = {
    type: actionTypes.removeSearchResults,
};

export const selectTournament = (idx) => {
    return {
        type: actionTypes.selectTournament,
        payload: idx,
    }
};

export const removeTournament = (idx) => {
    return {
        type: actionTypes.removeTournament,
        payload: idx,
    }
};

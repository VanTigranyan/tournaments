import produce from 'immer';
import { setAutoFreeze } from "immer";
import actionTypes from '../types/tournament.action-types';

setAutoFreeze(false);


export const initState = {
    tournaments: null,
    selectedTournaments: [],
    pending: false,
    error: null,
};

export const tournamentReducer = (state = initState, action) => {
    const { type, payload } = action;
    return produce(state, draft => {
        switch (type) {
            case actionTypes.getSearchResults:
                draft['pending'] = true;
                break;
            case actionTypes.getSearchResultsSuccess:
                draft['pending'] = false;
                draft['tournaments'] = payload.length? payload[0].documents : null;
                break;
            case actionTypes.getSearchResultsFail:
                draft['pending'] = false;
                draft['error'] = payload;
                break;
            case actionTypes.removeSearchResults:
                draft['tournaments'] = null;
                break;
            case actionTypes.selectTournament:
                const selected = draft['tournaments'].find(item => item.id === payload);
                const found = draft['selectedTournaments'].find(item => item.id === selected.id);
                if (!found) {
                    draft['selectedTournaments'].push(selected);
                }
                break;
            case actionTypes.removeTournament:
                draft['selectedTournaments'].splice(payload, 1);
                break;
            default:
                break;
        }
    })
};
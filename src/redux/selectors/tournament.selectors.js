import { createSelector } from 'reselect';

export const getTournamentState = state => state.tournamentReducer;

export const tournamentsSelector = createSelector(
    getTournamentState,
    state => state.tournaments
);

export const getPendingStatus = createSelector(
    getTournamentState,
    state => state.pending
);

export const getSelectedTournaments = createSelector(
    getTournamentState,
    state => state.selectedTournaments
);

export const errorsSelector = createSelector(
    getTournamentState,
    state => state.error
);
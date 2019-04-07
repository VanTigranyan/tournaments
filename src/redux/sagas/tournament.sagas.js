import { call, put, takeLatest } from 'redux-saga/effects';

import actionTypes from '../types/tournament.action-types';

import { getSearchResult } from "../service";
import { getTournamentsSuccess, getToutnamentsfail } from "../actions/tournament.actions";

export function* searchTournamentSaga() {
    yield takeLatest(actionTypes.getSearchResults, searchTournamentByKey);
}

export function* searchTournamentByKey(action) {
    try {
        const res = yield call(getSearchResult, action.payload);
        yield put(getTournamentsSuccess(res.data));
    } catch (e) {
        console.log(e);
        yield put(getToutnamentsfail(e.response.data.errors || e));
    }
}
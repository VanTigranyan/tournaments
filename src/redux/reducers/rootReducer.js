import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { tournamentReducer } from "./tournament.reducer";

const rootPersistConfig = {
   key: 'root',
   storage: storage,
   blacklist: ['tournamentReducer']
};

const tournamentPersistConfig = {
   key: 'tournamentReducer',
   storage: storage,
   blacklist: ['tournaments, error']
};

const rootReducer = combineReducers({
   tournamentReducer: persistReducer(tournamentPersistConfig, tournamentReducer)
});


export default persistReducer(rootPersistConfig, rootReducer);

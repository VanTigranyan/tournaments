import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/rootReducer';
import {searchTournamentSaga} from "./sagas/tournament.sagas";

//import Service from './service';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            sagaMiddleware,
        )
    ));

sagaMiddleware.run(searchTournamentSaga);

export const persistor = persistStore(store);

// Service.setAuthorizationToken(store);

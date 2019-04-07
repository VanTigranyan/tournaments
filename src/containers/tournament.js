import React, {Component} from "react";
import {connect} from "react-redux";
import {
    getTournaments,
    removeSearchResults,
    removeTournament,
    selectTournament
} from '../redux/actions/tournament.actions';
import {getPendingStatus, getSelectedTournaments, tournamentsSelector} from '../redux/selectors/tournament.selectors';
import SearchForm from '../components/search-form';
import TournamentList from '../components/tournament-list';

class Tournament extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    rTournament = (idx) => {
        const res = window.confirm('Do you wanna unselect this item?');
        if (res) {
            this.props.removeTournament(idx);
        }
    };

    render() {
        const {tournaments,
            getTournaments,
            pending,
            selected,
            selectTournament,
            removeSearchResults,
        } = this.props;

        return (
            <React.Fragment>
                <SearchForm
                    tournaments={tournaments}
                    pending={pending}
                    getTournaments={getTournaments}
                    selectTournament={selectTournament}
                    removeSearchResults={removeSearchResults}
                />
                <TournamentList
                    tournaments={selected}
                    removeTournament={this.rTournament}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tournaments: tournamentsSelector(state),
        pending: getPendingStatus(state),
        selected: getSelectedTournaments(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTournaments: (key) => dispatch(getTournaments(key)),
        selectTournament: (idx) => dispatch(selectTournament(idx)),
        removeTournament: (idx) => dispatch(removeTournament(idx)),
        removeSearchResults: () => dispatch(removeSearchResults),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);
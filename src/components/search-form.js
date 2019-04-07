import React, {PureComponent} from 'react';
import {Card, Image, Search} from 'semantic-ui-react';

export default class SearchForm extends PureComponent {

    getTournaments = (event) => {
        const key = event.target.value;
        if (key.length >= 2) {
            this.props.getTournaments(key);
        }
    };

    handleResultSelect = (e, {result}) => {
        console.log(e);
        this.props.selectTournament(result.id);
    };

    handleSearchChange = (e, {value}) => {
        e.persist();
        this.getTournaments(e);
    };

    handleOnBlur = (e) => {
        e.persist();
        this.props.removeSearchResults();
    };

    resultRenderer(item) {
        return (
            <Card style={{cursor: 'pointer', width: '100%'}}>
                <Card.Content>
                    <Image floated='right' size='mini' src={item.image}/>
                    <Card.Header>{item.title}</Card.Header>
                    <Card.Meta>{`Score: ${item.score}`}</Card.Meta>
                    <Card.Description>
                        {item.description}
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }


    render() {
        const {
            tournaments,
            pending,
        } = this.props;
        return (
            <div>
                <Card style={{width: '100%'}}>
                    <div style={{width: '100%'}}>
                        <Search
                            loading={pending}
                            onResultSelect={this.handleResultSelect}
                            onSearchChange={this.handleSearchChange}
                            onBlur={e => this.handleOnBlur(e)}
                            results={tournaments}
                            size={'small'}
                            input={'text'}
                            fluid
                            resultRenderer={this.resultRenderer}
                            className='search'
                        />
                    </div>
                </Card>
            </div>
        );
    }
}
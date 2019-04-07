import React, {PureComponent} from 'react';
import {Card, Input, Image} from 'semantic-ui-react';

export default class SearchForm extends PureComponent {

    getTournaments = (event) => {
        const key = event.target.value;
        if (key.length >= 2) {
            this.props.getTournaments(key);
        }
    };

    render() {
        const {
            tournaments,
            pending,
            getTournaments,
            selectTournament,
            removeSearchResults,
        } = this.props;
        return (
            <div>
                <Card style={{width: '100%'}}>
                    <Card.Content>
                        <Card.Header>
                            <Input icon='search'
                                   placeholder='Search for tournaments...'
                                   style={{width: '100%'}}
                                   loading={pending}
                                   onChange={this.getTournaments}
                            />
                        </Card.Header>
                        {
                            tournaments ? (
                                <Card.Description>
                                    {
                                        tournaments && tournaments.length ? (
                                            <Card.Group>
                                                {
                                                    tournaments && tournaments.map((item, i) => {
                                                        return (
                                                            <Card style={{cursor: 'pointer'}} key={i} onClick={() => selectTournament(i)}>
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
                                                    })
                                                }
                                            </Card.Group>
                                        ) : (
                                            <h4>
                                                Sorry no Tournaments!!!
                                            </h4>
                                        )
                                    }
                                </Card.Description>
                            ) : null
                        }
                    </Card.Content>
                </Card>
            </div>
        );
    }
}
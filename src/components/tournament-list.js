import React, {PureComponent} from 'react';
import {Card, Image, Header} from "semantic-ui-react";

export default class TournamentList extends PureComponent {

    render() {
        const { tournaments, removeTournament } = this.props;
        return (
            <div>
                <Card style={{width: '100%'}}>
                    <Card.Content>
                        <Card.Header>
                            <Header as='h1'>
                                Selected Tournaments
                            </Header>
                        </Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <Card.Group style={{justifyContent: 'center'}}>
                            {
                                tournaments.length ? (
                                    tournaments && tournaments.map((item, i) => {
                                        return (
                                            <Card key={i}
                                                  className='dismiss-parent'
                                                  onClick={() => removeTournament(i)}>
                                                <Card.Content>
                                                    <Image floated='right' size='tiny' src={item.image}/>
                                                    <Card.Header>{item.title}</Card.Header>
                                                    <Card.Meta>{`Score: ${item.score}`}</Card.Meta>
                                                    <Card.Description>
                                                        {item.description}
                                                    </Card.Description>
                                                </Card.Content>
                                            </Card>
                                        );
                                    })
                                ) : (
                                    <Header as='h4'>
                                        Sorry, there is no Tournaments!
                                    </Header>
                                )
                            }
                        </Card.Group>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}
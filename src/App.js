import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm2 from './AddPlayerForm2';


class App extends Component {

    state = {
        players: [
            {
                name: "Sona",
                score: 0,
                id: 1
            },
            {
                name: "Devon",
                score: 0,
                id: 2
            },
            {
                name: "Tex",
                score: 0,
                id: 3
            },
            {
                name: "James",
                score: 0,
                id: 4
            }

        ]
    };


    //Player id counter
    prevPlayerId = 4;

    handleScoreChange = (index, delta) => {
        this.setState( prevState => ({
                score: prevState.players[index].score += delta
        }));
    }

    handleAddPlayer = (name) => {
        this.setState( prevState => {
            return {
                players: [
                    ...this.state.players,
                    {
                        name,
                        score: 0,
                        id: this.prevPlayerId += 1,
                    }
                ]
            };
        });

    }


    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter( p => p.id !== id )
            };
        });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header
                players={ this.state.players } />
                {/* Player list */}
                { this.state.players.map( (player, index) =>
                    <Player
                        score={ player.score }
                        name={ player.name }
                        id={ player.id }
                        key={ player.id.toString() }
                        index={ index }
                        changeScore={ this.handleScoreChange }
                        removePlayer={ this.handleRemovePlayer }
                    />
                )}
                <AddPlayerForm2 addPlayer={ this.handleAddPlayer }/>
            </div>
        )
    }
}



export default App;

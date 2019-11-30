import React from 'react';
import Header from './Header';
import Player from './Player';


class App extends React.Component {

    state = {
        players: [
            {
                name: "Sona",
                id: 1
            },
            {
                name: "Devon",
                id: 2
            },
            {
                name: "Tex",
                id: 3
            },
            {
                name: "James",
                id: 4
            }

        ]
    };


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
                <Header title="Scoreboard" totalPlayers={ this.state.players.length } />
                {/* Player list */}
                { this.state.players.map( player =>
                    <Player
                        name={ player.name }
                        id={ player.id }
                        key={ player.id.toString() }
                        removePlayer={ this.handleRemovePlayer }
                    />
                )}
            </div>
        )
    }
}



export default App;

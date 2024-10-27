import React, { useEffect, useState } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const PlayerList = ({ selectedPlayers, onToggleSelection }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-1">
            {players.map(player => {
                const isSelected = selectedPlayers.some((selected) => selected.playerId === player.playerId);
               return <PlayerCard isSelected={isSelected} player={player} onToggleSelection={onToggleSelection}/>
            })}
        </div>
    );
};

export default PlayerList;

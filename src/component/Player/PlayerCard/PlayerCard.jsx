import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdFlag } from "react-icons/io";

const PlayerCard = ({ player, isSelected, onToggleSelection }) => {
    
  

    return (
        <div key={player.playerId} className="border rounded-lg p-4 shadow-lg">
            <img
                src={player.image}
                alt={player.name}
                className="w-full max-h-[250px] object-cover mx-auto rounded-md mb-4"
            />
            <h3 className="text-xl font-bold flex items-center gap-2">
                <FaUserCircle /> {player.name}
            </h3>
            <div className='flex justify-between'>
                <p className="text-gray-500 flex items-center gap-2">
                    <IoMdFlag /> {player.country}
                </p>
                <p className="text-sm text-black bg-gray-700 bg-opacity-20 px-2 py-1 rounded">
                    {player.role}
                </p>
            </div>
            <div className='flex items-center justify-between gap-2 space-y-4'>
                <p className="text-sm text-gray-400">{player.battingType}</p>
                <p className="text-sm text-gray-400">{player.bowlingType}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className="text-lg font-bold mt-1">Bidding Price: ${player.biddingPrice}</p>
                <button
                    onClick={() => onToggleSelection(player)}
                    className={`mt-2 py-1 px-4 rounded ${isSelected ? 'bg-gray-400 ' : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                >
                    {isSelected ? 'Player Selected' : 'Choose Player'}
                </button>
            </div>
        </div>
    );
};

export default PlayerCard;
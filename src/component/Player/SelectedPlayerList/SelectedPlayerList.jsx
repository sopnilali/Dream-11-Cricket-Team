import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const SelectedPlayerList = ({ selectedPlayers, onRemovePlayer , onAddMorePlayers }) => {
    return (
        <div>
      <div className="space-y-4 relative ">
        <h2 className="text-2xl font-bold   -top-16 mt-1">Selected Player ({selectedPlayers.length}/6)</h2>
        {selectedPlayers.length > 0 ? selectedPlayers.map((player) => (
          <div key={player.playerId} className="flex flex-row items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
            <div className='flex items-center gap-4'>
            <img
              src={player.image}
              alt={player.name}
              className="w-24 h-24 rounded-full mb-2 object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">{player.name}</h3>
            <p className="text-gray-600">{player.role}</p>
            <p className="text-gray-800 font-bold">Price: {player.biddingPrice} Coins</p>
            </div>
            </div>
          
            <button
              onClick={() => onRemovePlayer(player)}
              className="mt-2 bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
            >
              <MdDeleteForever />
            </button>
          </div>
        )) : <h2 className='text-center text-2xl'>Player Not Selected</h2>}
        <button onClick={onAddMorePlayers} className=" bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg border-2 border-yellow-500 hover:bg-yellow-500">
          Add More Players
        </button>
      </div>
    </div>
    );
};

export default SelectedPlayerList;
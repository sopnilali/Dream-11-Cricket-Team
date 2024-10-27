import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header/Header';
import HeroSection from './component/HeroSection/HeroSection';
import Newsletter from './component/Newsletter/Newsletter';
import PlayerList from './component/Player/PlayerList/PlayerList';
import SelectedPlayerList from './component/Player/SelectedPlayerList/SelectedPlayerList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './component/Footer/Footer';

function App() {
  const [userMoney, setUserMoney] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]); // Track selected players
  const [activeTab, setActiveTab] = useState('available'); // Track active tab

  useEffect(() => {
    localStorage.setItem('userMoney', JSON.stringify(userMoney));
  }, [userMoney]);

  // Load selected players from localStorage on mount
  useEffect(() => {
    const savedPlayers = JSON.parse(localStorage.getItem('selectedPlayers')) || [];
    setSelectedPlayers(savedPlayers);
  }, []);


  // Save selected players to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('selectedPlayers', JSON.stringify(selectedPlayers));
  }, [selectedPlayers]);

  // Function to increase coins
  const earnCoins = () => {
    setUserMoney(prevMoney => prevMoney + 100); // Add 100 coins each time button is clicked
    toast.success(`You earned 100 coins!`); // Show toast notification
  };

  
  // Function to add or remove players and adjust userMoney
const togglePlayerSelection = (player) => {
  // Check if the player is already selected
  if (selectedPlayers.some((p) => p.playerId === player.playerId)) {
    toast.warning("Player already selected!");
    return; // Terminate the function if the player is already selected
  }

  // Check if the selected players have reached the limit (6 players)
  if (selectedPlayers.length >= 6) {
    toast.warning("You cannot select more than 6 players!");
    return; // Terminate the function if the selected players reach the limit
  }

  // Check if the user has enough coins to select the player
  if (userMoney < player.biddingPrice) {
    toast.error("You don't have enough coins to select this player!");
    return;
  }

  // Proceed with selecting the player
  setSelectedPlayers((prevSelected) => [...prevSelected, player]);
  setUserMoney((prevMoney) => prevMoney - player.biddingPrice);
  toast.success(`${player.name} has been selected!`);
};

  const removePlayer = (player) => {
    setSelectedPlayers((prevSelected) => {
      setUserMoney((prevMoney) => prevMoney + player.biddingPrice); // Refund the player's price
      return prevSelected.filter((p) => p !== player);
    });
    toast.success(`${player.name} has been removed from your selection.`);
  };

  return (
    <>
      <div className='container mx-auto'>
        <Header userMoney={userMoney} />
        <HeroSection claimCoin={earnCoins}  />
        <div className="container mx-auto mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl  font-bold">
          {activeTab === 'available' ? 'Available Players' : ``}
          </h2>
          <div className="space-x-2 flex ">
            <button
              className={`py-2 px-4 rounded ${activeTab === 'available' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('available')}
            >
              Available
            </button>
            <button
              className={`py-2 px-4 rounded ${activeTab === 'selected' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('selected')}
            >
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>

        {activeTab === 'available' ? (
              <PlayerList
                selectedPlayers={selectedPlayers}
                onToggleSelection={togglePlayerSelection}
              />
            ) : (
              <SelectedPlayerList
                selectedPlayers={selectedPlayers}
                onRemovePlayer={removePlayer}
                onAddMorePlayers={() => setActiveTab('available')}
              />
            )}
      </div>
        <Newsletter />
        <Footer/>
        <ToastContainer 
          position="top-right"
          autoClose={5000}/>
      </div>
    </>
  )
}

export default App

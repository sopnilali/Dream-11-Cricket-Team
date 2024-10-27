import React from 'react';
import bannerMain from '../../assets/banner-main.png'
const HeroSection = ({ claimCoin }) => {
  return (
    <div
      className="hero bg-no-repeat bg-black bg-opacity-90 bg-cover overflow-hidden min-h-[550px] rounded-lg"
      style={{
        backgroundImage: "url(https://i.ibb.co/sJz4QJn/bg-shadow.png)",
      }}>
      <div className="hero-content text-neutral-content text-center">
        <div className=" space-y-3 ">
          <div className='flex justify-center items-center'>
            <img src={bannerMain} alt="" />
          </div>
          <p className="mb-5 text-5xl font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
          </p>
          <p className='text-3xl font-medium'>Beyond Boundaries Beyond Limits</p>
          <div className='hover:border  hover:inline-block p-1 hover:rounded-lg'><button onClick={() => claimCoin()} className=" bg-yellow-400  text-black font-semibold py-2 px-4 rounded-lg border-2 border-yellow-500 hover:bg-yellow-500">Claim Free Credit</button></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
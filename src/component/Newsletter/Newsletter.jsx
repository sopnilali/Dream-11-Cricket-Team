import React from 'react';

const Newsletter = () => {
    return (
      <div class="flex items-center justify-center  mt-32 -mb-40 lg:-mb-40 p-1  ">
      <div class="bg-gradient-to-r from-blue-100  to-orange-100 py-20 rounded-lg shadow-lg w-full max-w-[400px] xs:max-w-[500px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[1200px]">
        <h2 class="text-xl font-semibold text-center mb-4 text-gray-800">Subscribe to our Newsletter</h2>
        <p class="text-center text-gray-600 mb-6">Get the latest updates and news right in your inbox!</p>
        <div class="flex justify-center gap-2 ">
          <input type="email" placeholder="Enter your email" class=" py-2 px-2 rounded-l-lg"/>
          <button class=" bg-gradient-to-r py-2 px-2 from-pink-500 to-yellow-500  text-white rounded-r-lg">Subscribe</button>
        </div>
      </div>
    </div>
    );
};

export default Newsletter;
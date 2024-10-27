import React from 'react';

import footerLogo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className='bg-black pb-24'>
           <div className='flex justify-center pt-48 flex-row  '>
            <img className='md:max-w-[120px] pb-16  max-w-[100px]  object-contain' src={footerLogo} alt="" />
           </div>
           <footer className=" footer flex justify-evenly flex-col md:flex-row text-white  flex-wrap px-7">
  <nav className='max-w-[20%]'>
    <h6 className="footer-title">Services</h6>
    <p className=''>We are a passionate team dedicated to providing the best services to our customers.</p>
  </nav>
  <nav>
    <h6 className="footer-title">Quick Link</h6>
    <li><a href='/' className="link link-hover">Home</a></li>
    <li><a className="link link-hover">Service</a></li>
    <li><a className="link link-hover">About</a></li>
    <li><a className="link link-hover">Contact</a></li>
  </nav>
  <form>
    <h6 className="footer-title">Subscribe</h6>
    <p>Subscribe to our newsletter for the latest updates.</p>
    <div class="flex justify-center border-none outline-none join ">
          <input type="email" placeholder="Enter your email" class="input input-bordered join-item rounded-l-lg"/>
          <button class="btn bg-gradient-to-r p-1 from-pink-500 to-yellow-500 join-item text-white rounded-r-lg">Subscribe</button>
        </div>
  </form>
</footer>
        </div>
    );
};

export default Footer;
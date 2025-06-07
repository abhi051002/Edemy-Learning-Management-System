import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        <div className="flex flex-col md:items-start items-center w-full">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <span className="text-white text-2xl font-bold">Edemy</span>
          </div>
          <p className="mt-6 text-center md:text-left text-lg text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            ratione neque, dignissimos tenetur cum nihil veniam quod dolorem
            asperiores quas?
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white text-xl mb-5">Company</h2>
          <ul className="flex flex-row md:flex-col w-full items-center md:items-start text-sm md:text-lg justify-between text-white/80 space-y-0 md:space-y-2 ">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5 text-xl">
            Subscribe to our newsletter
          </h2>
          <p className="text-lg text-white/80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-lg"
            />
            <button className="bg-blue-600 w-24 h-9 text-white rounded hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-lg text-white/60">
        Copyright {new Date().getFullYear()} &copy; Abhijit. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

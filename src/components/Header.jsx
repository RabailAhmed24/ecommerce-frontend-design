import React from 'react';
import Logo from '../assets/Layout/Brand/logo-colored.png';
import { User, MessageCircle, Heart, ShoppingCart, Menu } from 'lucide-react';

const Header = () => {
  return (
    <>
      {/* --- Main Search & Brand Header --- */}
      <header className="flex h-[86px] w-full shrink-0 items-center justify-between border-b border-gray-200 bg-[#FFFFFF] px-[30px]">
        
        {/* Brand Logo Container */}
        <div className="flex h-[46px] w-[150px] shrink-0 items-center">
          <img 
            src={Logo} 
            alt="Brand Logo" 
            className="h-full w-full object-contain"
          />
        </div>

        {/* Search Input and Category Selection Form */}
        <div className="flex h-[40px] w-[665px] items-center overflow-hidden rounded-[6px] border-2 border-[#0D6EFD] bg-white">
          <input 
            type="text" 
            placeholder="Search" 
            className="h-full w-[65%] bg-transparent px-[15px] text-[14px] text-gray-700 outline-none"
          />
          <div className="flex h-full w-[20%] items-center justify-center border-l border-r border-gray-200 bg-gray-50">
            <select className="h-full w-full cursor-pointer bg-transparent px-2 text-[13px] text-gray-600 outline-none">
              <option>All category</option>
              <option>Categories</option>
            </select>
          </div>
          <button className="flex h-full w-[15%] shrink-0 items-center justify-center bg-[#0D6EFD] text-[14px] font-medium text-white transition-colors hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* User Action Navigation Icons */}
        <div className="flex h-[41px] w-[228px] shrink-0 items-center justify-between text-[12px] text-[#6C757D]">
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#0D6EFD]">
            <User size={20} strokeWidth={1.8} />
            <span>Profile</span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#0D6EFD]">
            <MessageCircle size={20} strokeWidth={1.8} />
            <span>Message</span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#0D6EFD]">
            <Heart size={20} strokeWidth={1.8} />
            <span>Orders</span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#0D6EFD]">
            <ShoppingCart size={20} strokeWidth={1.8} />
            <span>My cart</span>
          </div>
        </div>
      </header>

      {/* --- Primary Navigation Links Bar (Solid White Background Per Figma) --- */}
      <nav className="flex h-[40px] w-full shrink-0 items-center justify-between border-b border-gray-200 bg-white px-[30px] text-[14px] font-medium text-[#212529]">
        <div className="flex items-center gap-[24px]">
          <div className="flex cursor-pointer items-center gap-[6px] hover:text-[#0D6EFD]">
            <Menu size={16} />
            <span>All category</span>
          </div>
          <span className="cursor-pointer font-normal hover:text-[#0D6EFD]">Hot offers</span>
          <span className="cursor-pointer font-normal hover:text-[#0D6EFD]">Gift boxes</span>
          <span className="cursor-pointer font-normal hover:text-[#0D6EFD]">Projects</span>
          <span className="cursor-pointer font-normal hover:text-[#0D6EFD]">Menu item</span>
          <span className="cursor-pointer font-normal hover:text-[#0D6EFD]">Help</span>
        </div>

        {/* Localization & Language/Currency Settings */}
        <div className="flex items-center gap-[32px] text-[14px] text-[#495057]">
          
          {/* Currency Dropdown Selector */}
          <div className="group relative flex cursor-pointer items-center gap-1 font-normal hover:text-[#0D6EFD]">
            <span>English, USD</span>
            <span className="text-[8px] opacity-60">▼</span>
            <div className="absolute right-0 top-full z-50 mt-1 hidden w-[130px] rounded border border-gray-200 bg-white text-[13px] text-gray-700 shadow-md group-hover:block">
              <div className="px-3 py-2 hover:bg-gray-50">English, USD</div>
              <div className="px-3 py-2 hover:bg-gray-50">English, EUR</div>
            </div>
          </div>

          {/* Shipping Country Dropdown With Flag */}
          <div className="group relative flex cursor-pointer items-center gap-[6px] font-normal hover:text-[#0D6EFD]">
            Ship to 
            <span className="flex items-center gap-[5px] rounded-[3px] border border-gray-300 bg-gray-100 px-[6px] py-[2px] text-[11px] font-bold text-[#212529]">
              <span>🇩🇪</span>
              <span>DE</span>
              <span className="text-[8px] opacity-60">▼</span>
            </span>
            
            <div className="absolute right-0 top-full z-50 mt-1 hidden w-[150px] rounded border border-gray-200 bg-white text-[13px] text-gray-700 shadow-md group-hover:block">
              <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50">
                <span>🇺🇸</span> United States
              </div>
              <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50">
                <span>🇩🇪</span> Germany
              </div>
              <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50">
                <span>🇬🇧</span> United Kingdom
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
'use client'
import { useState } from 'react';
import React from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center rounded-md shadow-sm px-4 py-2 transition-colors bg-[#FEE69A] text-sm font-medium text-gray-700 hover:bg-[#e0c987] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          Half
          <svg
            className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
              }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 011.414 1.414l-4 4.5a1 1 0 01-1.414 0l-4-4.5a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#FEE69A] ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 transtion-colors hover:bg-[#e0c987]"
              role="menuitem"
            >
              Half
            </a>
          </div>
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 transtion-colors hover:bg-[#e0c987]"
              role="menuitem"
            >
              Full
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

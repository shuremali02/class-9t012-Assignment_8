/* From Uiverse.io by mRcOol7 */
import React from 'react';

export default function LinkedInButton() {
  return (
    <div className="group relative inline-block">
      <button className="focus:outline-none">
        <svg
          viewBox="0 0 24 24"
          className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-500"
          fill="currentColor"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8.3 20.2H5.1V9h3.2v11.2zM6.7 7.6c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c0 1-.8 1.8-1.8 1.8zM20.2 20.2h-3.2v-5.5c0-1.3 0-3-1.8-3-1.8 0-2 1.4-2 2.9v5.6h-3.2V9h3.1v1.5h.1c.4-.7 1.4-1.5 3-1.5 3.2 0 3.8 2.1 3.8 4.8v6.4z"
          ></path>
        </svg>
      </button>
      <span
    className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-black bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100"
    >Linkedin</span
  >
      
    </div>
  );
}

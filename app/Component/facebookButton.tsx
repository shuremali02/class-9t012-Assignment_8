/* From Uiverse.io by mRcOol7 */
import React from 'react';

export default function FacebookButton() {
  return (
    <div className="group relative inline-block">
      <button className="focus:outline-none">
        <svg
          viewBox="0 0 24 24"
          className="transform transition-transform duration-300 hover:scale-125 rounded-md hover:text-blue-500"
          fill="currentColor"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.462.099 2.793.143v3.24h-1.916c-1.505 0-1.796.715-1.796 1.763v2.31h3.591l-.467 3.622h-3.124V24h6.127C23.407 24 24 23.406 24 22.674V1.326C24 .593 23.407 0 22.675 0z"
          ></path>
        </svg>
      </button>
      <span
    className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-black bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100"
    >Facebbok</span
  >
    </div>
  );
}
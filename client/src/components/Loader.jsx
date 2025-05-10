import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Aquí puedes agregar tu SVG o imagen de carga */}
      <svg className="animate-spin h-12 w-12 text-blue-800" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M12 2a10 10 0 0 0-1 19.9V20a10 10 0 0 0 0-18z"></path>
      </svg>
    </div>
  );
};

export default Loader;

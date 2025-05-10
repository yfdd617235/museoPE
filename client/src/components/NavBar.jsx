// import { useState } from "react";
// import { Link } from "react-scroll"; // Para desplazamiento suave
// import {
//   Bars3Icon,
// } from "@heroicons/react/24/outline";
// import { useTranslation } from 'react-i18next';

// function NavBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <nav className="bg-white h-16 fixed top-0 w-full py-0 z-50 shadow-md">
//       <div className="flex justify-between items-center h-full px-5 lg:px-10">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <Link to="home" smooth={true} duration={1000} className="cursor-pointer">
//             <div className="h-10 lg:h-14">
//               <img
//                 src={`${import.meta.env.BASE_URL}logoIC.webp`}
//                 alt="PPI"
//                 className="h-full w-auto object-contain"
//               />
//             </div>
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex space-x-7 items-center">
//           {['whoweare', 'ourcustomers', 'services'].map((section) => (
//             <Link
//               key={section}
//               to={section}
//               smooth={true}
//               duration={1000}
//               className="cursor-pointer font-bold hover:text-blue-900 relative group"
//             >
//               {t(`navbar.${section}`)}
//               <span className="block h-[2px] w-0 bg-blue-900 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           ))}
//           <Link
//             to="contact"
//             smooth={true}
//             duration={1000}
//             className="cursor-pointer text-white hover:bg-blue-900 bg-slate-800 rounded-md p-1 px-2"
//           >
//             {t('navbar.contact')}
//           </Link>
//           <div className="flex items-center space-x-2">
//             <button onClick={() => changeLanguage('en')} className="w-5 h-5">
//               <img src={`${import.meta.env.BASE_URL}enFlag.png`} alt="English" />
//             </button>
//             <button onClick={() => changeLanguage('es')} className="w-5 h-5">
//               <img src={`${import.meta.env.BASE_URL}esFlag.png`} alt="Español" />
//             </button>
//           </div>
//         </div>

//         {/* Hamburger Menu Icon for Small Screens */}
//         <div className="lg:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             <Bars3Icon className="h-8 w-8 text-gray-800" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
//           <div className="flex flex-col space-y-4 px-8 py-6">
//             {['whoweare', 'ourcustomers', 'services'].map((section) => (
//               <Link
//                 key={section}
//                 to={section}
//                 smooth={true}
//                 duration={1000}
//                 onClick={closeMenu}
//                 className="font-bold hover:text-blue-900"
//               >
//                 {t(`navbar.${section}`)}
//               </Link>
//             ))}
//             <Link
//               to="contact"
//               smooth={true}
//               duration={1000}
//               onClick={closeMenu}
//               className="text-white bg-slate-800 rounded-md p-1 px-2 hover:bg-blue-900"
//             >
//               {t('navbar.contact')}
//             </Link>
//             <div className="flex items-center space-x-2">
//               <button onClick={() => changeLanguage('en')}>
//                 <img src={`${import.meta.env.BASE_URL}enFlag.png`} alt="English" className="w-6 h-6" />
//               </button>
//               <button onClick={() => changeLanguage('es')}>
//                 <img src={`${import.meta.env.BASE_URL}esFlag.png`} alt="Español" className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default NavBar;


import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useTranslation } from 'react-i18next';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencia al menú móvil

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Detectar clics fuera del menú
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white h-16 fixed top-0 w-full py-0 z-50 shadow-md">
      <div className="flex justify-between items-center h-full px-5 lg:px-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="home" smooth={true} duration={1000} className="cursor-pointer">
            <div className="h-10 lg:h-14">
              <img
                src={`${import.meta.env.BASE_URL}logoIC.webp`}
                alt="PPI"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-7 items-center">
          {['about', 'services', 'clients', 'contact' ].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={1000}
              className="cursor-pointer font-bold hover:text-blue-900 relative group"
            >
              {t(`navbar.${section}`)}
              <span className="block h-[2px] w-0 bg-blue-900 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <div className="flex items-center space-x-3">
            <button onClick={() => changeLanguage('en')} className="w-5 h-5">
              <img src={`${import.meta.env.BASE_URL}enFlag.png`} alt="English" />
            </button>
            <button onClick={() => changeLanguage('es')} className="w-5 h-5">
              <img src={`${import.meta.env.BASE_URL}esFlag.png`} alt="Español" />
            </button>
          </div>
        </div>

        {/* Hamburger Menu Icon for Small Screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Bars3Icon className="h-8 w-8 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <div className="flex flex-col space-y-4 px-8 py-6">
            {['about', 'services', 'clients', 'contact'].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={1000}
                onClick={closeMenu}
                className="font-bold hover:text-blue-900"
              >
                {t(`navbar.${section}`)}
              </Link>
            ))}
            <div className="flex items-center space-x-3">
              <button onClick={() => changeLanguage('en')}>
                <img src={`${import.meta.env.BASE_URL}enFlag.png`} alt="English" className="w-6 h-6" />
              </button>
              <button onClick={() => changeLanguage('es')}>
                <img src={`${import.meta.env.BASE_URL}esFlag.png`} alt="Español" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

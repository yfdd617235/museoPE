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
    <nav className="h-16 fixed top-0 w-full py-0 z-50 shadow-md bg-[#F5E9D6] text-base md:text-lg" >

      <div className="flex justify-between items-center h-full px-5 lg:px-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="home" smooth={true} duration={1000} className="cursor-pointer">
            
              <img
                src={`${import.meta.env.BASE_URL}logoPE.png`}
                alt="MUSEO DE PABLO"
                className="h-20 w-auto object-contain"
              />
            
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-7 items-center">
          {['history', 'gallery', 'legacy', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={1000}
              className="cursor-pointer font-bold relative group text-[#633F20]"
              style={{
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#BD612E')}
              onMouseLeave={(e) => (e.target.style.color = '')}
            >

              {t(`navbar.${section}`)}
              <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-[#BD612E]" ></span>
            </Link>
          ))}
          <div className="flex items-center space-x-5">
            <button onClick={() => changeLanguage('en')} className="w-6 h-6">
              <img src={`${import.meta.env.BASE_URL}enFlag.png`} alt="English" />
            </button>
            <button onClick={() => changeLanguage('es')} className="w-6 h-6">
              <img src={`${import.meta.env.BASE_URL}esFlag.png`} alt="Español" />
            </button>
          </div>
        </div>

        {/* Hamburger Menu Icon for Small Screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Bars3Icon className="h-8 w-8 text-[#C47630]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="lg:hidden absolute top-16 left-0 w-full bg-[#F5E9D6] shadow-lg z-50">
          <div className="flex flex-col space-y-4 px-8 py-6">
            {['history', 'gallery', 'legacy', 'contact'].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={1000}
                onClick={closeMenu}
                className="cursor-pointer font-bold text-[#633F20] hover:text-[#BD612E]"
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

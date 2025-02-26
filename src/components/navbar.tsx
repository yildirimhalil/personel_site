import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-300 to-blue-300 dark:from-gray-800 dark:to-blue-900 p-4 rounded-2xl shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Furkan</h1>

        <div className="hidden md:flex space-x-6">
          {["Anasayfa", "Teknolojiler", "Hizmetlerimiz", "Projeler", "İletişim"].map((item) => (
            <a key={item} href="#" className="hover:text-blue-600">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <div className="flex items-center space-x-1 bg-gray-200 dark:bg-gray-700 p-2 rounded-lg cursor-pointer">
            <span role="img" aria-label="flag">
              🇹🇷
            </span>
            <span>Türkçe</span>
            <IoIosArrowDown />
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <GiHamburgerMenu size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 flex flex-col items-center">
          {["Anasayfa", "Teknolojiler", "Hizmetlerimiz", "Projeler", "İletişim"].map((item) => (
            <a key={item} href="#" className="block hover:text-blue-600">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

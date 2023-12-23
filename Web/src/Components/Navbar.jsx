import React, { useState } from "react";
import { links } from "../Data/Links";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BiHealth, BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeLink =
    "flex items-center gap-2 pl-4 pt-3 pb-2.5 rounded-lg text-sky-700 text-md m-2";
  const normalLink =
    "flex items-center gap-2 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-light-gray m-2";

  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="flex items-center justify-between p-2 mx-auto">
        <div className="flex items-center">
          <BiHealth className="mr-3 text-3xl text-blue-500" />
          <span className="text-2xl font-semibold text-gray-800">HealthAI</span>
        </div>
        <button
          className="p-2 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <BiX className="text-4xl" />
          ) : (
            <BiMenu className="text-4xl" />
          )}
        </button>
        {isMobileMenuOpen && (
          <div className="w-full md:hidden">
            <ul className="flex flex-col space-y-2">
              {links.map((item) => (
                <li key={item.id}>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.path}`}
                      key={link.name}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {link.icon}
                      <span className="capitalize">{t(link.name)}</span>
                    </NavLink>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-row md:space-x-1">
            {links.map((item) => (
              <li className="flex" key={item.id}>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.path}`}
                    key={link.name} // Add a key here
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span>{t(link.name)}</span>
                  </NavLink>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

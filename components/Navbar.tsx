'use client';
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { Link } from 'react-scroll';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEM: Array<NavItem> = [
  {
    label: 'Home',
    page: 'home',
  },
  {
    label: 'Key Accomplishments',
    page: 'accomplishments',
  },
  {
    label: 'Areas of Expertise',
    page: 'about',
  },
  {
    label: 'Work Experience',
    page: 'experience',
  },
];

export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-3.5 sm:px-6 bg-white/95 backdrop-blur-md shadow-sm fixed top-0 z-50 dark:bg-stone-900/95 dark:border-b dark:border-stone-800">
      <div className="max-w-3xl md:max-w-5xl mx-auto justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3.5 sm:py-4">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              <div className="md:py-2 md:block">
                <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                  Hubbaka Ghoyati
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                aria-label="Toggle Menu"
                onClick={() => setNavbar(!navbar)}
                className="p-1.5 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-stone-800 transition"
              >
                {navbar ? <IoMdClose size={26} /> : <IoMdMenu size={26} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-4 mt-2 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-3 pt-3 md:pt-0 md:flex md:space-x-6 md:space-y-0 border-t border-neutral-200/60 dark:border-stone-800 md:border-0">
              {NAV_ITEM.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      'block py-1.5 md:py-0 cursor-pointer font-medium text-sm sm:text-base text-neutral-700 hover:text-teal-600 dark:text-neutral-200 dark:hover:text-teal-400 transition-colors'
                    }
                    activeClass="!text-teal-600 dark:!text-teal-400 font-semibold"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={() => setNavbar(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-2 md:pt-0">
                {currentTheme === 'dark' ? (
                  <button
                    aria-label="Light Mode"
                    onClick={() => setTheme('light')}
                    className="bg-stone-800 p-2 rounded-xl text-amber-400 hover:bg-stone-700 transition"
                  >
                    <RiSunLine size={20} />
                  </button>
                ) : (
                  <button
                    aria-label="Dark Mode"
                    onClick={() => setTheme('dark')}
                    className="bg-neutral-100 p-2 rounded-xl text-neutral-700 hover:bg-neutral-200 transition"
                  >
                    <RiMoonFill size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

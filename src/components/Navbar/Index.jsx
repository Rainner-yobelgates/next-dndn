"use client"
import { useState } from 'react';
import Link from 'next/link';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import SearchBar from '../SearchBar/Index';

export default function Navbar({brands, manBrands, womanBrands, manCategories, womanCategories, fontClass}) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isFirstMainMenuOpen, setFirstMainMenuOpen] = useState(false);
  const [isSecondMainMenuOpen, setSecondMainMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({ first: null, second: null });

  const handleSubMenuToggle = (menu, index) => {
    setOpenSubMenu(prev => ({
      ...prev,
      [menu]: prev[menu] === index ? null : index
    }));
  };
  return (
    <nav className="bg-[#fff4f4] border-b border-slate-300 ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="hidden flex-1 lg:flex items-center justify-center sm:items-stretch sm:justify-start">
              <Link href="/" className={`text-2xl py-2 ${fontClass}`}>
                DNDN
              </Link>
              <div className="hidden sm:flex ml-auto space-x-4 items-center">
                  <IoSearchOutline className="pointer hover:text-slate-400" onClick={() => setSearchOpen(!searchOpen)} size={23} />
                <Link href="/cart">
                  <IoCartOutline size={23} className="pointer hover:text-slate-400" />
                </Link>
              </div>
          </div>
        
        <div className="relative flex items-center justify-between h-16 lg:h-10">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start ml-16 lg:ml-0">
              <Link href="/" className={`lg:hidden font-bold text-xl py-2 ${fontClass}`}>
                DNDN
              </Link>
              
            <div className="hidden lg:flex mx-auto space-x-4 items-center">
              <Link href="/" className="hover:text-slate-400 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/collections/new-arrival-collections" className="hover:text-slate-400 px-3 py-2 text-sm font-medium">
                New Products
              </Link>
              <Link href="/#testimoni" className="hover:text-slate-400 px-3 py-2 text-sm font-medium">
                Testimoni
              </Link>
              <div className="flex space-x-4">
                {/* First Dropdown Menu */}
                <div
                  className="relative inline-block text-left"
                  onMouseEnter={() => setFirstMainMenuOpen(true)}
                  onMouseLeave={() => setFirstMainMenuOpen(false)}
                >
                  <Link
                    className="inline-flex justify-center w-full px-3 py-2 text-sm font-medium hover:text-slate-400"
                    aria-haspopup="true"
                    aria-expanded={isFirstMainMenuOpen}
                    href={"/collections/woman-collections"}
                  >
                    Woman
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>

                  {isFirstMainMenuOpen && (
                    <div className="absolute z-10 w-56 shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-2">
                        <div
                          className="relative"
                          onMouseEnter={() => handleSubMenuToggle('first', 1)}
                          onMouseLeave={() => handleSubMenuToggle('first', null)}
                        >
                          <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                            All Woman Category
                            <svg
                              className="-mr-1 ml-2 h-5 w-5 inline"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          {openSubMenu.first === 1 && (
                            <div className="absolute left-full top-0 mt-2 w-56 shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5">
                              <div className="py-2">
                                {womanCategories?.payload.map((womanCategory, index) => {
                                  return (
                                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" key={index} href={`/collections/woman-collections?category=${womanCategory.category.name}`}>{womanCategory.category.name}</Link>
                                  )
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                        <div
                          className="relative"
                          onMouseEnter={() => handleSubMenuToggle('second', 2)}
                          onMouseLeave={() => handleSubMenuToggle('second', null)}
                        >
                          <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                            All Woman Brands
                            <svg
                              className="-mr-1 ml-2 h-5 w-5 inline"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          {openSubMenu.second === 2 && (
                            <div className="absolute left-full top-0 mt-2 w-56 shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5">
                              <div className="py-2">
                                {womanBrands?.payload.map((womanBrand, index) => {
                                    return (
                                      <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" key={index} href={`/collections/woman-collections?brand=${womanBrand.brand.name}`}>{womanBrand.brand.name}</Link>
                                    )
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Second Dropdown Menu */}
                <div
                  className="relative inline-block text-left"
                  onMouseEnter={() => setSecondMainMenuOpen(true)}
                  onMouseLeave={() => setSecondMainMenuOpen(false)}
                >
                  <Link
                    className="inline-flex justify-center w-full px-3 py-2 text-sm font-medium hover:text-slate-400"
                    aria-haspopup="true"
                    aria-expanded={isSecondMainMenuOpen}
                    href={"/collections/man-collections"}
                  >
                    Man
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>

                  {isSecondMainMenuOpen && (
                    <div className="absolute z-10 w-56 shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-2">
                        <div
                          className="relative"
                          onMouseEnter={() => handleSubMenuToggle('second', 1)}
                          onMouseLeave={() => handleSubMenuToggle('second', null)}
                        >
                          <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                            All Man Category
                            <svg
                              className="-mr-1 ml-2 h-5 w-5 inline"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          {openSubMenu.second === 1 && (
                            <div className="absolute left-full top-0 mt-2 w-56 shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5">
                              <div className="py-2">
                                {manCategories?.payload.map((manCategory, index) => {
                                  return (
                                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" key={index} href={`/collections/man-collections?category=${manCategory.category.name}`}>{manCategory.category.name}</Link>
                                  )
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                        <div
                          className="relative"
                          onMouseEnter={() => handleSubMenuToggle('second', 2)}
                          onMouseLeave={() => handleSubMenuToggle('second', null)}
                        >
                          <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                            All Man Brands
                            <svg
                              className="-mr-1 ml-2 h-5 w-5 inline"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          {openSubMenu.second === 2 && (
                            <div className="absolute left-full top-0 mt-2 w-56 shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5">
                              <div className="py-2">
                              {manBrands?.payload.map((manBrand, index) => {
                                  return (
                                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" key={index} href={`/collections/man-collections?brand=${manBrand.brand.name}`}>{manBrand.brand.name}</Link>
                                  )
                              })}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative inline-block text-left group">
                <Link
                  className="inline-flex justify-center w-full px-3 py-2 text-sm font-medium hover:text-slate-400"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href={"/collections"}
                >
                  Brands
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <div className="absolute z-10 hidden group-hover:block group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out w-56 shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-2">
                    {brands?.payload.map((brand, index) => {
                      return (
                        <Link key={index} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href={`/collections/brand-collections?brand=${brand.name}`}>{brand.name}</Link>
                      )
                    })}
                  </div>
                </div>
              </div>
              <Link href="/#faq" className="hover:text-slate-400 px-3 py-2 text-sm font-medium">
                Terms Condition & FAQ
              </Link>
            </div>
          </div>
          <div className="lg:hidden flex space-x-4 items-center">
            <IoSearchOutline className="pointer hover:text-slate-400" onClick={() => setSearchOpen(!searchOpen)} size={23} />
            <Link href="/cart">
              <IoCartOutline size={23} className="pointer hover:text-slate-400" />
            </Link>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} block lg:hidden transition-all`} id="mobile-menu">
        <div className="fixed top-0 left-0 w-1/2 h-full bg-white shadow-lg z-50 p-4">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <hr />
          <div className="flex flex-col">
            <Link href="/" className="hover:text-slate-400 px-3 py-4 text-sm font-medium">
              Home
            </Link>
            <Link href="/collections/new-arrival-collections" className="hover:text-slate-400 px-3 py-4 text-sm font-medium">
              New Products
            </Link>
            <Link href="/#testimoni" className="hover:text-slate-400 px-3 py-4 text-sm font-medium">
              Testimoni
            </Link>
              <div
                className="relative inline-block text-left"
                onMouseEnter={() => setFirstMainMenuOpen(true)}
                onMouseLeave={() => setFirstMainMenuOpen(false)}
              >
                <Link
                  className="inline-flex w-full px-3 py-4 text-sm font-medium hover:text-slate-400"
                  aria-haspopup="true"
                  aria-expanded={isFirstMainMenuOpen}
                  href={"/collections/woman-collections"}
                >
                  Woman
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                {isFirstMainMenuOpen && (
                  <div className="absolute z-10 w-56 shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-2">
                      <div
                        className="relative"
                        onMouseEnter={() => handleSubMenuToggle('first', 1)}
                        onMouseLeave={() => handleSubMenuToggle('first', null)}
                      >
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                          All Woman Category
                          <svg
                            className="-mr-1 ml-2 h-5 w-5 inline"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        {openSubMenu.first === 1 && (
                          <div className="absolute left-full top-0 mt-2 w-56 shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-2">
                              {womanCategories?.payload.map((womanCategory, index) => {
                                return (
                                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" key={index} href={`/collections/woman-collections?category=${womanCategory.category.name}`}>{womanCategory.category.name}</Link>
                                )
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                      <div
                        className="relative"
                        onMouseEnter={() => handleSubMenuToggle('second', 2)}
                        onMouseLeave={() => handleSubMenuToggle('second', null)}
                      >
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                          All Woman Brands
                          <svg
                            className="-mr-1 ml-2 h-5 w-5 inline"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        {openSubMenu.second === 2 && (
                          <div className="absolute left-full top-0 mt-2 w-56 shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-2">
                              {womanBrands?.payload.map((womanBrand, index) => {
                                  return (
                                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" key={index} href={`/collections/woman-collections?brand=${womanBrand.brand.name}`}>{womanBrand.brand.name}</Link>
                                  )
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative inline-block text-left"
                onMouseEnter={() => setSecondMainMenuOpen(true)}
                onMouseLeave={() => setSecondMainMenuOpen(false)}
              >
                <Link
                  className="inline-flex w-full px-3 py-4 text-sm font-medium hover:text-slate-400"
                  aria-haspopup="true"
                  aria-expanded={isSecondMainMenuOpen}
                  href={"/collections/man-collections"}
                >
                  Man
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                {isSecondMainMenuOpen && (
                  <div className="absolute z-10 w-56 shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-2">
                      <div
                        className="relative"
                        onMouseEnter={() => handleSubMenuToggle('second', 1)}
                        onMouseLeave={() => handleSubMenuToggle('second', null)}
                      >
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                          All Man Category
                          <svg
                            className="-mr-1 ml-2 h-5 w-5 inline"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        {openSubMenu.second === 1 && (
                          <div className="absolute left-full top-0 mt-2 w-56 shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-2">
                              {manCategories?.payload.map((manCategory, index) => {
                                return (
                                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" key={index} href={`/collections/man-collections?category=${manCategory.category.name}`}>{manCategory.category.name}</Link>
                                )
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                      <div
                        className="relative"
                        onMouseEnter={() => handleSubMenuToggle('second', 2)}
                        onMouseLeave={() => handleSubMenuToggle('second', null)}
                      >
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                          All Man Brands
                          <svg
                            className="-mr-1 ml-2 h-5 w-5 inline"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        {openSubMenu.second === 2 && (
                          <div className="absolute left-full top-0 mt-2 w-56 shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-2">
                            {manBrands?.payload.map((manBrand, index) => {
                                return (
                                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" key={index} href={`/collections/man-collections?brand=${manBrand.brand.name}`}>{manBrand.brand.name}</Link>
                                )
                            })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative inline-block text-left group">
                <Link
                  className="inline-flex w-full px-3 py-4 text-sm font-medium hover:text-slate-400"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href={"/collections/new-arrival-collections"}
                >
                  Brands
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.25 4.418a.75.75 0 01-1.08 0l-4.25-4.418a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <div className="absolute z-10 hidden group-hover:block group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out w-56 shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-2">
                    {brands?.payload.map((brand, index) => {
                      return (
                        <Link key={index} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href={`/collections/brand-collections?brand=${brand.name}`}>{brand.name}</Link>
                      )
                    })}
                  </div>
                </div>
              </div>
              <Link href="/#faq" className="hover:text-slate-400 px-3 py-4 text-sm font-medium">
                Terms Condition & FAQ
              </Link>
              <hr />
              <div className="flex justify-center pt-4 gap-5">
              <Link href={"https://api.whatsapp.com/send?phone=6281617171488&"} target="_blank"><FaWhatsapp size={25} color="#25D366" /></Link>
            <Link href={"https://www.instagram.com/dndn.luxury/"} target="_blank"><FaInstagram size={25} color="#E1306C"/></Link>
              </div>
          </div>
        </div>
      </div>

      <div className={`${searchOpen ? 'block' : 'hidden'} transition-all`} id="mobile-menu">
        <SearchBar setSearchOpen={setSearchOpen} />
      </div>
    </nav>
  );
}

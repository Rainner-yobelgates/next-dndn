"use client"
import { useState } from 'react';
import Link from 'next/link';
import { IoMdCart } from 'react-icons/io';

export default function Navbar({brands, manBrands, womanBrands, manCategories, womanCategories}) {
  
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-[#fff4f4] border-b border-slate-300 ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <Link href="/" className="font-bold py-2">
                Navbar
              </Link>
            <div className="hidden sm:flex ml-auto space-x-4 items-center">
              <Link href="/" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/collections/new-arrival-collections" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                New Products
              </Link>
              <Link href="/#testimoni" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Testimoni
              </Link>
              <details className="dropdown">
                <summary className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium btn-ghost h-[38px] min-h-0">
                  Woman
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <details className="dropdown">
                    <summary className="text-slate-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium btn-ghost h-[38px] min-h-0">
                      All Woman Category
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    {womanCategories?.payload.map((womanCategory, index) => {
                      return (
                        <li key={index}><Link href={`/collections/woman-collections?category=${womanCategory.category.name}`}>{womanCategory.category.name}</Link></li>
                      )
                    })}
                    </ul>
                  </details>
                  <details className="dropdown">
                    <summary className="text-slate-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium btn-ghost h-[38px] min-h-0">
                      All Woman Brands
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    {womanBrands?.payload.map((womanBrand, index) => {
                      return (
                        <li key={index}><Link href={`/collections/woman-collections?brand=${womanBrand.brand.name}`}>{womanBrand.brand.name}</Link></li>
                      )
                    })}
                    </ul>
                  </details>
                </ul>
              </details>
              <details className="dropdown">
                <summary className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium btn-ghost h-[38px] min-h-0">
                  Man
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <details className="dropdown">
                    <summary className="text-slate-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium btn-ghost h-[38px] min-h-0">
                      All Man Category
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    {manCategories?.payload.map((manCategory, index) => {
                      return (
                        <li key={index}><Link href={`/collections/man-collections?category=${manCategory.category.name}`}>{manCategory.category.name}</Link></li>
                      )
                    })}
                    </ul>
                  </details>
                  <details className="dropdown">
                    <summary className="text-slate-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium btn-ghost h-[38px] min-h-0">
                      All Man Brands
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    {manBrands?.payload.map((manBrand, index) => {
                      return (
                        <li key={index}><Link href={`/collections/man-collections?brand=${manBrand.brand.name}`}>{manBrand.brand.name}</Link></li>
                      )
                    })}
                    </ul>
                  </details>
                </ul>
              </details>
              <details className="dropdown">
                <summary className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium btn-ghost h-[38px] min-h-0">
                  Brands
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  {brands?.payload.map((brand, index) => {
                    return (
                      <li key={index}><Link href={`/collections/brand-collections?brand=${brand.name}`}>{brand.name}</Link></li>
                    )
                  })}
                </ul>
              </details>
              <Link href="/#faq" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Terms Condition & FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
                About
            </Link>
            <Link href="/collections/new-arrival-collections" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
              New Products
            </Link>
            <Link href="/#testimoni" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
              Testimoni
            </Link>
            <Link href="/#faq" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
              Terms Condition & FAQ
            </Link>
            <details className="dropdown block">
              <summary className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium btn-ghost h-[38px] min-h-0 w-full justify-start">
                Woman
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <details className="dropdown">
                    <summary className="text-slate-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium btn-ghost h-[38px] min-h-0">
                      All Woman Category
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    {womanCategories?.payload.map((womanCategory, index) => {
                      return (
                        <li key={index}><Link href={`/collections/woman-collections?category=${womanCategory.category.name}`}>{womanCategory.category.name}</Link></li>
                      )
                    })}
                    </ul>
                  </details>
                  <details className="dropdown">
                    <summary className="text-slate-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium btn-ghost h-[38px] min-h-0">
                      All Woman Brands
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    {womanBrands?.payload.map((womanBrand, index) => {
                      return (
                        <li key={index}><Link href={`/collections/woman-collections?brand=${womanBrand.brand.name}`}>{womanBrand.brand.name}</Link></li>
                      )
                    })}
                    </ul>
                  </details>
                </ul>
            </details>
            <details className="dropdown block">
              <summary className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium btn-ghost h-[38px] min-h-0 w-full justify-start">
                Man
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <details className="dropdown">
                    <summary className="text-slate-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium btn-ghost h-[38px] min-h-0">
                      All Man Category
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    {manCategories?.payload.map((manCategory, index) => {
                      return (
                        <li key={index}><Link href={`/collections/man-collections?category=${manCategory.category.name}`}>{manCategory.category.name}</Link></li>
                      )
                    })}
                    </ul>
                  </details>
                  <details className="dropdown">
                    <summary className="text-slate-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium btn-ghost h-[38px] min-h-0">
                      All Man Brands
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    {manBrands?.payload.map((manBrand, index) => {
                      return (
                        <li key={index}><Link href={`/collections/man-collections?brand=${manBrand.brand.name}`}>{manBrand.brand.name}</Link></li>
                      )
                    })}
                    </ul>
                  </details>
                </ul>
            </details>
            <details className="dropdown block">
              <summary className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium btn-ghost h-[38px] min-h-0 w-full justify-start">
                Brands
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {brands?.payload.map((brand, index) => {
                    return (
                      <li key={index}><Link href={`/collections/brand-collections?brand=${brand.name}`}>{brand.name}</Link></li>
                    )
                })}
              </ul>
            </details>
        </div>
      </div>
    </nav>
  );
}

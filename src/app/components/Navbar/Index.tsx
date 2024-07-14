import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-3">
            <li><Link href={''}>Home</Link></li>
            {/* <li><Link href={''}></Link>New Products</li>
            <li><Link href={''}></Link>Testimoni</li>
            <li><Link href={''}></Link>Terms Conditions & FAQ</li> */}
            {/* <li>
                <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                </ul>
                </details>
            </li> */}
            </ul>
            <ul className="menu menu-horizontal px-3">
                <li><Link href={''}>New Products</Link></li>
            </ul>
            <ul className="menu menu-horizontal px-3">
                <li><Link href={''}>Testimoni</Link></li>
            </ul>
            <ul className="menu menu-horizontal px-3">
                <li><Link href={''}>FAQ</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
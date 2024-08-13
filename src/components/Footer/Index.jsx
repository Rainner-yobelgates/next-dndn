import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

const Footer = ({ fontClass }) => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
            <Link href="/" className={`text-2xl py-2 ${fontClass}`}>
                DNDN
            </Link>
            <p>
                DNDN Luxury
            <br />
                Fo of branded items since 2019
            </p>
        </aside>
        <nav>
            <h6 className="footer-title">Links</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">New Products</a>
            <a className="link link-hover">Testimoni</a>
            <a className="link link-hover">Terms Condition & FAQ</a>
        </nav>
        <nav>
            <h6 className="footer-title">Contact Us</h6>
            <p className="w-80 link link-hover">Stay connected with us through our Contact Us page for any inquiries or further support</p>
            <div className="flex justify-center gap-5 pt-3">
                <FaFacebook size={25} color="#1877F2" />
                <FaInstagram size={25} color="#E1306C"/>
                <FaTiktok size={25} />
            </div>
        </nav>
    </footer>
  )
}

export default Footer
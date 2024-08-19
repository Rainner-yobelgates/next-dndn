import Whatsapp from '@/utils/Whatsapp'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

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
            <Link href={"https://api.whatsapp.com/send?phone=6281617171488&"} target="_blank"><FaWhatsapp size={36} color="#25D366" /></Link>
            <Link href={"https://www.instagram.com/dndn.luxury/"} target="_blank"><FaInstagram size={36} color="#E1306C"/></Link>
            </div>
        </nav>
        <div className="fixed bottom-4 right-4 w-26 h-26 rounded-full overflow-hidden z-5">
            <Link href="https://api.whatsapp.com/send?phone=6281617171488" target="_blank" rel="noopener noreferrer">
            <Image
                src="/wa.png"
                alt="WhatsApp"
                width={50}
                height={50}
                className="w-full h-full object-cover"
            />
            </Link>
        </div>
    </footer>
  )
}

export default Footer
import Image from 'next/image'; // Jika Anda menggunakan Next.js
import Link from 'next/link';

const Whatsapp = () => {
  return (
    <div className="fixed bottom-4 right-4 w-36 h-36 rounded-full overflow-hidden z-50">
        <Link href={"https://api.whatsapp.com/send?phone=6281617171488&"} target="_blank" rel="noopener noreferrer">
            <Image
            src="/wa.png" // Path ke gambar logo WhatsApp
            alt="WhatsApp"
            width={50} // Ukuran gambar
            height={50} // Ukuran gambar
            className="w-full h-full object-cover"
            />
        </Link>
    </div>
  );
};

export default Whatsapp;

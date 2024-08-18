import Image from 'next/image'; // Jika Anda menggunakan Next.js
import Link from 'next/link';

const Whatsapp = () => {
  return (
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
  );
};

export default Whatsapp;

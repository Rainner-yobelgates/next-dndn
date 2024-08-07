import React from 'react'

const Faq = () => {
  return (
    <div className="mx-5">
      <div className="collapse collapse-plus bg-base-200 mb-3 p-1">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-md lg:text-lg font-semibold">Apakah items di DNDN Luxury original? Bagaimana dengan kualitasnya?</div>
        <div className="collapse-content text-sm lg:text-md">
            <p>
              Yes, items yang kami jual di produksi dari berbagai negara yang berbeda. 
              <br /> Karena DNDN Luxury merupakan direct importer since 2019,
              jadi kami berani claim bahwa items yang kami jual adalah Original Factory Outlet. <br /><br />
              And don't worry, meskipun sisa pabrik, bukan berarti kami sembarangan kirim. <br /> 
              Ada cacat, kami tukarkan terlebih dahulu supaya barang yg kamu terima dalam keadaan bagus & layak pakai. <br /> 
              Kami juga mensortir barang yang kita ambil dari Factory Outlet, pasti diberikan yang paling terbaik untuk customer. <br /> <br />
                <b>NOTES : Barang yang defectnya terlalu parah tidak akan kami jual.</b>
            </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-3 p-1">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-md lg:text-lg font-semibold">Apakah items di DNDN Luxury original?</div>
        <div className="collapse-content text-sm lg:text-md">
            <p>Yes. Semua items di DNDN Luxury adalah Original Factory Outlet / Sisa manufacture </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-3 p-1">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-md lg:text-lg font-semibold">Apa itu barang factory outlet?</div>
        <div className="collapse-content text-sm lg:text-md">
            <p>Overstock pabrik yang tidak masuk store, barang yang tidak lulus Quality Control, sehingga tidak bisa dijual di retail store 
            <br />(Store yang ada di Mall Indonesia).</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-3 p-1">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-md lg:text-lg font-semibold">Apa itu barang factory outlet?</div>
        <div className="collapse-content text-sm lg:text-md">
            <p>
              Overstock pabrik yang tidak masuk store, barang yang tidak lulus Quality Control, sehingga tidak bisa dijual di retail store 
              <br />(Store yang ada di Mall Indonesia). <br />
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Tidak selalu mulus 100% seperti barang yang dibeli di butik atau store di mall.</li>
              <li>Label tag dan price tag bisa salah dan berbeda dengan store, serta terkadang terdapat perbedaan dalam kualitas material, hardware, dan jahitan.</li>
              <li>Barang tidak selalu mendapatkan Dust Bag, Paperbag, dan Card.</li>
              <li>Karena barang factory outlet tidak lulus QC, items di DNDN Luxury tidak bisa dibandingkan secara keseluruhan dengan butik atau store di mall.</li>
              <li>Last season product.</li>
            </ul>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-3 p-1">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-md lg:text-lg font-semibold">Penting untuk dibaca!</div>
        <div className="collapse-content text-sm lg:text-md">
            <p>
              Jika customer super perfeksionis, detail dan ingin mendapatkan barang yang 100% sama dengan Official Store atau ragu dengan barang FO, sangat dianjurkan untuk membeli langsung di retail store (di mall)
              Tidak bisa meminta refund bila compare barang DNDN dengan barang di store, karena jelas
              tidak bisa 100% sama
              Produk FO tidak lolos QC untuk
              masuk ke retail store. Sehingga produk DNDN tidak bisa dibandingkan langsung head to head dengan barang di retail store
              <br /><br />
              <b>All sales are final ya</b> 😊
              Target market DNDN adalah buyer yang memang mencari harga tas branded original yang lebih terjangkau.
              And DNDN Luxury is PERFECT online shop for you to shopping the original branded items ❤️
            </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-3 p-1">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-md lg:text-lg font-semibold">Market Place!</div>
        <div className="collapse-content text-sm lg:text-md">
          <p>
            <b>TOKOPEDIA :</b><br />
            Untuk yang ingin melakukan pembayaran via TOKPED bisa langsung click link yang ada bio Instagram kami.
            Bagi yang ingin menggunakan CC, bisa melalui TOKPED & Jika barang yang kamu inginkan belum tersedia di TOKPED, silahkan chat admin kami untuk uploud barang tsb.
            <br /><br />
              <b>SHOPEE :</b><br /> 

              Untuk yang ingin melakukan pembayaran via Shopee bisa langsung click link yang ada bio Instagram kami / search DNDN.Luxury
              Di shopee juga bisa menggunakan CC dan shopeepay later.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-3 p-1">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-md lg:text-lg font-semibold">Aturan & Pengembalian!</div>
        <div className="collapse-content text-sm lg:text-md">
        <ul className="list-disc list-inside mt-2">
          <li>Barang yang sudah dipesan tidak bisa dibatalkan dengan alasan apapun.</li>
          <li>Membeli artinya setuju dengan penjelasan yang kami berikan di highlight "FAQ FO".</li>
          <li>Barang yang bisa diretur adalah barang reject yang sangat parah.</li>
          <li>Wajib memberikan video dengan jelas.</li>
          <li>Hanya menerima keluhan maksimal 1x24 jam setelah barang diterima.</li>
          <li>Barang yang ingin diretur harus dalam kondisi yang sama pada saat dikembalikan.</li>
          <li>Proses refund dimulai setelah barang sampai dan telah dilakukan pengecekan oleh kami.</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Faq
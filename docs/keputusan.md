# Dokumen Keputusan & Spesifikasi Desain: Dahayu Home Spa

Dokumen ini merupakan ringkasan keputusan hasil sesi wawancara mendalam (*grill-me*) terkait perancangan *landing page* profil bisnis jasa perawatan dan spa panggilan ke rumah (*home service*) **Dahayu Home Spa**.

---

## 1. Profil Bisnis & Target Pengguna

* **Nama Bisnis**: Dahayu Home Spa
* **Model Bisnis**: Jasa kecantikan dan perawatan tubuh panggilan ke rumah khusus wanita (*home service*).
* **Target Pengguna**:
  * Wanita dan ibu rumah tangga yang ingin relaksasi privat tanpa perlu keluar rumah/antre di salon.
  * Ibu hamil (*pregnancy care*) yang membutuhkan relaksasi aman dan nyaman.
  * Calon pengantin (*pre-wedding package*) yang mempersiapkan hari istimewa.
  * Wanita karier dengan mobilitas tinggi yang membutuhkan fleksibilitas waktu di akhir pekan atau sepulang kerja.
* **Kontak Resmi**:
  * **WhatsApp Admin**: `08996537070` (`https://wa.me/628996537070`)
  * **Instagram**: `@dahayu.homespa` (`https://instagram.com/dahayu.homespa`)

---

## 2. Hasil Keputusan Sesi Grill-Me

| No | Topik Keputusan | Pilihan yang Disepakati | Detail Penjelasan |
|---|---|---|---|
| 1 | **Area Layanan & Jam Operasional** | **Bangkalan & sekitarnya** \| **Setiap hari: 09.00 - 17.00 WIB** | Melayani pemanggilan ke rumah area Bangkalan (Madura) dan sekitarnya setiap hari dengan reservasi H-1 atau beberapa jam sebelum treatment. |
| 2 | **Konten & Kurasi Treatment** | **Kurasi langkah autentik & lengkap (tanpa harga)** | Menyusun rincian langkah perawatan profesional khas spa Indonesia secara detail tanpa menampilkan harga rupiah sama sekali. |
| 3 | **CTA WhatsApp pada Kartu Treatment** | **Pesan otomatis (*prefilled message*) spesifik** | Tombol "Tanya Treatment via WA" di tiap kartu otomatis menyertakan nama perawatan yang sedang dilihat agar pelanggan tidak perlu mengetik manual. |
| 4 | **Palet Warna & Identitas Visual** | **Warm Earth Tone & Nude Mocha** | Mengikuti identitas asli logo dan Instagram Dahayu Home Spa: latar *warm linen/krem* (`#FDFBF7`/`#F8F4EE`), teks cokelat moka pekat/deep chestnut (`#2E1E17`), aksen warm caramel/amber (`#C87D4A`), serta kartu bernuansa nude dengan aksen lengkungan (*arch*). |
| 5 | **Navigasi & Aksesibilitas Ponsel** | **Floating WhatsApp & Sticky Navbar** | Menyediakan *floating WhatsApp button* di kanan bawah layar dan *sticky header* dengan tombol aksi cepat untuk reservasi instan kapan saja. |
| 6 | **Penyajian Langkah Perawatan di Mobile** | **Interaktif Expand/Collapse (*Lihat Rincian*)** | Tinggi kartu seragam di layar ponsel; rincian langkah perawatan dapat dibuka/ditutup secara elegan tanpa memanjangkan layar secara berlebihan. |
| 7 | **Aset Visual & Fotografi Spa** | **Foto Kurasi High-Resolution (Tone Hangat)** | Menempatkan foto bertema spa relaksasi berkualitas tinggi dengan bingkai lengkung khas spa (*arch frame*) di Hero section, visual banner representatif per kategori treatment, serta foto pendukung higienitas pada seksi keunggulan. |

---

## 3. Struktur Halaman & Fitur Antarmuka

### 1. Header & Navigasi (*Sticky Navbar*)
* Logo dan identitas Dahayu Home Spa.
* Efek transparan dengan *backdrop blur* saat digulir.
* Navigasi tautan cepat (*smooth scroll*): Keunggulan, Treatment, Cara Pesan, FAQ.
* Tombol CTA cepat: "Reservasi".

### 2. Hero Section
* *Badge*: "Home Service Khusus Wanita – Area Bangkalan & Sekitarnya".
* *Headline*: Hangat, menenangkan, dan elegan mengenai kemewahan relaksasi spa profesional di rumah sendiri.
* *Sub-headline*: Layanan terapis berpengalaman datang langsung ke hunian pelanggan.
* *Visual Showcase (Arch Frame)*: Foto spa relaksasi mewah beresolusi tinggi dengan bingkai kubah lengkung lembut (*arch shape*) dan bayangan hangat menenangkan.
* *Dual Call-to-Action (CTA)*:
  * Tombol Utama: "Reservasi Sekarang" (membuka WhatsApp dengan sapaan hangat).
  * Tombol Sekunder: "Lihat Treatment" (*smooth scroll* menuju katalog).

### 3. Keunggulan Utama (4 Nilai Jual)
1. **Terapis Wanita Berpengalaman**: Terlatih, ramah, tersertifikasi, dan memahami anatomi pemijatan relaksasi wanita & ibu hamil.
2. **Higienis & Alat Steril**: Matras khusus, linen/kain baru bersih terbungkus rapi untuk tiap pelanggan, serta sterilisasi alat sebelum digunakan.
3. **Produk Alami & Berkualitas**: Lulur rempah tradisional alami, minyak aromaterapi murni, dan produk skincare terdaftar BPOM.
4. **Privasi & Kenyamanan Rumah**: Tanpa macet, tanpa antre publik, privasi terjaga seutuhnya di dalam kamar tidur sendiri.

### 4. Katalog Treatment (Kategori Tab & Card Interaktif)
* **Aturan Keras**: Tidak ada harga rupiah sama sekali. Tidak menggunakan kata "Menu" (menggunakan istilah "Treatment" atau "Perawatan").
* **4 Kategori Tab (dengan Visual Representatif)**:
  1. **Paket Spa**: Foto pemijatan tubuh tradisional dan lulur rempah aromatik.
  2. **Pregnancy Care**: Foto relaksasi ibu hamil yang nyaman dan menenangkan.
  3. **Face & Eye Treatment**: Foto perawatan facial bersih dengan handuk hangat dan masker.
  4. **Body & Miss V Care**: Foto botol minyak esensial herbal, rempah lulur, dan ratus botanical.
* **Fitur Interaksi Kartu**:
  * Tinggi kartu proporsional dan seragam.
  * Tombol **"Lihat Rincian Perawatan"** (*toggle expand/collapse*) untuk menampilkan tahapan langkah.
  * Tombol **"Tanya Treatment via WA"** dengan pesan WhatsApp dinamis sesuai nama paket yang dipilih.

### 5. Cara Reservasi (4 Alur Pemesanan Mudah)
1. **Pilih Treatment**: Tentukan paket perawatan yang diinginkan dari katalog.
2. **Hubungi WhatsApp**: Chat admin untuk konsultasi kebutuhan dan kesediaan jadwal.
3. **Konfirmasi Waktu & Alamat**: Kirimkan tanggal, jam pemesanan, dan alamat rumah di Bangkalan & sekitarnya.
4. **Terapis Hadir ke Rumah**: Terapis wanita tiba membawa seluruh perlengkapan spa lengkap dan siap melayani.

### 6. Area Jangkauan & Jam Operasional
* Penjelasan area jangkauan: Kabupaten Bangkalan dan wilayah sekitarnya.
* Jam operasional: Setiap hari (Senin–Minggu), pukul 09.00 – 17.00 WIB.
* Rekomendasi reservasi H-1 atau beberapa jam sebelumnya untuk memastikan ketersediaan terapis.

### 7. Tanya Jawab Umum (FAQ - 4 Poin Kunci)
1. **Persiapan di Rumah**: Ruangan ber-AC/berventilasi baik, akses listrik, dan sedikit ruang untuk menggelar matras spa lipat.
2. **Kebersihan & Keamanan**: Terapis membawa matras, kain penutup baru, serta kimono sekali pakai demi higienitas optimal.
3. **Metode Pembayaran**: Pembayaran dapat dilakukan secara transfer non-tunai (QRIS / Transfer Bank) atau tunai setelah perawatan selesai.
4. **Konfirmasi & Reschedule**: Fleksibilitas ubah jadwal maksimal 3-4 jam sebelum waktu kedatangan terapis.

### 8. Footer & Persistent Floating Action
* Tautan media sosial Instagram `@dahayu.homespa` dan kontak WhatsApp `08996537070`.
* Catatan hak cipta Dahayu Home Spa.
* **Floating WhatsApp Button**: Tombol melayang di pojok kanan bawah ponsel dengan label "Chat Kami" untuk mempermudah pemesanan instan dari bagian halaman mana pun.

---

## 4. Batasan & Panduan Konten (*Content Guidelines*)

* **Gaya Bahasa**: Bahasa Indonesia natural, feminin, santun, hangat, dan menenangkan. Menghindari bahasa kaku, jargon teknis, dan frasa klise AI.
* **Diksi**: Menggunakan kata "Treatment" atau "Perawatan", tidak menggunakan istilah "Menu".
* **Ketiadaan Harga**: Seluruh katalog, kartu, dan FAQ tidak memuat angka nominal harga; pelanggan diarahkan langsung ke WhatsApp untuk konsultasi paket dan harga promo terkini.
* **Kenyamanan Ponsel (*Mobile-First*)**: Target sentuhan tombol nyaman (*touch-friendly*), tata letak bersih, dan pembacaan teks nyaman di layar smartphone.

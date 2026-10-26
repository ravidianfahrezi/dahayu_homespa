---
name: Dahayu Home Spa
description: Landing page profil layanan spa dan perawatan tubuh panggilan ke rumah khusus wanita di Bangkalan
colors:
  linen: "#FAF6F0"
  linen-warm: "#F4EDE2"
  nude-card: "#F8F3ED"
  nude-border: "#E8DDCE"
  moka: "#2D1D16"
  moka-soft: "#635047"
  moka-light: "#947E73"
  caramel: "#C87D4A"
  caramel-dark: "#B16837"
  caramel-light: "#F7EBE2"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)"
    fontWeight: 600
    lineHeight: "1.3"
  body:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.6"
  label:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: "1.4"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  arch: "48px 48px 16px 16px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.caramel}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-secondary:
    backgroundColor: "{colors.nude-card}"
    textColor: "{colors.moka}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  card-arch:
    backgroundColor: "{colors.nude-card}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: Dahayu Home Spa

## Overview
Sistem desain Dahayu Home Spa mengusung konsep visual Nature Distilled dan Warm Organic Luxury. Pendekatan ini memadukan kehangatan material alami, ketenangan personal, dan estetika feminin Nusantara. Desain dirancang dengan filosofi mobile-first yang mengutamakan ruang bernapas lega (airy density scale 2/10), interaksi sentuh nyaman, dan atmosfer spa yang menenangkan langsung dari layar ponsel.

## Colors
Palet warna diadaptasi langsung dari identitas logo dan Instagram Dahayu Home Spa:
- Linen (`#FAF6F0`): Latar belakang kanvas utama. Memberikan kehangatan alami seperti kain linen organik dan menghilangkan rasa silau dari warna putih murni.
- Linen Warm (`#F4EDE2`): Latar belakang alternatif untuk seksi transisi (Features dan FAQ) guna menciptakan kedalaman visual halus tanpa batas garis keras.
- Nude Card (`#F8F3ED`): Warna dasar modul kartu perawatan dan kontainer informasi.
- Nude Border (`#E8DDCE`): Garis batas struktural tipis (1px) yang membingkai kartu dengan lembut.
- Deep Mocha (`#2D1D16`): Warna tipografi utama (WCAG AAA dengan kontras 12.8:1 terhadap linen). Mewakili kehangatan biji kopi moka dan tanah subur.
- Soft Mocha (`#635047`): Warna teks paragraf dan keterangan tahapan perawatan (WCAG AA dengan kontras 5.8:1).
- Light Mocha (`#947E73`): Keterangan sekunder, metadata, dan penanda waktu operasional.
- Warm Caramel (`#C87D4A`): Aksen interaktif utama pada tombol reservasi, indikator aktif, dan tautan WhatsApp.
- Dark Caramel (`#B16837`): Status hover dan sentuhan aktif pada tombol utama.
- Light Caramel (`#F7EBE2`): Latar belakang pill badge dan chip kategori yang lembut.

## Typography
Kombinasi dua jenis rupa huruf untuk menyeimbangkan keanggunan tradisional dan keterbacaan modern:
- Display dan Headline (Playfair Display): Rupa huruf serif yang memiliki lengkungan anggun dan proporsi klasik. Digunakan khusus untuk judul utama, nama paket perawatan, dan tajuk seksi.
- Body dan Label (Plus Jakarta Sans): Rupa huruf humanist sans-serif dengan legibilitas prima pada layar ponsel beresolusi tinggi maupun rendah. Memiliki bukaan huruf yang jernih dengan line-height lega (1.6) untuk menghadirkan rasa membaca yang santai.

## Layout
- Mobile-First Breakpoints: Tata letak dibangun dari lebar layar 375px ponsel, kemudian ditingkatkan ke tablet (768px) dan desktop (1024px+).
- Spasi Lega (Airy Rhythm): Jarak vertikal antar seksi py-16 md:py-24 memberikan ruang jeda yang luas agar halaman tidak terasa padat atau terburu-buru.
- Kategori Geser Horizontal (Swipeable Tabs): Tab navigasi kategori pada layar ponsel dapat digulir horizontal dengan mulus (touch swipeable) dengan target sentuh minimal 44px.

## Elevation & Depth
- Tonal Layering: Mengutamakan perbedaan warna bidang lembut (tonal layering) daripada bayangan hitam pekat.
- Soft Ambient Shadow: Bayangan lembut bernuansa hangat karamel (shadow-md shadow-caramel/10 hingga shadow-xl shadow-caramel/15) khusus untuk kartu aktif, foto berbingkai, dan tombol floating WhatsApp.
- Glassmorphism Selektif: Efek kaca buram halus hanya diterapkan pada satu tempat yaitu sticky navbar (backdrop-blur-md bg-linen/90 border-b border-nude-border/60).

## Shapes
- Bentuk Kubah Lengkung (Spa Arch): Bingkai lengkung khas arsitektur spa diterapkan pada foto utama Hero (rounded-t-[3.5rem] rounded-b-2xl) untuk menonjolkan visual relaksasi.
- Pill Geometry: Seluruh tombol aksi utama, badge informasi, dan tab kategori menggunakan bentuk pill (rounded-full) yang ramah sentuhan jari.
- Sudut Kartu Organik: Kartu perawatan menggunakan radius lengkung nyaman (rounded-2xl atau rounded-3xl) dengan border tipis 1px.

## Components
- Sticky Navigation: Baris navigasi yang tetap berada di atas layar dengan tombol aksi cepat reservasi ke WhatsApp.
- Hero Showcase: Menampilkan judul yang hangat, subjudul puitis menenangkan, dua tombol aksi, dan foto berbingkai kubah lengkung.
- Treatment Cards dengan Accordion: Kartu katalog berukuran seragam dengan tombol "Lihat Rincian Perawatan" untuk membuka tahapan langkah tanpa membuat halaman menjadi terlalu panjang di ponsel.
- Floating WhatsApp Button: Tombol mengambang di pojok kanan bawah layar (fixed bottom-6 right-6 z-50) dengan ikon WhatsApp dan teks "Chat Kami".

## Do's and Don'ts
### Do's
- Gunakan selalu istilah "Treatment" atau "Perawatan".
- Jaga kontras teks selalu berada di atas standar WCAG AA (minimal 4.5:1).
- Pastikan setiap tombol mengarah ke tautan nyata (WhatsApp atau navigasi seksi yang ada).
- Berikan jeda ruang bernapas yang cukup antar elemen.
- Gunakan foto bernuansa hangat dengan pencahayaan alami.

### Don'ts
- Dilarang mencantumkan nominal harga rupiah di katalog.
- Dilarang menggunakan istilah "Menu".
- Dilarang menggunakan tanda baca em dash di seluruh teks antarmuka.
- Dilarang membuat tombol atau tautan palsu yang tidak berfungsi.
- Dilarang menggunakan efek neon, bayangan hitam kasar, atau palet ungu kebiruan sintetis.
- Dilarang memasukkan ulasan pelanggan atau statistik palsu.

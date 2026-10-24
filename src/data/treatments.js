export const TREATMENT_CATEGORIES = [
  {
    id: 'paket-spa',
    label: 'Paket Spa',
    description: 'Rangkaian relaksasi tubuh menyeluruh dari ujung kepala hingga kaki untuk memulihkan kesegaran fisik dan ketenangan pikiran di rumah Anda.',
    treatments: [
      {
        id: 'spa-reguler',
        name: 'Spa Reguler',
        badge: 'Favorit Relaksasi',
        duration: 'Sekitar 120 Menit',
        summary: 'Kombinasi pijat relaksasi tubuh tradisional dipadukan dengan lulur scrub alami dan masker badan bernutrisi.',
        steps: [
          'Foot bath garam aromaterapi & pijat refleksi kaki ringan',
          'Pijat relaksasi tubuh tradisional (minyak zaitun esensial aromatik)',
          'Lulur scrub tradisional beras rempah / bengkoang meluruhkan sel kulit mati',
          'Masker tubuh bernutrisi untuk menjaga kelembapan kulit',
          'Penyeka handuk hangat dan aplikasi body lotion pelembap'
        ]
      },
      {
        id: 'spa-eksklusif',
        name: 'Spa Eksklusif',
        badge: 'Perawatan Premium',
        duration: 'Sekitar 150 Menit',
        summary: 'Perawatan menyeluruh dengan totok aura wajah, pijat relaksasi mendalam, lulur boreh rempah, dan masker susu kolagen.',
        steps: [
          'Herbal floral foot bath dengan kelopak mawar dan aromaterapi murni',
          'Pijat relaksasi tubuh mendalam (deep relaxing massage)',
          'Body scrub lulur boreh rempah hangat / cokelat mewah',
          'Masker tubuh pencerah susu & kolagen murni',
          'Totok aura wajah untuk meredakan ketegangan otot dan melancarkan sirkulasi',
          'Pembersihan handuk hangat higienis & aplikasi body serum'
        ]
      },
      {
        id: 'spa-pranikah',
        name: 'Spa Pranikah (Bridal Spa)',
        badge: 'Spesial Calon Pengantin',
        duration: 'Sekitar 180 Menit',
        summary: 'Ritual kecantikan lengkap untuk calon mempelai wanita: relaksasi tubuh, pencerah kulit, totok wajah berseri, dan ratus V-spa rempah.',
        steps: [
          'Rendaman kaki aromaterapi bunga mawar segar',
          'Signature bridal massage relaksasi lembut seluruh tubuh',
          'Body lulur mutiara pencerah & pengangkat sel kulit mati',
          'Body bleaching & brightening milk mask bernutrisi tinggi',
          'Totok aura wajah & masker wajah herbal glowing alami',
          'Ratus V-Spa herbal rebus tradisional untuk kesegaran dan kebersihan area kewanitaan',
          'Aplikasi body serum bridal & floral mist harum tahan lama'
        ]
      }
    ]
  },
  {
    id: 'pregnancy-care',
    label: 'Pregnancy Care',
    description: 'Perawatan khusus ibu hamil yang ditangani secara hati-hati dengan posisi ergonomis aman serta produk alami yang lembut bagi ibu dan janin.',
    treatments: [
      {
        id: 'pregnancy-satuan',
        name: 'Treatment Ibu Hamil Satuan',
        badge: 'Layanan Terarah',
        duration: '60 - 90 Menit',
        summary: 'Pilihan terapi terfokus untuk kebutuhan spesifik ibu hamil: pijat pegal punggung, pereda kaki bengkak, atau lulur lembut aman bumil.',
        steps: [
          'Gentle Pregnancy Massage (posisi miring dengan penopang bantal empuk)',
          'Soothing Foot & Leg Relief Massage untuk meredakan kram betis',
          'Gentle Body Scrub Oat & Susu alami tanpa gesekan keras',
          'Totok Wajah Relaksasi Bumil untuk meredakan sakit kepala ringan dan stres'
        ]
      },
      {
        id: 'pregnancy-paket-1',
        name: 'Paket Pregnancy 1 (Relaksasi Ringan Bumil)',
        badge: 'Pelepas Lelah',
        duration: 'Sekitar 90 Menit',
        summary: 'Perawatan relaksasi esensial untuk memulihkan energi dan meredakan ketegangan tubuh calon ibu.',
        steps: [
          'Rendaman kaki air hangat garam aromaterapi aman bumil',
          'Pijat relaksasi lembut khusus area punggung, pinggang, dan bahu',
          'Totok wajah relaksasi untuk menyegarkan ekspresi wajah'
        ]
      },
      {
        id: 'pregnancy-paket-2',
        name: 'Paket Pregnancy 2 (Pereda Pegal & Kaki Bengkak)',
        badge: 'Fokus Kaki & Punggung',
        duration: 'Sekitar 120 Menit',
        summary: 'Kombinasi pijat lembut seluruh tubuh dan pemijatan khusus kaki untuk memperlancar sirkulasi dan meredakan retensi cairan.',
        steps: [
          'Foot bath herbal air hangat menenangkan',
          'Full pregnancy gentle massage dengan teknik usapan lembut melingkar',
          'Pijat limfatik lembut pada betis dan telapak kaki penopang tubuh',
          'Peregangan ringan dipandu terapis berpengalaman'
        ]
      },
      {
        id: 'pregnancy-paket-3',
        name: 'Paket Pregnancy 3 (Nutrisi Kulit & Relaksasi Bumil)',
        badge: 'Kulit Lembut & Lembap',
        duration: 'Sekitar 120 Menit',
        summary: 'Relaksasi tubuh dipadukan dengan eksfoliasi lembut berbahan oat dan susu murni untuk menjaga kelembapan kulit bumil.',
        steps: [
          'Foot bath aromaterapi menenangkan',
          'Gentle body massage bumil posisi miring nyaman',
          'Lulur scrub oat & susu alami bertekstur lembut',
          'Masker pelembap tubuh yang menenangkan kulit sensitif'
        ]
      },
      {
        id: 'pregnancy-paket-4',
        name: 'Paket Pregnancy 4 (Perawatan Lengkap Calon Ibu)',
        badge: 'Rangkaian Lengkap Bumil',
        duration: 'Sekitar 150 Menit',
        summary: 'Kemewahan perawatan menyeluruh bagi ibu hamil yang mendambakan kenyamanan total fisik dan pikiran sebelum waktu persalinan.',
        steps: [
          'Foot bath floral air hangat ramah ibu hamil',
          'Full pregnancy massage nyaman dari punggung, tangan, hingga kaki',
          'Lulur susu lembut & masker badan alami penutrisi kulit',
          'Totok wajah berseri dipadukan masker pelembap alami',
          'Pijat kepala lembut untuk tidur lebih nyenyak dan tenang'
        ]
      }
    ]
  },
  {
    id: 'face-eye',
    label: 'Face & Eye Treatment',
    description: 'Perawatan wajah dan lingkar mata untuk mengembalikan kesegaran, kilau alami, dan kelentikan bulu mata tanpa rasa sakit.',
    treatments: [
      {
        id: 'facial-series',
        name: 'Facial Series',
        badge: 'Pembersihan Mendalam',
        duration: '60 - 75 Menit',
        summary: 'Pilihan perawatan wajah: Deep Cleansing, Brightening Glowing Facial, atau Anti-Acne Soothing dengan teknik higienis.',
        steps: [
          'Double cleansing pembersih lembut bebas iritasi',
          'Eksfoliasi mengangkat sel kulit mati dan pori tersumbat',
          'Pijat relaksasi wajah & totok akupresur',
          'Ekstraksi komedo higienis dengan alat steril',
          'Aplikasi serum nutrisi dan masker peel-off penyejuk kulit'
        ]
      },
      {
        id: 'add-on-treatment',
        name: 'Add-on Treatment Wajah',
        badge: 'Pelengkap Perawatan',
        duration: '30 - 45 Menit',
        summary: 'Perawatan tambahan untuk melengkapi sesi spa Anda: Totok Aura Wajah, Serum Booster Infusion, atau Neck Lifting.',
        steps: [
          'Totok Aura Wajah 14 titik meridian memperlancar peredaran darah',
          'Serum Booster Infusion dengan konsentrat vitamin & asam hialuronat',
          'Perawatan kencang leher (Neck Firming) & masker leher'
        ]
      },
      {
        id: 'lash-lift',
        name: 'Lash Lift & Tint',
        badge: 'Mata Cantik Alami',
        duration: 'Sekitar 60 Menit',
        summary: 'Melentikkan bulu mata asli secara alami bertahan berminggu-minggu tanpa sambungan bulu mata palsu (eyelash extension).',
        steps: [
          'Pembersihan residu minyak pada area bulu mata',
          'Pemasangan bantalan silikon sesuai kelengkungan mata yang pas',
          'Proses pelentikan dengan formula aman berkualitas',
          'Nutrisi serum keratin untuk memperkuat akar bulu mata',
          'Tint hitam pekat alami untuk efek bulu mata tampak lebih tebal'
        ]
      },
      {
        id: 'rf-eye',
        name: 'RF Eye Treatment (Radio Frequency)',
        badge: 'Segarkan Lingkar Mata',
        duration: 'Sekitar 45 Menit',
        summary: 'Stimulasi gelombang radio frequency hangat untuk meredakan mata panda, kantung mata lelah, dan garis halus di sekitar mata.',
        steps: [
          'Pembersihan lembut kelopak dan lingkar bawah mata',
          'Aplikasi cooling gel penghantar energi hangat yang nyaman',
          'Stimulasi alat RF untuk merangsang produksi kolagen alami',
          'Pijat akupresur lingkar mata meredakan ketegangan mata lelah',
          'Aplikasi masker kolagen dingin untuk hidrasi maksimal'
        ]
      }
    ]
  },
  {
    id: 'body-miss-v',
    label: 'Body & Miss V Care',
    description: 'Ritual pembersihan tubuh dan perawatan intim wanita yang terinspirasi dari warisan rempah tradisional Indonesia.',
    treatments: [
      {
        id: 'body-massage',
        name: 'Body Massage Tradisional',
        badge: 'Pelepas Ketegangan Otot',
        duration: '60 - 90 Menit',
        summary: 'Pijatan ritmis khas nusantara dengan tekanan lembut hingga sedang untuk melancarkan sirkulasi dan menghilangkan pegal tubuh.',
        steps: [
          'Rendaman kaki aromaterapi air hangat',
          'Pemijatan tubuh menyeluruh menggunakan minyak hangat beraroma alami',
          'Fokus relaksasi punggung, leher, pundak, dan betis',
          'Peregangan lembut pelepas ketegangan sendi',
          'Penyeka handuk hangat lembut bebas rasa lengket'
        ]
      },
      {
        id: 'body-lulur-masker',
        name: 'Body Lulur & Masker Rempah',
        badge: 'Kulit Halus Bercahaya',
        duration: 'Sekitar 75 Menit',
        summary: 'Eksfoliasi sel kulit mati dengan scrub rempah pilihan, dilanjutkan masker tubuh penutrisi untuk kelembutan ekstra.',
        steps: [
          'Pembersihan tubuh awal',
          'Pengusapan lulur rempah beras/bengkoang/kopi dengan pijatan melingkar',
          'Pengelupasan lembut kotoran dan sel kulit kusam',
          'Aplikasi masker badan bernutrisi melembapkan',
          'Bilas bersih dengan handuk hangat dan pulasan lotion wangi'
        ]
      },
      {
        id: 'body-bleaching',
        name: 'Body Brightening & Bleaching',
        badge: 'Perawatan Kulit Cerah',
        duration: 'Sekitar 90 Menit',
        summary: 'Perawatan khusus pencerah warna kulit tubuh secara merata menggunakan formula aman yang telah teruji klinis.',
        steps: [
          'Pembersihan pori kulit tubuh secara seksama',
          'Aplikasi krim brightening berkualitas pada area tubuh',
          'Proses penyerapan nutrisi pencerah kulit',
          'Pembersihan dengan handuk hangat steril',
          'Aplikasi pelembap pencerah dan pelindung kulit'
        ]
      },
      {
        id: 'ratus-v-spa',
        name: 'Ratus Series (Ratus V-Spa Rempah Rebus)',
        badge: 'Kesegaran Area Kewanitaan',
        duration: 'Sekitar 45 Menit',
        summary: 'Perawatan tradisional penguapan herbal menggunakan daun sirih, majakani, dan kayu rapat untuk kebersihan dan aroma segar intim.',
        steps: [
          'Persiapan ramuan rempah rebusan tradisional steril',
          'Sesi pengasapan / penguapan herbal hangat yang nyaman',
          'Relaksasi meredakan kelembapan berlebih dan mencegah bau tidak sedap',
          'Pembersihan ramah dengan air rempah rebusan hangat yang menyejukkan'
        ]
      }
    ]
  }
]

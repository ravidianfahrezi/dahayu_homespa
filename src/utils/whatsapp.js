const PHONE_NUMBER = '628996537070'

export function getGeneralReservationUrl() {
  const text = 'Halo Dahayu Home Spa, saya ingin reservasi jadwal perawatan panggilan ke rumah di area Bangkalan. Mohon informasi ketersediaan jadwal terapis.'
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`
}

export function getTreatmentInquiryUrl(treatmentName) {
  const text = `Halo Dahayu Home Spa, saya tertarik dengan "${treatmentName}". Bisakah saya konsultasi lebih lanjut dan tanya ketersediaan jadwalnya?`
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`
}

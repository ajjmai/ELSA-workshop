const rangaistuksenPituusVuosina: number = 5.5
const vanginIka: number = 22
const onkoEnsikertalainen: boolean = true
const onkoKokoRangaistusAika: boolean = false
const onkoSakonMuutonrangaistus: boolean = false

function laskeMinimiPituus(pituus: number, kerroin: number, vahimmaisPituus: number) {
  return Math.max(pituus * kerroin, vahimmaisPituus)
}

function laskeVankeudenVahimmaisPituus(pituus: number): number {
  if (onkoSakonMuutonrangaistus) {
    return pituus
  }

  if (onkoKokoRangaistusAika) {
    const vahimmaisPituus = 3

    // return Math.max(pituus * (5 / 6), vahimmaisPituus)

    return laskeMinimiPituus(pituus, 5 / 6, vahimmaisPituus)
  }

  const vahimmaisPituus = 1 / 24 // 14 päivää -> 1/24 vuosi

  if (onkoEnsikertalainen) {
    if (vanginIka < 21) {
      return laskeMinimiPituus(pituus, 1 / 3, vahimmaisPituus)
    } else {
      return laskeMinimiPituus(pituus, 0.5, vahimmaisPituus)
    }
  }

  if (vanginIka < 21) {
    return laskeMinimiPituus(pituus, 0.5, vahimmaisPituus)
  }

  return laskeMinimiPituus(pituus, 2 / 3, vahimmaisPituus)
}

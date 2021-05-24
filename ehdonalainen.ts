const rangaistuksenPituusVuosina: number = 5.5
const vanginIka: number = 22
const onkoEnsikertalainen: boolean = true
const onkoKokoRangaistusAika: boolean = false
const onkoSakonMuutonrangaistus: boolean = false

function laskeVankeudenVahimmaisPituus(): number {

  // sakon muuntorangaistus
  if (onkoSakonMuutonrangaistus) {
    return rangaistuksenPituusVuosina
  }

  // koko rangaistusaikaa suorittava
  if (onkoKokoRangaistusAika) {
    const vahimmaisPituus = 3
    const vankeudenPituus = rangaistuksenPituusVuosina * (5 / 6)

    if (vankeudenPituus < vahimmaisPituus) {
      return vahimmaisPituus
    } else {
      return vankeudenPituus
    }
  }

  // ensikertalainen
  if (onkoEnsikertalainen) {
    const vahimmaisPituus = 1 / 24 // 14 päivää -> 1/24 vuosi

    // ensikertalainen, alle 21-v.
    if (vanginIka < 21) {
      const vankeudenPituus = rangaistuksenPituusVuosina * 1/3

      if (vankeudenPituus < vahimmaisPituus) {
        return vahimmaisPituus
      } else {
        return vankeudenPituus
      }

      // ensikertalainen, yli 21-v.
    } else {
      const vankeudenPituus = rangaistuksenPituusVuosina * 1/2

      if (vankeudenPituus < vahimmaisPituus) {
        return vahimmaisPituus
      } else {
        return vankeudenPituus
      }
    }
  }

  // ei-ensikertalainen, alle 21-v.
  if (vanginIka < 21) {
    const vahimmaisPituus = 1 / 24 // 14 päivää -> 1/24 vuosi
    const vankeudenPituus = rangaistuksenPituusVuosina * 1/2

    if (vankeudenPituus < vahimmaisPituus) {
      return vahimmaisPituus
    } else {
      return vankeudenPituus
    }

    // ei-ensikertalainen, yli 21-v.
  } else {
    const vahimmaisPituus = 1 / 24 // 14 päivää -> 1/24 vuosi
    const vankeudenPituus = rangaistuksenPituusVuosina * 2/3
    
    if (vankeudenPituus < vahimmaisPituus) {
      return vahimmaisPituus
    } else {
      return vankeudenPituus
    }
  }
}

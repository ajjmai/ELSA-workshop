// run: npx ts-node paivasakko.ts

// Sovellettavat lait: Rikoslaki (39/1889) ja Asetus päiväsakon rahamäärästä (609/1999)

function laskeYhdenPaivasakonMaara(kuukausitulo: number, elatettavienMaara: number): number {
  // päiväsakkoasetus 2 §
  const peruskulutusvahennus: number = 255
  //  päiväsakkoasetus 3 §
  const elatusvahennus: number = 3 * elatettavienMaara
  //  päiväsakkoasetus 5 §
  const paivasakonMinimiMaara: number = 6

  // lasketaan päiväsakon perusteena oleva tulo (rikoslaki 2a luku 2 §, päiväsakkoasetus 2 §)
  const paivasakonPerusteenaOlevaTulo: number = kuukausitulo - peruskulutusvahennus

  //  lasketaan yhden päiväsakon määrä (rikoslaki 2a luku 2 §, päiväsakkoasetus 3 §)
  const yhdenPaivasakonMaara: number = paivasakonPerusteenaOlevaTulo / 60 - elatusvahennus

  // päiväsakkoasetus 6 § senttimäärän pyöristäminen
  const yhdenPaivasakonMaaraPyoristettyAlas: number = Math.floor(yhdenPaivasakonMaara)

  //  tarkistetaan, että päiväsakko on vähintään 6 euroa (päiväsakkoasetus 5 §)
  if (yhdenPaivasakonMaaraPyoristettyAlas < paivasakonMinimiMaara) {
    return paivasakonMinimiMaara
  } else {
    return yhdenPaivasakonMaaraPyoristettyAlas
  }

  // voitaisiin tehdä myös näin käyttämällä Math kirjaston max-funktiota, joka palauttaa annetuista arvoista suurimman
  return Math.max(paivasakonMinimiMaara, yhdenPaivasakonMaaraPyoristettyAlas)
}

function laskeSakonKokonaismaara(yhdenPaivasakonMaara: number, kpl: number, ylinopeyssakko: string | null): number {
  // lasketaan sakon kokonaismaara (rikoslaki 2a luku 3 §)
  const sakonKokonaismaara: number = yhdenPaivasakonMaara * kpl

  // kokoelma avain-arvo pareja, joka kertoo ylinopeussakkojen minimieuromäärät
  const ylinopeussakkojenMinimimaarat = {
    mopo: 100,
    muuMoottoriajoneuvo: 200,
    vesikulkuneuvo: 120,
  }

  // tarkistetaan, onko kyseessä ylinopeussakko ja jos on, varmistetaan, että sakkoa tulee vähintään minimimäärä (päiväsakkoasetus 7 §):
  if (ylinopeussakkojenMinimimaarat.hasOwnProperty(ylinopeyssakko)) {
    if (sakonKokonaismaara < ylinopeussakkojenMinimimaarat[ylinopeyssakko]) {
      return ylinopeussakkojenMinimimaarat[ylinopeyssakko]
    }
  }

  return sakonKokonaismaara
}

const kuukausitulo: number = 3000
const elatettavia: number = 2

const yhdenPaivasakonMaara = laskeYhdenPaivasakonMaara(kuukausitulo, elatettavia)
console.log('yhden päiväsakon määrä: ', yhdenPaivasakonMaara)

const kpl: number = 20
const ylinopeyssakko = 'mopo'

const sakonKokonaismaara = laskeSakonKokonaismaara(yhdenPaivasakonMaara, kpl, ylinopeyssakko)
console.log(sakonKokonaismaara)

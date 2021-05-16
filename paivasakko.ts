// run: npx ts-node paivasakko.ts

const laskeYhdenPaivasakonMaara = (kuukausitulo: number, elatettavienMaara: number): number => {
  const peruskulutusvahennus: number = 255
  const paivasakonMinimiMaara: number = 6
  const elatusvahennus: number = 3 * elatettavienMaara

  const paivasakonPerusteenaOlevaTulo: number = kuukausitulo - peruskulutusvahennus
  const yhdenPaivasakonMaara: number = paivasakonPerusteenaOlevaTulo / 60 - elatusvahennus
  const yhdenPaivasakonMaaraPyoristettyAlas: number = Math.floor(yhdenPaivasakonMaara)

  if (yhdenPaivasakonMaaraPyoristettyAlas < paivasakonMinimiMaara) {
    return paivasakonMinimiMaara
  } else {
    return yhdenPaivasakonMaaraPyoristettyAlas
  }
}

const laskeSakonKokonaismaara = (yhdenPaivasakonMaara: number, kpl: number, ylinopeyssakko: string | null): number => {
  const sakonKokonaismaara: number = yhdenPaivasakonMaara * kpl
  const ylinopeussakkojenMinimimaarat = {
    mopo: 100,
    muuMoottoriajoneuvo: 200,
    vesikulkuneuvo: 120,
  }

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

const perilliset = [
  {
    nimi: 'A',
    elossa: false,
    lapset: [
      { nimi: 'AA', elossa: true, lapset: [] },
      {
        nimi: 'AB',
        elossa: false,
        lapset: [
          { nimi: 'ABA', elossa: true, lapset: [] },
          { nimi: 'ABB', elossa: true, lapset: [] },
        ],
      },
      { nimi: 'AC', elossa: true, lapset: [] },
    ],
  },
  { nimi: 'B', elossa: true, lapset: [] },
  { nimi: 'C', elossa: false, lapset: [{ nimi: 'CA', elossa: true, lapset: [] }] },
]

const perinnonMaara = 100000

function laskePerintoOsa(perinnonKokonaismaara: number, osuus: number): number {
  return perinnonKokonaismaara * osuus
}

function laskeJokaisenPerillisenOsuus(perinnonKokonaismaara: number, osuus: number = 1, perilliset: object) {}

import math

def laske_yhden_paivasakon_maara(netto_kuukausitulo, elatettavia):
    peruskulutusvahennus = 255
    paivasakon_minimi_maara = 6
    elatusvahennus = 3 * elatettavia

    paivasakon_perusteena_oleva_tulo = netto_kuukausitulo - peruskulutusvahennus

    yhden_paivasakon_maara = (paivasakon_perusteena_oleva_tulo / 60) - elatusvahennus

    yhden_paivasakon_maara_pyoristetty_alas = math.floor(yhden_paivasakon_maara)

    if yhden_paivasakon_maara_pyoristetty_alas < paivasakon_minimi_maara:
        return paivasakon_minimi_maara
    else:
        return yhden_paivasakon_maara_pyoristetty_alas
    

def laske_sakon_kokonaismaara(yhden_paivasakon_maara, kuinka_monta, ylinopeussakko):
    sakon_kokonaismaara = yhden_paivasakon_maara * kuinka_monta

    ylinopeussakko_minimimaarat = {"mopo": 100, "muu_moottoriajoneuvo": 200, "vesikulkuneuvo": 120}

    if ylinopeussakko in ylinopeussakko_minimimaarat.keys():
        if sakon_kokonaismaara < ylinopeussakko_minimimaarat[ylinopeussakko]:
            return ylinopeussakko_minimimaarat[ylinopeussakko]

    return sakon_kokonaismaara

########

netto_kuukausitulo = 3000
elatettavia = 2

yhden_paivasakon_maara = laske_yhden_paivasakon_maara(netto_kuukausitulo, elatettavia)
print(yhden_paivasakon_maara)


kuinka_monta_paivasakkoa = 20

sakon_kokonaismaara = laske_sakon_kokonaismaara(yhden_paivasakon_maara, kuinka_monta_paivasakkoa, "mopo")
print(sakon_kokonaismaara)
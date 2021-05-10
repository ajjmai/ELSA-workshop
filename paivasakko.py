def laske_yhden_paivasakon_maara(netto_kuukausitulo, elatettavia):
    peruskulutusvahennus = 255
    paivasakon_vahin_maara = 6
    elatusvahennus = 3

    paivasakon_perusteena_oleva_tulo = netto_kuukausitulo - peruskulutusvahennus - elatusvahennus * elatettavia

    yhden_paivasakon_maara = max(paivasakon_perusteena_oleva_tulo / 60, paivasakon_vahin_maara)
    
    return yhden_paivasakon_maara
    

def laske_sakon_kokonaismaara(yhden_paivasakon_maara, kuinka_monta, ylinopeussakko_mopoilija, ylinopeussakko_muu):
    mopoilijan_ylinopeussakon_minimimaara = 100
    muun_ylinopeussakon_minimimaara = 200
    
    sakon_kokonaismaara = yhden_paivasakon_maara * kuinka_monta

    if ylinopeussakko_mopoilija:
        return max(sakon_kokonaismaara, mopoilijan_ylinopeussakon_minimimaara)
    elif ylinopeussakko_muu:
        return (max(sakon_kokonaismaara, muun_ylinopeussakon_minimimaara))

    return sakon_kokonaismaara

########

netto_kuukausitulo = 3000
elatettavia = 2

kuinka_monta_paivasakkoa = 20
ylinopeussakko_mopoilija = False
ylinopeussakko_muu = True

yhden_paivasakon_maara = laske_yhden_paivasakon_maara(netto_kuukausitulo, elatettavia)
print(yhden_paivasakon_maara)

sakon_kokonaismaara = laske_sakon_kokonaismaara(yhden_paivasakon_maara, kuinka_monta_paivasakkoa, ylinopeussakko_mopoilija, ylinopeussakko_muu)
print(sakon_kokonaismaara)
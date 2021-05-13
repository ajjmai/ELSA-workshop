import java.lang.Math;
import java.util.HashMap;

public class Paivasakko {

    public static HashMap haeYlinopeussakkoLista() {
        HashMap<String, Integer> ylinopeussakonMinimimaaraLista = new HashMap<String, Integer>();
        ylinopeussakonMinimimaaraLista.put("mopo", 100);
        ylinopeussakonMinimimaaraLista.put("muu_moottoriajoneuvo", 200);
        ylinopeussakonMinimimaaraLista.put("vesikulkuneuvo", 120);

        return ylinopeussakonMinimimaaraLista;
    }

    // Sovellettavat lait: Rikoslaki (39/1889) ja Asetus päiväsakon rahamäärästä (609/1999)

    public static int laskeYhdenPaivasakonMaara(int nettoKuukausitulo, int elatettavienMaara) {
        // päiväsakkoasetus 2 §
        int peruskulutusVahennys = 255;
        //  päiväsakkoasetus 3 §
        int elatusvahennys = 3 * elatettavienMaara;
        //  päiväsakkoasetus 5 §
        int paivasakkojenMinimimaara = 6;


        // lasketaan päiväsakon perusteena oleva tulo (rikoslaki 2a luku 2 §, päiväsakkoasetus 2 §)
        int paivasakonPerusteenaOlevaTulo = nettoKuukausitulo - peruskulutusVahennys;
        //  lasketaan yhden päiväsakon määrä (rikoslaki 2a luku 2 §, päiväsakkoasetus 3 §)
        double yhdenPaivasakonMaara = paivasakonPerusteenaOlevaTulo / 60.0 - (double) elatusvahennys;

        // päiväsakkoasetus 6 § senttimäärän pyöristäminen
        int yhdenPaivasakonMaaraPyoristettyAlas = (int) Math.floor(yhdenPaivasakonMaara);

        //  tarkistetaan, että päiväsakko on vähintään 6 euroa (päiväsakkoasetus 5 §)
        int yhdenPaivasakonMaara_lopullinen;
        if (yhdenPaivasakonMaaraPyoristettyAlas < paivasakkojenMinimimaara) {
            yhdenPaivasakonMaara_lopullinen = paivasakkojenMinimimaara;
        } else {
            yhdenPaivasakonMaara_lopullinen = yhdenPaivasakonMaaraPyoristettyAlas;
        } 

        return yhdenPaivasakonMaara_lopullinen;
    }

    public static int laskeSakkojenKokonaismaara(int yhdenPaivasakonMaara, int kuinkaMontaPaivasakkoa, String ylinopeussakko) {
        // lasketaan sakon kokonaismaara (rikoslaki 2a luku 3 §)
        int sakonKokonaismaara = yhdenPaivasakonMaara * kuinkaMontaPaivasakkoa;

        int sakonKokonaismaara_lopullinen = sakonKokonaismaara;

        // tarkistetaan, onko kyseessä ylinopeussakko ja jos on, varmistetaan, että sakkoa tulee vähintään minimimäärä (päiväsakkoasetus 7 §):
        // haetaan lista ylinopeussakkojen minimimääristä, listassa on avain-arvo -pareja: 'mopo' -> 100, 'muu_moottoriajoneuvo' -> 200, vesikulkuneuvo -> 120
        if (haeYlinopeussakkoLista().containsKey(ylinopeussakko)) {
            if (sakonKokonaismaara < (int) haeYlinopeussakkoLista().get(ylinopeussakko)) {
                sakonKokonaismaara_lopullinen = (int) haeYlinopeussakkoLista().get(ylinopeussakko); 
            }
        }

        return sakonKokonaismaara_lopullinen;
    }

    public static void main(String []args){
        int nettoKuukausiTulo = 3000;       
        int elatettavienMaara = 2;

        int yhdenPaivasakonMaara = laskeYhdenPaivasakonMaara(nettoKuukausiTulo, elatettavienMaara);
        System.out.println("yksi päiväsakko: " + yhdenPaivasakonMaara);

        int sakonKokonaismaara = laskeSakkojenKokonaismaara(yhdenPaivasakonMaara, 1, "mopo");
        System.out.println("sakon kokonaismäärä: " + sakonKokonaismaara);

     }
}
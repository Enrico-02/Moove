import { Mezzo } from "./classes/mezzo";
import { Utente } from "./classes/utente";
import { Citta } from "./classes/citta";


const bici1 = new Mezzo("bici", "bici001");
const scooter1 = new Mezzo("scooter", "scooter001");
const monopattino1 = new Mezzo("monopattino", "monopattino001");


const utente1 = new Utente("Marco", "Rossi", "marco.rossi@example.com", "Carta di credito");
const utente2 = new Utente("Laura", "Bianchi", "laura.bianchi@example.com", "PayPal");


const milano = new Citta("Milano");


milano.aggiungiMezzo(bici1);
milano.aggiungiMezzo(scooter1);
milano.aggiungiMezzo(monopattino1);


utente1.prenotaMezzo(bici1); 
utente2.prenotaMezzo(scooter1); 
utente1.prenotaMezzo(monopattino1); 

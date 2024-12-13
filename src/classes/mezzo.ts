import { IMezzo } from "../interfaces/IMezzo";
import { IUtente } from "../interfaces/IUtente";

export class Mezzo implements IMezzo {
    tipo: "bici" | "scooter" | "monopattino";
    id: string;
    stato: "disponibile" | "in uso";

    constructor(tipo: "bici" | "scooter" | "monopattino", id: string) {
        this.tipo = tipo;
        this.id = id;
        this.stato = "disponibile";
    }

    assegnaUtente(utente: IUtente): void {
        if (this.stato === "disponibile") {
            this.stato = "in uso";
            console.log(`${utente.nome} ha prenotato il mezzo ${this.id}`);
        } else {
            console.log(`Il mezzo ${this.id} è già in uso.`);
        }
    }
}

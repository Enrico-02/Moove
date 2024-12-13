import { ICitta } from "../interfaces/ICitta";
import { IMezzo } from "../interfaces/IMezzo";

export class Citta implements ICitta {
    nomeCitta: string;
    mezziDisponibili: IMezzo[];

    constructor(nomeCitta: string) {
        this.nomeCitta = nomeCitta;
        this.mezziDisponibili = [];
    }

    aggiungiMezzo(mezzo: IMezzo): void {
        this.mezziDisponibili.push(mezzo);
    }
}

export class Citta {
    constructor(nomeCitta) {
        this.nomeCitta = nomeCitta;
        this.mezziDisponibili = [];
    }
    aggiungiMezzo(mezzo) {
        this.mezziDisponibili.push(mezzo);
    }
}

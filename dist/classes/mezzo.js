export class Mezzo {
    constructor(tipo, id) {
        this.tipo = tipo;
        this.id = id;
        this.stato = "disponibile";
    }
    assegnaUtente(utente) {
        if (this.stato === "disponibile") {
            this.stato = "in uso";
            console.log(`${utente.nome} ha prenotato il mezzo ${this.id}`);
        }
        else {
            console.log(`Il mezzo ${this.id} è già in uso.`);
        }
    }
}

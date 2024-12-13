import { IUtente } from "../interfaces/IUtente";
import { IMezzo } from "../interfaces/IMezzo";

export class Utente implements IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;

    constructor(nome: string, cognome: string, email: string, metodoPagamento: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }

    prenotaMezzo(mezzo: IMezzo): void {
        mezzo.assegnaUtente(this);
    }
}

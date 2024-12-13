import { IMezzo } from "./IMezzo"; 

export interface ICitta {
    nomeCitta: string;
    mezziDisponibili: IMezzo[];
    aggiungiMezzo(mezzo: IMezzo): void;
}

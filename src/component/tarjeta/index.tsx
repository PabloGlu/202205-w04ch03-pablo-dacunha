import { Personaje } from "../../models/personaje";

export function Tarjeta({personaje}: {personaje: Personaje}){


    return (
            <p>{personaje.nombre}</p>

    )
}
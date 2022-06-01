import { Personaje } from "../../models/personaje";
import { Tarjeta } from "../tarjeta";

export function Lista({personajes}: {personajes: Personaje[] }){



    return (
        <ul>
            {
                personajes.map(personaje => 
                    <li key={personaje.nombre}>

                    <Tarjeta 

                        personaje={personaje}
                    />

                </li>
                    )

            }
        </ul>
    )
}
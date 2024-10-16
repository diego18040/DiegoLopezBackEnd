import 'dotenv/config.js'
import '../../config/database.js'
import Tienda from '../Tienda.js'

let tienda = [

{
    Nombre: "Liverpool",
    Direccion: "Av.Felix U Gomes Monterrey Centro",
    Telefono: 8182458953
  },
  {
    Nombre: "El Palacio de Hierro",
    Direccion:"Calle de Durango 230, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX",
    Telefono: 5559871523
  },
  {
    Nombre: "Oxxo",
    Direccion: "Linda Vista, Vista Regia 111 Esq, Lindavista, 67130 Guadalupe, N.L.",
    Telefono: 8289567402
  },
  {
    Nombre: "Seven Eleven",
    Direccion: "Av. Eugenio Garza Sada Sur 2762, Tecnológico, 64700 Monterrey, N.L.",
    Telefono: 8118596305
  },
  {
    Nombre: "Soriana",
    Direccion: "Blvd. Eulalio Gutiérrez & Carr. los Valdez, Los Valdez, 25209 Saltillo, Coah.",
    Telefono: 3266859715
  },

];

Tienda.insertMany(tienda)
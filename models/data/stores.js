import 'dotenv/config.js'
import '../../config/database.js'
import Store from '../Store.js';

let stores = [

{
    name: "Liverpool",
    address: "Av.Felix U Gomes Monterrey Centro",
    phone: 8182458953
  },
  {
    name: "El Palacio de Hierro",
    address:"Calle de Durango 230, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX",
    phone: 5559871523
  },
  {
    name: "Oxxo",
    address: "Linda Vista, Vista Regia 111 Esq, Lindavista, 67130 Guadalupe, N.L.",
    phone: 8289567402
  },
  {
    name: "Seven Eleven",
    address: "Av. Eugenio Garza Sada Sur 2762, Tecnológico, 64700 Monterrey, N.L.",
    phone: 8118596305
  },
  {
    name: "Soriana",
    address: "Blvd. Eulalio Gutiérrez & Carr. los Valdez, Los Valdez, 25209 Saltillo, Coah.",
    phone: 3266859715
  },

];

Store.insertMany(stores)
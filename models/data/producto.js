import 'dotenv/config.js'
import '../../config/database.js'
import Producto from '../Producto.js'


let producto = [
  {
    Nombre: "Jugo",
    Marca: "Jumex", 
    Tipo: "Bebida", 
    Precio: 15
  },
  {
    Nombre: "soda",
    Marca: "Coca-cola", 
    Tipo: "Bebida", 
    Precio: 25
  },
  {
    Nombre: "Agua",
    Marca: "Epura", 
    Tipo: "Bebida", 
    Precio: 10
  },
  {
    Nombre: "Galletas",
    Marca: "Gamesa", 
    Tipo: "Postre", 
    Precio: 21
  },
  {
    Nombre: "Frijoles",
    Marca: "La Costena", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Sardinas",
    Marca: "Guaymex", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Atún",
    Marca: "Tuni", 
    Tipo: "Enlatados", 
    Precio: 26
  },
  {
    Nombre: "Maiz Palomero",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Lentejas",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Arroz",
    Marca: "Verde vale", 
    Tipo: "Semillas", 
    Precio: 22
  },
  {
    Nombre: "Jugo",
    Marca: "Jumex", 
    Tipo: "Bebida", 
    Precio: 15
  },
  {
    Nombre: "soda",
    Marca: "Coca-cola", 
    Tipo: "Bebida", 
    Precio: 25
  },
  {
    Nombre: "Agua",
    Marca: "Epura", 
    Tipo: "Bebida", 
    Precio: 10
  },
  {
    Nombre: "Galletas",
    Marca: "Gamesa", 
    Tipo: "Postre", 
    Precio: 21
  },
  {
    Nombre: "Frijoles",
    Marca: "La Costena", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Sardinas",
    Marca: "Guaymex", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Atún",
    Marca: "Tuni", 
    Tipo: "Enlatados", 
    Precio: 26
  },
  {
    Nombre: "Maiz Palomero",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Lentejas",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Arroz",
    Marca: "Verde vale", 
    Tipo: "Semillas", 
    Precio: 22
  },
  {
    Nombre: "Jugo",
    Marca: "Jumex", 
    Tipo: "Bebida", 
    Precio: 15
  },
  {
    Nombre: "soda",
    Marca: "Coca-cola", 
    Tipo: "Bebida", 
    Precio: 25
  },
  {
    Nombre: "Agua",
    Marca: "Epura", 
    Tipo: "Bebida", 
    Precio: 10
  },
  {
    Nombre: "Galletas",
    Marca: "Gamesa", 
    Tipo: "Postre", 
    Precio: 21
  },
  {
    Nombre: "Frijoles",
    Marca: "La Costena", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Sardinas",
    Marca: "Guaymex", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Atún",
    Marca: "Tuni", 
    Tipo: "Enlatados", 
    Precio: 26
  },
  {
    Nombre: "Maiz Palomero",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Lentejas",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Arroz",
    Marca: "Verde vale", 
    Tipo: "Semillas", 
    Precio: 22
  },
  {
    Nombre: "Jugo",
    Marca: "Jumex", 
    Tipo: "Bebida", 
    Precio: 15
  },
  {
    Nombre: "soda",
    Marca: "Coca-cola", 
    Tipo: "Bebida", 
    Precio: 25
  },
  {
    Nombre: "Agua",
    Marca: "Epura", 
    Tipo: "Bebida", 
    Precio: 10
  },
  {
    Nombre: "Galletas",
    Marca: "Gamesa", 
    Tipo: "Postre", 
    Precio: 21
  },
  {
    Nombre: "Frijoles",
    Marca: "La Costena", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Sardinas",
    Marca: "Guaymex", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Atún",
    Marca: "Tuni", 
    Tipo: "Enlatados", 
    Precio: 26
  },
  {
    Nombre: "Maiz Palomero",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Lentejas",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Arroz",
    Marca: "Verde vale", 
    Tipo: "Semillas", 
    Precio: 22
  },
  {
    Nombre: "Jugo",
    Marca: "Jumex", 
    Tipo: "Bebida", 
    Precio: 15
  },
  {
    Nombre: "soda",
    Marca: "Coca-cola", 
    Tipo: "Bebida", 
    Precio: 25
  },
  {
    Nombre: "Agua",
    Marca: "Epura", 
    Tipo: "Bebida", 
    Precio: 10
  },
  {
    Nombre: "Galletas",
    Marca: "Gamesa", 
    Tipo: "Postre", 
    Precio: 21
  },
  {
    Nombre: "Frijoles",
    Marca: "La Costena", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Sardinas",
    Marca: "Guaymex", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Atún",
    Marca: "Tuni", 
    Tipo: "Enlatados", 
    Precio: 26
  },
  {
    Nombre: "Maiz Palomero",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Lentejas",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Arroz",
    Marca: "Verde vale", 
    Tipo: "Semillas", 
    Precio: 22
  },
  {
    Nombre: "Jugo",
    Marca: "Jumex", 
    Tipo: "Bebida", 
    Precio: 15
  },
  {
    Nombre: "soda",
    Marca: "Coca-cola", 
    Tipo: "Bebida", 
    Precio: 25
  },
  {
    Nombre: "Agua",
    Marca: "Epura", 
    Tipo: "Bebida", 
    Precio: 10
  },
  {
    Nombre: "Galletas",
    Marca: "Gamesa", 
    Tipo: "Postre", 
    Precio: 21
  },
  {
    Nombre: "Frijoles",
    Marca: "La Costena", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Sardinas",
    Marca: "Guaymex", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Atún",
    Marca: "Tuni", 
    Tipo: "Enlatados", 
    Precio: 26
  },
  {
    Nombre: "Maiz Palomero",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Lentejas",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Arroz",
    Marca: "Verde vale", 
    Tipo: "Semillas", 
    Precio: 22
  },
  {
    Nombre: "Jugo",
    Marca: "Jumex", 
    Tipo: "Bebida", 
    Precio: 15
  },
  {
    Nombre: "soda",
    Marca: "Coca-cola", 
    Tipo: "Bebida", 
    Precio: 25
  },
  {
    Nombre: "Agua",
    Marca: "Epura", 
    Tipo: "Bebida", 
    Precio: 10
  },
  {
    Nombre: "Galletas",
    Marca: "Gamesa", 
    Tipo: "Postre", 
    Precio: 21
  },
  {
    Nombre: "Frijoles",
    Marca: "La Costena", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Sardinas",
    Marca: "Guaymex", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Atún",
    Marca: "Tuni", 
    Tipo: "Enlatados", 
    Precio: 26
  },
  {
    Nombre: "Maiz Palomero",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Lentejas",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Arroz",
    Marca: "Verde vale", 
    Tipo: "Semillas", 
    Precio: 22
  },
  {
    Nombre: "Jugo",
    Marca: "Jumex", 
    Tipo: "Bebida", 
    Precio: 15
  },
  {
    Nombre: "soda",
    Marca: "Coca-cola", 
    Tipo: "Bebida", 
    Precio: 25
  },
  {
    Nombre: "Agua",
    Marca: "Epura", 
    Tipo: "Bebida", 
    Precio: 10
  },
  {
    Nombre: "Galletas",
    Marca: "Gamesa", 
    Tipo: "Postre", 
    Precio: 21
  },
  {
    Nombre: "Frijoles",
    Marca: "La Costena", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Sardinas",
    Marca: "Guaymex", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Atún",
    Marca: "Tuni", 
    Tipo: "Enlatados", 
    Precio: 26
  },
  {
    Nombre: "Maiz Palomero",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Lentejas",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Arroz",
    Marca: "Verde vale", 
    Tipo: "Semillas", 
    Precio: 22
  },
  {
    Nombre: "Jugo",
    Marca: "Jumex", 
    Tipo: "Bebida", 
    Precio: 15
  },
  {
    Nombre: "soda",
    Marca: "Coca-cola", 
    Tipo: "Bebida", 
    Precio: 25
  },
  {
    Nombre: "Agua",
    Marca: "Epura", 
    Tipo: "Bebida", 
    Precio: 10
  },
  {
    Nombre: "Galletas",
    Marca: "Gamesa", 
    Tipo: "Postre", 
    Precio: 21
  },
  {
    Nombre: "Frijoles",
    Marca: "La Costena", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Sardinas",
    Marca: "Guaymex", 
    Tipo: "Enlatados", 
    Precio: 24
  },
  {
    Nombre: "Atún",
    Marca: "Tuni", 
    Tipo: "Enlatados", 
    Precio: 26
  },
  {
    Nombre: "Maiz Palomero",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Lentejas",
    Marca: "Verde Vale", 
    Tipo: "Semillas", 
    Precio: 18
  },
  {
    Nombre: "Arroz",
    Marca: "Verde vale", 
    Tipo: "Semillas", 
    Precio: 22
  },
];

Producto.insertMany(producto)
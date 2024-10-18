import 'dotenv/config.js'
import '../../config/database.js'
import Product from "../Product.js"

let products = [
  
  { name: "Jugo", brand: "Jumex", type: "Bebida", price: 15 },
  { name: "Soda", brand: "Coca-cola", type: "Bebida", price: 25 },
  { name: "Agua", brand: "Epura", type: "Bebida", price: 10 },
  { name: "Galletas", brand: "Gamesa", type: "Postre", price: 21 },
  { name: "Frijoles", brand: "La Costena", type: "Enlatados", price: 24 },
  { name: "Sardinas", brand: "Guaymex", type: "Enlatados", price: 24 },
  { name: "Atún", brand: "Tuni", type: "Enlatados", price: 26 },
  { name: "Maiz Palomero", brand: "Verde Vale", type: "Semillas", price: 18 },
  { name: "Lentejas", brand: "Verde Vale", type: "Semillas", price: 18 },
  { name: "Arroz", brand: "Verde Vale", type: "Semillas", price: 22 },
  { name: "Jugo", brand: "Jumex", type: "Bebida", price: 15 },
  { name: "Soda", brand: "Coca-cola", type: "Bebida", price: 25 },
  { name: "Agua", brand: "Epura", type: "Bebida", price: 10 },
  { name: "Galletas", brand: "Gamesa", type: "Postre", price: 21 },
  { name: "Frijoles", brand: "La Costena", type: "Enlatados", price: 24 },
  { name: "Sardinas", brand: "Guaymex", type: "Enlatados", price: 24 },
  { name: "Atún", brand: "Tuni", type: "Enlatados", price: 26 },
  { name: "Maiz Palomero", brand: "Verde Vale", type: "Semillas", price: 18 },
  { name: "Lentejas", brand: "Verde Vale", type: "Semillas", price: 18 },
  { name: "Arroz", brand: "Verde Vale", type: "Semillas", price: 22 },
  { name: "Jugo", brand: "Jumex", type: "Bebida", price: 15 },
  { name: "Soda", brand: "Coca-cola", type: "Bebida", price: 25 },
  { name: "Agua", brand: "Epura", type: "Bebida", price: 10 },
  { name: "Galletas", brand: "Gamesa", type: "Postre", price: 21 },
  { name: "Frijoles", brand: "La Costena", type: "Enlatados", price: 24 },
  { name: "Sardinas", brand: "Guaymex", type: "Enlatados", price: 24 },
  { name: "Atún", brand: "Tuni", type: "Enlatados", price: 26 },
  { name: "Maiz Palomero", brand: "Verde Vale", type: "Semillas", price: 18 },
  { name: "Lentejas", brand: "Verde Vale", type: "Semillas", price: 18 },
  { name: "Arroz", brand: "Verde Vale", type: "Semillas", price: 22 },
  { name: "Jugo", brand: "Jumex", type: "Bebida", price: 15 },
  { name: "Soda", brand: "Coca-cola", type: "Bebida", price: 25 },
  { name: "Agua", brand: "Epura", type: "Bebida", price: 10 },
  { name: "Galletas", brand: "Gamesa", type: "Postre", price: 21 },
  { name: "Frijoles", brand: "La Costena", type: "Enlatados", price: 24 },
  { name: "Sardinas", brand: "Guaymex", type: "Enlatados", price: 24 },
  { name: "Atún", brand: "Tuni", type: "Enlatados", price: 26 },
  { name: "Maiz Palomero", brand: "Verde Vale", type: "Semillas", price: 18 },
  { name: "Lentejas", brand: "Verde Vale", type: "Semillas", price: 18 },
  { name: "Arroz", brand: "Verde Vale", type: "Semillas", price: 22 },
  { name: "Jugo", brand: "Jumex", type: "Bebida", price: 15 },
  { name: "Soda", brand: "Coca-cola", type: "Bebida", price: 25 },
  { name: "Agua", brand: "Epura", type: "Bebida", price: 10 },
  { name: "Galletas", brand: "Gamesa", type: "Postre", price: 21 },
  { name: "Frijoles", brand: "La Costena", type: "Enlatados", price: 24 },
  { name: "Sardinas", brand: "Guaymex", type: "Enlatados", price: 24 },
  { name: "Atún", brand: "Tuni", type: "Enlatados", price: 26 },
  { name: "Maiz Palomero", brand: "Verde Vale", type: "Semillas", price: 18 },
  { name: "Lentejas", brand: "Verde Vale", type: "Semillas", price: 18 },
  { name: "Arroz", brand: "Verde Vale", type: "Semillas", price: 22 },
  { name: "Jugo", brand: "Jumex", type: "Bebida", price: 15 },
  { name: "Soda", brand: "Coca-cola", type: "Bebida", price: 25 },
  { name: "Agua", brand: "Epura", type: "Bebida", price: 10 },
  { name: "Galletas", brand: "Gamesa", type: "Postre", price: 21 },
  { name: "Frijoles", brand: "La Costena", type: "Enlatados", price: 24 },
  { name: "Sardinas", brand: "Guaymex", type: "Enlatados", price: 24 },
  { name: "Atún", brand: "Tuni", type: "Enlatados", price: 26 },
  { name: "Maiz Palomero", brand: "Geat Value", type: "Semillas", price: 18 },
  { name: "Lentejas", brand: "Verde Vale", type: "Semillas", price: 18 },
  { name: "Arroz", brand: "Verde Vale", type: "Semillas", price: 22 },
  { name: "Jugo", brand: "Boing", type: "Bebida", price: 25 },
  { name: "Soda", brand: "Coca-cola", type: "Bebida", price: 45 },
  { name: "Agua", brand: "Ciel", type: "Bebida", price: 60 },
  { name: "Galletas", brand: "Gamesa", type: "Postre", price: 85 },
  { name: "Frijoles", brand: "La Costena", type: "Enlatados", price: 15 },
  { name: "Sardinas", brand: "Tuni", type: "Enlatados", price: 65 },
  { name: "Atún", brand: "Tuni", type: "Enlatados", price: 50 },
  { name: "Maiz Palomero", brand: "Verde Vale", type: "Semillas", price: 28 },
  { name: "Atún", brand: "Tuni", type: "Enlatados", price: 26 },
  { name: "Maiz Palomero", brand: "Verde Vale", type: "Semillas", price: 18 },
  { name: "Lentejas", brand: "Verde Vale", type: "Semillas", price: 18 },
  { name: "Arroz", brand: "Verde Vale", type: "Semillas", price: 90 },
  { name: "Jugo", brand: "Jumex", type: "Bebida", price: 85 },
  { name: "Soda", brand: "Coca-cola", type: "Bebida", price: 22 },
  { name: "Agua", brand: "Epura", type: "Bebida", price: 40 },
  { name: "Galletas", brand: "Gamesa", type: "Postre", price: 45 },
  { name: "Frijoles", brand: "La Costena", type: "Enlatados", price: 24 },
  { name: "Sardinas", brand: "Guaymex", type: "Enlatados", price: 105 },
  { name: "Atún", brand: "Tuni", type: "Enlatados", price: 89 },
  { name: "Atún", brand: "Tuni", type: "Enlatados", price: 26 },
  { name: "Maiz Palomero", brand: "Verde Vale", type: "Semillas", price: 56 },
  { name: "Lentejas", brand: "Verde Vale", type: "Semillas", price: 56 },
  { name: "Arroz", brand: "Verde Vale", type: "Semillas", price: 56 },
  { name: "Jugo", brand: "Valle", type: "Bebida", price: 15 },
  { name: "Soda", brand: "Pepsi", type: "Bebida", price: 25 },
  { name: "Agua", brand: "Bonafont", type: "Bebida", price: 10 },
  { name: "Galletas", brand: "Keyllos", type: "Postre", price: 21 },
  { name: "Frijoles", brand: "Isadora", type: "Enlatados", price: 24 },
  { name: "Sardinas", brand: "Guaymex", type: "Enlatados", price: 24 },
  { name: "Atún", brand: "Tuni", type: "Enlatados", price: 26 },
  { name: "Atún", brand: "Tuni", type: "Enlatados", price: 56 },
  { name: "Maiz Palomero", brand: "GeatValue", type: "Semillas", price: 18 },
  { name: "Lentejas", brand: "Verde Vale", type: "Semillas", price: 18 },
  { name: "Arroz", brand: "Verde Vale", type: "Semillas", price: 85 },
  { name: "Jugo", brand: "Jumex", type: "Bebida", price: 7 },
  { name: "Soda", brand: "Coca-cola", type: "Bebida", price: 56 },
  { name: "Agua", brand: "Epura", type: "Bebida", price: 100 },
  { name: "Galletas", brand: "Gamesa", type: "Postre", price: 12 },
  { name: "Frijoles", brand: "La Costena", type: "Enlatados", price: 89 },
  { name: "Sardinas", brand: "Guaymex", type: "Enlatados", price: 52 },
  { name: "Atún", brand: "Tuni", type: "Enlatados", price: 120 },
];


Product.insertMany(products)
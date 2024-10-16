import 'dotenv/config.js'
import '../../config/database.js'
import Empleado from '../Empleado.js'

let empleado = [

    {
        Id:"1",
        Nombre: "Diego",
        Cargo: "Programador",
        Salario: 40000
      },
      {
        Id:"2",
        Nombre: "Luis",
        Cargo: "Contador",
        Salario: 80000
      },
      { 
        Id:"3",
        Nombre: "Lorena",
        Cargo: "Socia",
        Salario: 100000
      },
      {
        Id:"4",
        Nombre: "Denisse",
        Cargo: "Socia",
        Salario: 120000
      },
      {
        Id:"5",
        Nombre: "Luis M",
        Cargo: "Socio",
        Salario: 100000
      },
      {
        Id:"6",
        Nombre: "Mario G",
        Cargo: "Socio",
        Salario: 125000
      },
      {
        Id:"7",
        Nombre: "Pablo",
        Cargo: "Marketing",
        Salario: 15000
      },
      {
        Id:"8",
        Nombre: "Luis D",
        Cargo: "Jefe Marketing",
        Salario: 30000
      },
      {
        Id:"9",
        Nombre: "Diana",
        Cargo: "Ingeria de producto",
        Salario: 25000
      },
      {
        Id:"10",
        Nombre: "Agustin",
        Cargo: "Coordinador de QA",
        Salario: 15000
      },
      {
        Id:"11",
        Nombre: "Salvador",
        Cargo: "Traductor",
        Salario: 60000
      },
      {
        Id:"12",
        Nombre: "Isabel",
        Cargo: "Abogada",
        Salario: 52000
      },
      {
        Id:"13",
        Nombre: "Pancho",
        Cargo: "Practicante",
        Salario: 10000
      },
      {
        Id:"14",
        Nombre: "Jose",
        Cargo: "Practicante",
        Salario: 10000
      },
      {
        Id:"15",
        Nombre: "Ayala",
        Cargo: "Practicante",
        Salario: 10000
      },
    ]

Empleado.insertMany(empleado)
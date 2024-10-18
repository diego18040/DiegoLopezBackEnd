import 'dotenv/config.js'
import '../../config/database.js'
import Employee from '../Employee.js'

let employees = [

    {
        id:"1",
        name: "Diego",
        position: "Programador",
        salary: 40000
      },
      {
        id:"2",
        name: "Luis",
        position: "Contador",
        salary: 80000
      },
      { 
        id:"3",
        name: "Lorena",
        position: "Socia",
        salary: 100000
      },
      {
        id:"4",
        name: "Denisse",
        position: "Socia",
        salary: 120000
      },
      {
        id:"5",
        name: "Luis M",
        position: "Socio",
        salary: 100000
      },
      {
        id:"6",
        name: "Mario G",
        position: "Socio",
        salary: 125000
      },
      {
        id:"7",
        name: "Pablo",
        position: "Marketing",
        salary: 15000
      },
      {
        id:"8",
        name: "Luis D",
        position: "Jefe Marketing",
        salary: 30000
      },
      {
        id:"9",
        name: "Diana",
        position: "Ingeria de producto",
        salary: 25000
      },
      {
        id:"10",
        name: "Agustin",
        position: "Coordinador de QA",
        salary: 15000
      },
      {
        id:"11",
        name: "Salvador",
        position: "Traductor",
        salary: 60000
      },
      {
        id:"12",
        name: "Isabel",
        position: "Abogada",
        salary: 52000
      },
      {
        id:"13",
        name: "Pancho",
        position: "Practicante",
        salary: 10000
      },
      {
        id:"14",
        name: "Jose",
        position: "Practicante",
        salary: 10000
      },
      {
        id:"15",
        name: "Ayala",
        position: "Practicante",
        salary: 10000
      },
    ]

Employee.insertMany(employees)
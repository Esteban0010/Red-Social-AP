import fetch from "node-fetch"
import { users } from "../../store.js"
console.log("empieza")

     export const resul = await fetch("https://randomuser.me/api/?results=10")
            .then(response => response.json())
            .then(data => data)
                  
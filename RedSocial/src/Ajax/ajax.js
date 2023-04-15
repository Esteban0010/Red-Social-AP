import fetch from "node-fetch"
import { getUser, setUser } from "../../store.js"
import { play } from "../Juegos/MokeJuegos.js"

console.log("empieza")
export async function createUser() {
   const resul = await fetch("https://randomuser.me/api/?results=20")
      .then(response => response.json())
      .then(data => data.results)

   let user = []
   resul.forEach(e =>
      
      user.push({
         id: e.login.uuid,
         name: e.name.first,
         last: e.name.last,
         img: e.picture.medium,
         imgplay: [
            play[Math.ceil(Math.random() * (9 - 0) + 0)].img,
            play[Math.ceil(Math.random() * (9 - 0) + 0)].img,
            play[Math.ceil(Math.random() * (9 - 0) + 0)].img],
         follow: Math.ceil(Math.random() * (1500 - 100) + 100),
      }));
   setUser(user)
}

















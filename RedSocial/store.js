import {atom} from "nanostores"

export const users = atom([]);
export const id = atom([])

export function setUser( user ){
users.set(user)
}

export function getUser(){
    return users.get()
}

export function setId( idUser ){
    console.log("id seteado")
    id.set(idUser)
    }
    
export function getId(){
        return id.get()
    }




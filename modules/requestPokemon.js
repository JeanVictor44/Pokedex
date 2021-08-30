import {searchText, pokeImg, messsageError} from './variables.js'
import { printPokemonInfo } from './printPokemonInfo.js' 

// Pega o pokemon através do input
const getPokemon = async(pokemon) => {
    const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json()
    return data
}

export const showPokemon = async () => {
    try {   
        const pokemon = searchText.value.trim().toLowerCase()
        const { sprites:{front_default}, id, name, abilities,types} = await getPokemon(pokemon)
        
        pokeImg.style.display = "block"
        messsageError.style.display = "none"    
        pokeImg.src = front_default
        printPokemonInfo({id, name, abilities, types})
    }catch(err){
        pokeImg.style.display = "none"
        messsageError.style.display = "block"
    }

}

export const showPokemonIDButton = async (event) => {
        const id = event.target.innerHTML
        const { sprites:{front_default}, name, abilities, types} = await getPokemon(id) 

        pokeImg.style.display = "block"
        messsageError.style.display = "none"
        pokeImg.src = front_default
        
        printPokemonInfo({id, name, abilities,types})
}

/* Adicionar parte de vídeo para mostrar vídeos do pokemon escolhido */
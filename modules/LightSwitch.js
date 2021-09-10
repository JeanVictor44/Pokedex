import { pokeImg, messsageError, searchButton, searchText, switchButton, containerInfos } from './variables.js'
import { generateIdButton } from './generateIdButton.js'
import { buttonsId } from './variables.js'
import { showPokemonIDButton} from './requestPokemon.js'


let isOnScreen = false 



export const switchTextButton = () => {
    isOnScreen = !isOnScreen
    isOnScreen ? switchButton.innerHTML = "OFF" : switchButton.innerHTML = "ON"

} 

export const controlInputs = () => {
    if(isOnScreen){
        searchText.disabled = false
        searchText.style.backgroundColor = "#fff"

        searchButton.disabled = false
        searchButton.innerHTML = "GO"
        const ids = generateIdButton()
        buttonsId.forEach((button, index) => {
            button.innerHTML = ids[index]
        })
        
        buttonsId.forEach((button) => {
            button.addEventListener("click",showPokemonIDButton)
        })

    }else {
        searchText.value = ""
        searchText.disabled = true
        searchText.style.backgroundColor = "#111"
        
        searchButton.disabled = true
        searchButton.innerHTML = ""
        pokeImg.src= ""
        messsageError.style.display = "none"
        buttonsId.forEach((button, index) => {
            button.innerHTML = ""
        })
        
    }
}


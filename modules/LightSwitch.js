import { pokeImg, messsageError, searchButton, searchText, switchButton } from './variables.js'
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

    }else {
        searchText.value = ""
        searchText.disabled = true
        searchText.style.backgroundColor = "#111"
        
        searchButton.disabled = true
        searchButton.innerHTML = ""
        pokeImg.src= ""
        messsageError.style.display = "none"
    }
}


import { switchButton, searchButton} from './modules/variables.js'
import { switchTextButton, controlInputs } from './modules/LightSwitch.js'
import { showPokemon, showPokemonIDButton} from './modules/requestPokemon.js'
import { buttonsId } from './modules/variables.js'
import {generateIdButton} from './modules/generateIdButton.js'
/* import { printPokemonInfo } from './modules/printPokemonInfo.js'
 */
const ids = generateIdButton()

buttonsId.forEach((button, index) => {
    button.innerHTML = ids[index]
})

buttonsId.forEach((button) => {
    button.addEventListener("click",showPokemonIDButton)
})

switchButton.addEventListener("click",switchTextButton)
switchButton.addEventListener("click", controlInputs)
searchButton.addEventListener("click", showPokemon)

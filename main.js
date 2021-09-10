import { switchButton, searchButton} from './modules/variables.js'
import { switchTextButton, controlInputs } from './modules/LightSwitch.js'
import { showPokemon } from './modules/requestPokemon.js'

/* import { printPokemonInfo } from './modules/printPokemonInfo.js'
 */


switchButton.addEventListener("click",switchTextButton)
switchButton.addEventListener("click", controlInputs)
searchButton.addEventListener("click", showPokemon)
window.addEventListener("keypress")
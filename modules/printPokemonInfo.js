import 
{   fieldPokemonId,
    fieldPokemonName,
    fieldPokemonAbility,
    fieldPokemonType } from './variables.js'


export const printPokemonInfo = (pokemon) => {
    fieldPokemonId.innerHTML = `ID: ${pokemon.id}`
    fieldPokemonName.innerHTML = `Name: ${pokemon.name}`
    fieldPokemonAbility.innerHTML = `Ability: ${pokemon.abilities[0].ability.name}`
    fieldPokemonType.innerHTML = `Type: ${pokemon.types[0].type.name}`
}
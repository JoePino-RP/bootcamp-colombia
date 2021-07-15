import React from 'react'
import PropTypes from 'prop-types'
import PokemonRow from '../PokemonRow/PokemonRow'
import './TeamList.css'

const TeamList = (props) => {
  const handleRemovePokemon = (pokemonKey) => () => {
    props.onRemovePokemon(pokemonKey)
  }

  const handleNameChanged = (pokemonKey) => (name) => {
    props.onChangeName(pokemonKey, name)
  }

  return (
    <div className="Team-list-container">
      <h3>My pokemon team</h3>

      <div>
        {props.pokemons.map(pokemon => (
          <PokemonRow 
            name={pokemon.name} 
            image={pokemon.sprites.front_default}
            onRemove={handleRemovePokemon(pokemon.key)}
            onChangeName={handleNameChanged(pokemon.key)}
          />
        ))}
      </div>
    </div>
  )
}

TeamList.propTypes = {
  pokemons: PropTypes.array.isRequired,
  onRemovePokemon: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired
}

export default TeamList
import React from 'react'
import Pokedex from './Pokedex/Pokedex'
import TeamList from './TeamList/TeamList'
import './PokedexScene.css'

class PokedexScene extends React.Component {
  constructor() {
    super()
    this.state = {
      team: []
    }

    this.handleAddCurrentPokemon = this.handleAddCurrentPokemon.bind(this)
    this.handleRemovePokemon = this.handleRemovePokemon.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
  }

  handleAddCurrentPokemon(newPokemon) {
    this.setState(prevState => ({
      team: [...prevState.team, {
        ...newPokemon,
        key: new Date().getTime()
      }]
    }))
  }

  handleRemovePokemon(pokemonKey) {
    this.setState(prevState => ({
      team: prevState.team.filter(pokemon => pokemon.key !== pokemonKey)
    }))
  }

  handleChangeName(pokemonKey, newName) {
    this.setState(prevState => {
      const itemToUpdate = prevState.team
        .find(pokemon => pokemon.key === pokemonKey)
      itemToUpdate.name = newName
      const newTeam = prevState.team
        .map(pokemon => pokemon.key === pokemonKey ? itemToUpdate : pokemon)

      return {
        ...prevState,
        team: newTeam
      }
    })
  }

  render() {
    return (
      <div className="Pokedex-scene">
        <Pokedex
          onAddPokemon={this.handleAddCurrentPokemon}
        />

        <TeamList
          pokemons={this.state.team}
          onRemovePokemon={this.handleRemovePokemon}
          onChangeName={this.handleChangeName}
        />
      </div>
    )
  }
}

export default PokedexScene
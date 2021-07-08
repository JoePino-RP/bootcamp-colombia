import React from 'react'
import PropTypes from 'prop-types'
import PokedexScreen from '../PokedexScreen/PokedexScreen'
import pokemons from '../../../utils/pokemons.json'
import './Pokedex.css'

class Pokedex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemonToSearch: '',
      selectedPokemon: null
    }

    this.handleSearchChanged = this.handleSearchChanged.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleAddToTeam = this.handleAddToTeam.bind(this)
  }

  handleSearchChanged(event) {
    this.setState({
      pokemonToSearch: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const newPokemon = pokemons
      .find(pokemon => 
        pokemon.name === this.state.pokemonToSearch
        || pokemon.id === Number(this.state.pokemonToSearch)
      )
    this.setState({
      selectedPokemon: newPokemon
    })
  }

  handleReset() {
    this.setState({
      selectedPokemon: null,
    })
  }

  handleAddToTeam() {
    this.props.onAddPokemon(this.state.selectedPokemon)
  }

  render() {
    return (
      <div className="Pokedex">
        <div className="Pokedex-lights">
          <div className="Pokedex-big-circle" />

          <div className="Pokedex-small-circle Pokedex-red-light" />

          <div className="Pokedex-small-circle Pokedex-green-light" />

          <div className="Pokedex-small-circle Pokedex-yellow-light" />
        </div>

        <PokedexScreen pokemon={this.state.selectedPokemon} />

        <div className="Pokedex-action-area">
          <div className="Pokedex-small-buttons">
            <button type="button" onClick={this.handleAddToTeam}>Add to team</button>

            <button type="button" onClick={this.handleReset}>Reset</button>
          </div>

          <form className="Pokedex-searcher" onSubmit={this.handleSubmit}>
            <input
              placeholder="Search pokemon"
              onChange={this.handleSearchChanged}
              value={this.state.pokemonToSearch}
            />

            <button type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

Pokedex.propTypes = {
  onAddPokemon: PropTypes.func.isRequired
}

export default Pokedex
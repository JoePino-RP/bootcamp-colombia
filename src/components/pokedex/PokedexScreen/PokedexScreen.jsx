import React from 'react'
import PropTypes from 'prop-types'
import PokemonType from '../../common/PokemonType/PokemonType'
import './PokedexScreen.css'

const PokedexScreen = (props) => (
  <div className="Pokedex-screen-container">
    {props.pokemon ? (
      <div className="Pokedex-screen">
        <div className="Pokedex-screen-image">
          <img alt="" src={props.pokemon.sprites.front_default} />
        </div>

        <div className="Pokedex-screen-data-column">
          <div className="Pokedex-screen-data-row">
            <div className="Pokedex-screen-right-row">
              <span>{props.pokemon.name}</span>
            </div>
          </div>

          <div className="Pokedex-screen-data-row">
            <div className="Pokedex-screen-left-row Pokemon-screen-types">
              {props.pokemon.types.map((typeData) => (
                <PokemonType 
                  key={typeData.type.name} 
                  name={typeData.type.name} 
                />))}
            </div>
          </div>

          <div className="Pokedex-screen-data-row">
            <div className="Pokedex-screen-right-row Pokedex-screen-pokemon-dimensions">
              <span>WT: {props.pokemon.weight}lbs</span>
              <span>HT: {props.pokemon.weight}"</span>
            </div>
          </div>

        </div>
      </div>
    ) : null}
  </div>
)

PokedexScreen.propTypes = {
  pokemon: PropTypes.shape({
    sprites: PropTypes.shape({
      front_default: PropTypes.string
    }),
    name: PropTypes.string,
  })
}

export default PokedexScreen
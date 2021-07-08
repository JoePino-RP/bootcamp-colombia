import React from 'react'
import PropTypes from 'prop-types'
import './PokemonType.css'

const PokemonType = (props) => (
  <span 
    className="Pokemon-type"
    style={{backgroundColor: `var(--${props.name})`}}
  >
    {props.name}
  </span>
)

PokemonType.propTypes = {
  name: PropTypes.string.isRequired
}

export default PokemonType
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import editIcon from '../../../assets/edit-icon.png'
import './PokemonRow.css'

const PokemonRow = (props) => {
  const [newName, setNewName] = useState(props.name)
  const [edit, setEdit] = useState(false)

  function toggleEdit() {
    if (edit) {
      if (window.confirm(`This will be the new name: ${newName}`)) {
        props.onChangeName(newName)
      } else {
        setNewName(props.name)
      }
      setEdit(false)
    } else {
      setEdit(true)
    }
  }

  function handleChange(event) {
    setNewName(event.target.value)
  }

  return (
    <div className="Pokemon-row">
      <div className="Pokemon-row-left">
        <img alt="" src={props.image} />

        {edit
          ? <input type="text" value={newName} onChange={handleChange} />
          : <span>{props.name}</span>}
      </div>

      <div className="Pokemon-row-right">
        <button className="Pokemon-row-edit" onClick={toggleEdit}  >
          <img alt="" src={editIcon} />
        </button>

        <button className="Pokemon-row-remove" onClick={props.onRemove}>
          x
        </button>
      </div>

    </div>
  )
}

PokemonRow.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired
}

export default PokemonRow
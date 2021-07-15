import React from 'react'
import './MovesScene.css'

/**
 * Create a Component (class or functional) that shows the pokemons that can learn
 * a move
 * 
 * This scene requires:
 * > An input to type the name of the movement.
 *  - only letters and spaces are valid.
 *  - show error message:
 *    when the input is invalid: "Only letters".
 *    the move doesn't exist: "Invalid movement".
 *    The api fails: "Something went wrong, try again later".
 *  - after every search the input shall be cleaned.
 * > A button that triggers the search.
 *  - shall not search if the input is empty.
 *  - if the user types the same name that is currently displaying, 
 *    the search shall not be triggered.
 * > The name of the movement followed by a description.
 * > The list of types of the movement (normal, electric, plant, etc.).
 * > A list of pokemons names that learn the move.
 * > Show a loading while the request to the api is fetching data.
 * > Add this scene to our header and router to be able to see it.
 * > Use proptypes when it is required.
 * 
 * > Use this endpoint https://pokeapi.co/api/v2/move/{movement-name}
 *    The movements with more than one word shall be searched with kebab-case
 *    Example: https://pokeapi.co/api/v2/move/double-slap
 *    More details for the response model and api: https://pokeapi.co/
 *    All the given requirements can be easly taken from the response model
 * 
 * Feel free to use your own styles, reuse components and create new ones.
 * 
 * Also change the photo and the name on the trainerData.json (inside utils).
 * 
 * Happy coding!
 */

const MovesScene = () => {
  return (
    <div className="Moves-scene-container">
      {/* TODO: Add your code here, 
      you can switch this component to a class component if you wish*/}
    </div>
  )
}

export default MovesScene
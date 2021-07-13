import React from 'react'
import PokemonType from '../common/PokemonType/PokemonType'
import './TypesScene.css'

const BASE_URL = 'https://pokeapi.co/api/v2'

async function apiCall(path) {
  try {
    const request = await fetch(`${BASE_URL}/${path}`)
    const response = await request.json()
    return {
      success: true,
      data: response,
      error: null,
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error,
    }
  }
}

class TypesScene extends React.Component {
  constructor() {
    super()

    this.state = {
      loadingType: false,
      types: [],
      loadingDetail: false,
      typeDetail: null,
      currentType: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    this.setState({
      loadingType: true,
    })
    const typesResponse = await apiCall('type/')
    if (typesResponse.success) {
      this.setState({
        types: typesResponse.data.results,
        loadingType: false,
      })
    }
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.currentType !== this.state.currentType) {
      this.setState({
        loadingDetail: true,
        typeDetail: null,
      })
      const typeDetailResponse = await apiCall(`type/${this.state.currentType}`)
      this.setState({
        loadingDetail: false,
        typeDetail: typeDetailResponse.data
      })
    }
  }

  handleClick(name) {
    return () => {
      this.setState({ currentType: name })
    }
  }

  render() {
    return (
      <div className="Type-scene">
        <div className="Types-list">
          {this.state.loadingType
            ? <span>Loading...</span>
            : this.state.types.map(type => (
              <button type="button" onClick={this.handleClick(type.name)}>
                <PokemonType key={type.name} name={type.name} />
              </button>
            ))}
        </div>

        <div className="Type-detail">
          {this.state.loadingDetail
            && !this.state.typeDetail
            && <span>Loading...</span>}
          {this.state.typeDetail && !this.state.loadingDetail && (
            <table>
              <tbody>
                <tr>
                  <th>Double damage to</th>
                  {this.state.typeDetail.damage_relations.double_damage_to
                    .map(type => (
                      <td key={type.name}>
                        <PokemonType name={type.name} />
                      </td>
                    ))}
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    )
  }
}

export default TypesScene
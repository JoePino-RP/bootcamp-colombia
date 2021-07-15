import React, { useEffect, useState } from 'react'
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

const TypesScene = () => {
  const [loadingType, setLoadingType] = useState(false)
  const [types, setTypes] = useState([])
  const [loadingDetail, setLoadingDetail] = useState(false)
  const [typeDetail, setTypeDetail] = useState(null)
  const [currentType, setCurrentType] = useState('')
  
  useEffect(() => {
    const getTypes = async () => {
      setLoadingType(true)
      const typesResponse = await apiCall('type/')
      setLoadingType(false)
      if (typesResponse.success) {
        setTypes(typesResponse.data.results)
      }
    }
    getTypes()
  }, [])

  useEffect(() => {
    const getTypeDetail = async () => {
      setLoadingDetail(true)
      setTypeDetail(null)
      const typeDetailResponse = await apiCall(`type/${currentType}`)
      setLoadingDetail(false)
      setTypeDetail(typeDetailResponse.data)
    }
    if (currentType) {
      getTypeDetail()
    }
  }, [currentType])

  const handleClick = (name) => () => {
    setCurrentType(name)
  }

  return (
    <div className="Type-scene">
      <div className="Types-list">
        {loadingType
          ? <span>Loading...</span>
          : types.map(type => (
            <button type="button" onClick={handleClick(type.name)}>
              <PokemonType key={type.name} name={type.name} />
            </button>
          ))}
      </div>

      <div className="Type-detail">
        {loadingDetail
          && !typeDetail
          && <span>Loading...</span>}
        {typeDetail && !loadingDetail && (
          <table>
            <tbody>
              <tr>
                <th>Double damage to</th>
                {typeDetail.damage_relations.double_damage_to
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

export default TypesScene
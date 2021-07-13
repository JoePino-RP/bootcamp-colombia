import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/common/Header/Header'
import PokedexScene from './components/pokedex/PokedexScene'
import TrainerScene from './components/trainer/TrainerScene'
import './App.css'
import TypesScene from './components/types/TypesScene'
import TypesSceneWithHooks from './components/types/TypesSceneWithHooks'


const routes = [
  { to: '/', label: 'Pokedex', exact: true },
  { to: '/type', label: 'Types', exact: false },
  { to: '/type2', label: 'Types with hooks', exact: false },
  { to: '/trainer', label: 'Trainer', exact: false }
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header routes={routes} />

        <Switch>
          <Route path="/" exact>
            <PokedexScene />
          </Route>

          <Route path="/type" exact>
            <TypesScene />
          </Route>

          <Route path="/type2" exact>
            <TypesSceneWithHooks />
          </Route>

          <Route path="/trainer">
            <TrainerScene />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

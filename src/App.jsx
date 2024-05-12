import { useEffect, useReducer } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { reducer, initialState } from './store/store'
import { countriesAPI } from './api/api'
import Home from './pages/Home/Home'
import CountryPage from './pages/Country/CountryPage'
import Header from './components/Header/Header'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  // console.log(state.countries);

  useEffect(() => {
     countriesAPI.getAll(dispatch)
  }, [])
  
  return (
    <>
       <Header dispatch={dispatch}/>
       <Routes>
        <Route path='/' element={<Home countries={state.countries}/>}/>
        <Route path='/:name' element={<CountryPage country={state.country} dispatch={dispatch}/>}/>
       </Routes>
    </>
  )
}

export default App

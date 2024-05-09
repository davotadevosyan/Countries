import React from 'react'
import Country from '../../components/Country/Country'
import './Home.css'

export default function Home({countries}) {
  return (
    <div className='home'>
        {
            countries.map((c) => {
                return <Country key={c.name.official} country={c}/> 
            })
        }
    </div>
  )
}

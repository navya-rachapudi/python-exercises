import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const App = () => {

  const countries = [
    { name: "india", value: "IN", cities: ["hyd", "bang"] },
    { name: "usa", value: "US", cities: ["char", "texas"] },
    { name: "UK", value: "UK", cities: ["london", "liverpool"] },
  ];
  const [place, setPlace] = useState();
   const [cities, setCities] = useState();
   const [city, setCity] = useState("");
  
  const handleSelect = (e) => {
    const val = e.target.value
    setPlace(val)
    return val
  }
  const handleSelectCity = (e) => {
    const val = e.target.value
    setCity(val)
    return val
  }
  useEffect(()=>{
  const cities = countries.map((country)=>{
    if (place && country.value==place) {
      setCities(country.cities)
      return 
    }
  })
    
    
  },[place])
  return (
    <div className="App">
      <h1>Hello React.</h1>
      <select onChange={handleSelect}>
        <option value="enter the country">enter the country</option>
         {countries.map((country) => <option value={country.value}>{country.name}</option>)}
      </select>
       <select onChange={handleSelectCity}>
        <option value="enter the city">enter the city</option>
         {cities && cities.map((cit)=><option value={cit}>{cit}</option>)}
      </select>
    </div>
  );
}

export default App
import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function App() {

  const [data, setData] = useState({})
   const [input, setInput] = useState('')
  const apiKey = 'b4be9b01b63379d3224cb80c2ad5f1b3'


  const getWeatherDeatails = (cityName) => {
    if(!cityName) return
    const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(ApiUrl).then((res)=>{
        setData(res.data)
    })
  }
   
  const handleChange = (e) => {
      setInput(e.target.value)
  }

  const handleClick = ()=> {
    getWeatherDeatails(input)
  }




  return (
    <div className="col-md-12">
    <div className="wetherBg">
      <h1 className="heading">Weather App</h1>

      <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className="form-control"
            onChange={handleChange} value={input}
           /> 
        <button className="btn btn-primary" type="button" 
           onClick={handleClick}
        >Search</button>
      </div>
    </div>

   
      <div className="col-md-12 text-center mt-5">

        <div className="shadow rounded wetherResultBox">
          <img className="weathorIcon"
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />

          <h5 className="weathorCity">
            {data.name}
          </h5>
          <h6 className="weathorTemp"> {data?.main?.temp -(278.3)}  C^</h6>
        </div>
      </div>
    

  </div>
  )
}

export default App

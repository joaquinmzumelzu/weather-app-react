import { useState } from "react";
import { getCity } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";


export default function NavBar () {
  
  const dispatch = useDispatch();
  const [input,setInput] = useState("");
  const cities = useSelector(state => state.cities);

  function handleInputChanges(e){
    setInput(e.target.value)
  }

  function addCity(e){
    e.preventDefault();
    dispatch(getCity(input))
  }

    return (
        <div name= "NavBar">
           
          <form onSubmit={addCity}> 
            <input value={input} onChange={handleInputChanges}></input>
            <button type='submit' >add city</button>
          </form>

          <div name='Ciudades en la lista'>
            {cities?.map(e => (
              <p>{e.name}</p>
            ))}
          </div>

        </div>
    )
} 
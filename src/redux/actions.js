// espacio para las actions type

//const EXAMPLE_JEJE = 'EXAMPLE_JEJE' 
export const apiKey = "1bcb0ee27fa70ca2b7cf5c11524927c6";
export const GET_CITY = "GET_CITY";


// espacio para las actions type

export function getCity(city){
    return (dispatch) => {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(r=> r.json())
        .then(city => dispatch({type:GET_CITY, payload:city}))
    }
}


//import actions
import {ADD_CITY, GET_CITY} from './actions'


const initialState = {cities: []};

export default function reducer (state = initialState, action){
  if(action.type === GET_CITY) return {...state,cities:[...state.cities,action.payload]} 
  
}
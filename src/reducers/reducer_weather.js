import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
    console.log('Action received', action);
    
    switch (action.type) {
        case FETCH_WEATHER:
            if (action.error) {
                alert('There is no matching zip code for the numbers that were searched.');
            } else {
                // return state.concat([action.payload.data]);
                return [ action.payload.data, ...state ]; // [city, city, city] NOT [city, [city, city]]
            }    
    }

    return state;
}
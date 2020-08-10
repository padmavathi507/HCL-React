import { FETCH_RESTAURANTS,FETCH_RESTAURANTS_BY_ID,FETCH_MENU_ITEMS_BY_ID} from './types';
import axios from 'axios';

export const fetchRestaurants = () => dispatch => {

    axios.get("http://localhost:8080/restaurant/all")
        .then(res => {
            dispatch({
                type: FETCH_RESTAURANTS,
                payload: res.data
            })
        })
};

export const fetchRestaurantsById = (restaurantId) => dispatch => {

    axios.get("http://localhost:8080/restaurants/find/"+restaurantId)
        .then(res => {
            dispatch({
                type: FETCH_RESTAURANTS_BY_ID,
                payload: res.data
            })
        })
};

export const fetchMenuItemsById = (restaurantId) => dispatch => {

    axios.get("http://localhost:8080/menu/find/"+restaurantId)
        .then(res => {
            dispatch({
                type: FETCH_MENU_ITEMS_BY_ID,
                payload: res.data
            })
        })
};
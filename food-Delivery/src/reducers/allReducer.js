import {FETCH_RESTAURANTS,FETCH_RESTAURANTS_BY_ID,FETCH_MENU_ITEMS_BY_ID} from '../actions/types';

const initialState = {
  restaurants: [],
  restaurant:{},
  menu:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload
      };
      case FETCH_RESTAURANTS_BY_ID:
      return {
        ...state,
        restaurant: action.payload
      };
      case FETCH_MENU_ITEMS_BY_ID:
        return {
          ...state,
          menu: action.payload
        };
    // case NEW_POST:
    //   let nposts = []
    //   Object.assign(nposts, state.items)
    //   nposts.unshift(action.payload)
    //   return {
    //     ...state,
    //     items: nposts
    //   };
    // case DELETE_POST:
    //   let posts = []
    //   Object.assign(posts, state.items)
    //   posts.splice(action.payload, 1)
    //   return {
    //     ...state,
    //     items: posts
    //   };
    //   return state;
    default:
      return state;
  }
}
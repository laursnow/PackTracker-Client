import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_DB_SUCCESS,
  FETCH_ITINERARY_SUCCESS,
  POST_ITEM_SUCCESS,
  POST_ITINERARY_SUCCESS,
  DELETE_SUCCESS,
  EDIT_ITINERARY_SUCCESS,
  EDIT_ITEM_SUCCESS
} from "../actions";

const initialState = {
  status: "",
  error: "",

  itineraries: [{
    id: null,
      title: null,
      date_leave: null,
      date_return: null,
      travel: [null],
      lodging: [null],
      activity: [null],
      public: false,
      timestamp: null
    }],
      
  author_of_snippets: [{
    id: null,
    title: null,
    date_leave: null,
    date_return: null,
    timestamp: null
  }]
};




// const initialState = {
//  status: "",
//  error: "",

//  itineraries: 
//   [{id: "5cd121b8b116ec454c107d0d",
//     title: "Chicago",
//     date_leave: "2019-04-03T04:00:00.000Z",
//     date_return: "2019-05-18T04:00:00.000Z",
//     travel: [],
//     lodging: [],
//     activity: [],
//     public: false},
//   {id: "677cd121b8b116545365765",
//     title: "Philly",
//     date_leave: "2019-04-03T04:00:00.000Z",
//     date_return: "2019-05-18T04:00:00.000Z",
//     travel: [],
//     lodging: [],
//     activity: [],
//     public: false}],

//   author_of_snippets: [{
//     id: "5cd121b8b116ec454c107d0d",
//     title: "Chicago",
//     date_leave: "2019-04-03T04:00:00.000Z",
//     date_return: "2019-05-18T04:00:00.000Z",
//     timestamp: "2019-05-18T04:00:00.000Z"
//   },

//   {
//     id: "677cd121b8b116545365765",
//     title: "Philly",
//     date_leave: "2019-04-03T04:00:00.000Z",
//     date_return: "2019-05-18T04:00:00.000Z",
//     timestamp: "2019-05-18T04:00:00.000Z"
//   }],

// };

function itinerator(state = initialState, action) {
  switch (action.type) {
    // fetch status
    case FETCH_REQUEST:
      const requested = Object.assign({}, state, {
        status: action.status
      });
      return requested;
    case FETCH_FAILURE:
      const failed = Object.assign({}, state, {
        status: action.status,
        error: action.error
      });
      return failed;
    // fetch status = success reducers
    case FETCH_DB_SUCCESS:
    let snippets = action.itinerarySnippets[0].map((snippet => snippet));
      let successful = Object.assign({}, state, {
        status: action.status,
        author_of_snippets: snippets
      });
      return successful;
    case FETCH_ITINERARY_SUCCESS:
    console.log('reducer: fetchitin', action.itinerary.title)
      successful = Object.assign({}, state, {
        status: action.status,
        itineraries: action.itinerary
      });
      return successful;
    case POST_ITINERARY_SUCCESS:
      successful = Object.assign({}, state, {
        status: action.status,
        itinerary: action.post
      });
      return successful;
    case POST_ITEM_SUCCESS:
      successful = Object.assign({}, state, {
        status: action.status,
        itinerary: action.category.push(action.post)
      });
      return successful;
    case DELETE_SUCCESS:
      successful = Object.assign({}, state, {
        status: action.status,
        message: action.message
      });
      return successful;
      case EDIT_ITINERARY_SUCCESS:
      successful = Object.assign({}, state, {
        status: action.status,
        itinerary: action.itinerary
      });
      return successful;
      case EDIT_ITEM_SUCCESS:
      let updated = action.item;
      let stateCategory = state.itinerary.category;
      successful = Object.assign({}, state, {
        status: action.status,
        itinerary: { ...state, stateCategory: stateCategory.map(
          (id, i) => i === id ? {...stateCategory, category: updated} : null
      )}
      });
      return successful;
    default:
      return state;
  }
}

export default itinerator;



import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_DB_SUCCESS,
  FETCH_PACKLIST_SUCCESS,
  POST_PACKLIST_SUCCESS,
  DELETE_SUCCESS,
  EDIT_PACKLIST_SUCCESS,
  ADD_CARD,
} from "../actions";

const initialState = {
  status: "",
  error: "",

  packLists: [{ 
    title: null,
    date_leave: null,
    date_return: null,
    list: [null],
    timestamp: null
  }],

  currentView: {
    title: null,
    date_leave: null,
    date_return: null,
    list: [null],
    timestamp: null
  }
};


// const initialState = {
//   status: "",
//   error: "",

//   packLists: [{ 
//     title: 'Chicago',
//     date_leave: '06/01/19',
//     date_return: '06/03/2019',
//     list: ['Sneakers', 'Phone Charger'],
//     timestamp: '5/14/19'
//   },
//   {
//   title: 'Brooklyn',
//   date_leave: '06/15/19',
//   date_return: '06/16/19',
//   list: ['Wallet', 'Toothbrush'],
//   timestamp: '5/14/19'
// }]
// };


function packApp(state = initialState, action) {
  switch (action.type) {

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

    case FETCH_DB_SUCCESS:
    let snippets = action.packListSnippets[0].map((snippet => snippet));
      let successful = Object.assign({}, state, {
        status: action.status,
        packLists: snippets
      });
      return successful;

    case FETCH_PACKLIST_SUCCESS:
    console.log('reducer: fetchitin', action.packList.title)
      successful = Object.assign({}, state, {
        status: action.status,
        currentView: action.packList
      });
      return successful;

    case POST_PACKLIST_SUCCESS:
      successful = Object.assign({}, state, {
        status: action.status,
        packList: action.post
      });
      return successful;

    case DELETE_SUCCESS:
      successful = Object.assign({}, state, {
        status: action.status,
        message: action.message
      });

      return successful;

      case EDIT_PACKLIST_SUCCESS:
      successful = Object.assign({}, state, {
        status: action.status,
        packList: action.packList
      });
      return successful;
      
      case ADD_CARD:
        let cards = state.lists.cards.map((card, index) => {
            if (index !== action.index) {
                return card;
            }
            return Object.assign({}, card, {
                cards: [...cards, {
                    text: action.text
                }]
            });
        });

        return Object.assign({}, state, {
            cards
        });

    default:
      return state;
  }
}

export default packApp;



import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_DB_SUCCESS,
  POST_PACKLIST_SUCCESS,
  DELETE_SUCCESS,
  ADD,
  REMOVE,
  STRIKEOUT,
  FETCH_PACKLIST_SUCCESS,
  EDIT_PACKLIST_SUCCESS
} from "../actions";

const initialState = {
  status: "",
  error: "",

  packLists: [{}],

  currentData: null
};

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
        error: action.error.message
      });
      return failed;

    case FETCH_DB_SUCCESS:
      let snippets = action.packListSnippets[0].map(snippet => snippet);
      let successful = Object.assign({}, state)
      let successfulNext = JSON.parse(JSON.stringify(successful));
      let successfulNextTwo = Object.assign({}, successfulNext, {
        packLists: snippets
      });
      let updatedSuccessful = Object.assign({}, successfulNextTwo, {
        status: action.status,
      })
      return updatedSuccessful;

    case POST_PACKLIST_SUCCESS:
      let successfulPost = Object.assign({}, state, {
        status: action.status
      });
      return successfulPost;

    case DELETE_SUCCESS: // remove from state?
      let successfulDeletion = Object.assign({}, state, {
        status: action.status,
        message: action.message
      });

      return successfulDeletion;

    case FETCH_PACKLIST_SUCCESS:
      let successfulPackList = Object.assign({}, state, {
        status: action.status,
        currentData: action.viewOne
      });
      return successfulPackList;

    case EDIT_PACKLIST_SUCCESS:
      let successfulEdit = Object.assign({}, state.currentData)
      let newEditRequest = JSON.parse(JSON.stringify(successfulEdit));
      let returnMe = Object.assign({}, newEditRequest, {        
      pack: action.post,
      timestamp: Date.now()}); // saving PUT response to new state
      let updated = Object.assign({}, state, returnMe, {
        status: action.status,
      }) // saving status response to new state after post is updated to ensure component doesn't rerender before new props are mapped 
      return updated;

    case ADD:
      let newState = Object.assign({}, state);
      let newStateObj = JSON.parse(JSON.stringify(newState));
      action.values.pack.forEach(item => newStateObj.currentData.pack.push(item))
      return newStateObj;

    case REMOVE:
    let remove = Object.assign({}, state);
    let removeObj = JSON.parse(JSON.stringify(remove));
    removeObj.currentData.pack.splice(action.index, 1);
    return removeObj;

    case STRIKEOUT:
    let strike = Object.assign({}, state);
    let strikeObj = JSON.parse(JSON.stringify(strike));
      if (action.toggle === true) {
        strikeObj.currentData.pack[action.index]["complete"] = false;
        return strikeObj;
      } else {
        strikeObj.currentData.pack[action.index]["complete"] = true;
        return strikeObj;
      }

    default:
      return state;
  }
}

export default packApp;

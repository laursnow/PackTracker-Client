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
      let successful = Object.assign({}, state, {
        status: action.status,
        packLists: snippets
      });
      return successful;

    case POST_PACKLIST_SUCCESS:
      let successfulPost = Object.assign({}, state, {
        status: action.status,
        packLists: action.post
      });
      return successfulPost;

    case DELETE_SUCCESS:
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
      let successfulEdit = Object.assign({}, state, {
        status: action.status,
        currentData: action.packList
      });
      return successfulEdit;

    case ADD:
      let newObj = action.values.pack.map(pack => pack );
      const add = Object.assign({}, state);
      console.log(newObj, add);
      return add;

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

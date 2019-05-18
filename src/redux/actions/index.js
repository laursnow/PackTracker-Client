import { API_BASE_URL } from "../../config";

// Setting status

export const FETCH_REQUEST = "FETCH_REQUEST";
export const fetchRequest = () => ({
  type: FETCH_REQUEST,
  status: "loading"
});

export const FETCH_FAILURE = "FETCH_FAILURE";
export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  status: "error",
  error
});

// Async success actions

export const FETCH_DB_SUCCESS = "FETCH_DB_SUCCESS";
export const fetchDbSuccess = packListSnippets => ({
  type: FETCH_DB_SUCCESS,
  status: "success",
  packListSnippets
});

export const POST_PACKLIST_SUCCESS = "POST_PACKLIST_SUCCESS";
export const postPackListSuccess = post => ({
  type: POST_PACKLIST_SUCCESS,
  status: "success",
  post
});

export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const deleteSuccess = (message, index) => ({
  type: DELETE_SUCCESS,
  status: "success",
  message,
  index
});

export const FETCH_PACKLIST_SUCCESS = "FETCH_PACKLIST_SUCCESS";
export const fetchPackListSuccess = viewOne => ({
  type: FETCH_PACKLIST_SUCCESS,
  status: "success",
  viewOne
});

export const EDIT_PACKLIST_SUCCESS = "EDIT_PACKLIST_SUCCESS";
export const editPackListSuccess = post => ({
  type: EDIT_PACKLIST_SUCCESS,
  status: "success",
  post
});

// Actions for editing individual lists

export const ADD = "ADD";
export const add = values => ({
  type: ADD,
  values
});

export const REMOVE = "REMOVE";
export const remove = index => ({
  type: REMOVE,
  index
});

export const STRIKEOUT = "STRIKEOUT";
export const strikeout = (toggle, index) => ({
  type: STRIKEOUT,
  toggle,
  index
});

// Fetching all lists to display snippet of each on user dashboard

export const fetchDashboard = id => (dispatch, getState) => {
  dispatch(fetchRequest());
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/packList/db/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(item => {
      dispatch(fetchDbSuccess(item));
    })
    .catch(err => {
      dispatch(fetchFailure(err));
    });
};

// Fetching one selected individual packList that the user wants to expand/interact with

export const fetchPackList = id => (dispatch, getState) => {
  dispatch(fetchRequest());
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/packList/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(item => {
      dispatch(fetchPackListSuccess(item));
    })
    .catch(err => {
      dispatch(fetchFailure(err));
    });
};

export const postPackList = post => (dispatch, getState) => {
  dispatch(fetchRequest());
  const authToken = getState().auth.authToken;

  fetch(`${API_BASE_URL}/packList`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(item => {
      dispatch(postPackListSuccess(item));
    })
    .catch(err => {
      dispatch(fetchFailure(err));
    });
};

export const deletePackList = (id, index) => (dispatch, getState) => {
  console.log("deletepackList firiing", id, `${API_BASE_URL}/packList/${id}`);
  dispatch(fetchRequest());
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/packList/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
    })
    .then(() => {
      dispatch(deleteSuccess("List deleted successfully.", index));
    })
    .catch(err => {
      dispatch(fetchFailure(err));
    });
};

export const editPackList = (post, id) => (dispatch, getState) => {
  dispatch(fetchRequest());
  console.log("update firing", post, id);
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/packList/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(item => {
      dispatch(editPackListSuccess(item));
    })
    .catch(err => {
      dispatch(fetchFailure(err));
    });
};

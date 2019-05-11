import { API_BASE_URL } from '../../config'

export const FETCH_REQUEST = "FETCH_REQUEST";
export const fetchRequest = () => ({
  type: FETCH_REQUEST,
  status: 'loading'
});

export const FETCH_FAILURE = "FETCH_FAILURE";
export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  status: 'error',
  error
});

// Success actions

export const FETCH_DB_SUCCESS = "FETCH_DB_SUCCESS";
export const fetchDbSuccess = (itinerarySnippets) => ({
  type: FETCH_DB_SUCCESS,
  status: 'success',
  itinerarySnippets
});

export const FETCH_ITINERARY_SUCCESS = "FETCH_ITINERARY_SUCCESS";
export const fetchItinerarySuccess = (itinerary) => ({
  type: FETCH_ITINERARY_SUCCESS,
  status: 'success',
  itinerary
});

export const POST_ITINERARY_SUCCESS = "POST_ITINERARY_SUCCESS";
export const postItinerarySuccess = (post) => ({
  type: POST_ITINERARY_SUCCESS,
  status: 'success',
  post
});

export const POST_ITEM_SUCCESS = "POST_ITEM_SUCCESS";
export const postItemSuccess = (post, category) => ({
  type: POST_ITEM_SUCCESS,
  status: 'success',
  post,
  category
});

export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const deleteSuccess = (message) => ({
  type: DELETE_SUCCESS,
  status: 'success',
  message
});

export const EDIT_ITINERARY_SUCCESS = "EDIT_ITINERARY_SUCCESS";
export const editItinerarySuccess = (post) => ({
  type: EDIT_ITINERARY_SUCCESS,
  status: 'success',
  post
});

export const EDIT_ITEM_SUCCESS = "EDIT_ITEM_SUCCESS";
export const editItemSuccess = (post, category, id) => ({
  type: EDIT_ITEM_SUCCESS,
  status: 'success',
  post,
  category,
  id
});

// Fetching all itineraries to display snippet on user dashboard

export const fetchDashboard = () => dispatch => {
    dispatch(fetchRequest());
    fetch(`${API_BASE_URL}/itinerary`).then(res => { 
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(item => {
        dispatch(fetchDbSuccess(item));
    }).catch(err => {
        dispatch(fetchFailure(err));
    });
};

// Fetching one selected individual itinerary that the user wants to expand/interact with

export const fetchItinerary = (id) => dispatch => {
    dispatch(fetchRequest());
    fetch(`${API_BASE_URL}/itinerary/${id}`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(item => {
        dispatch(fetchItinerarySuccess(item));
    }).catch(err => {
        dispatch(fetchFailure(err));
    });
};


export const postItinerary = (post) => dispatch => {
    dispatch(fetchRequest());
    console.log('postItinerary');
    fetch(`${API_BASE_URL}/itinerary`, {
        method: "POST",
        // headers:
        body: JSON.stringify(post)
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(item => {
        dispatch(postItinerarySuccess(item));
    }).catch(err => {
        dispatch(fetchFailure(err));
    });
};

      // .then(res => {
      //   if (!res.ok) {
      //     if (
      //       res.headers.has("content-type") &&
      //       res.headers.get("content-type").startsWith("application/json")
      //     ) {
      //       // It's a nice JSON error returned by us, so decode it
      //       return res.json().then(err => Promise.reject(err));
      //     }
      //     // It's a less informative error returned by express
      //     return Promise.reject({
      //       code: res.status,
      //       message: res.statusText
      //     });
      //   }
      //   return;
      // })
      // .then(() => console.log("Submitted with values", values))
      // .catch(err => {
      //   const { reason, message, location } = err;
      //   if (reason === "ValidationError") {
      //     // Convert ValidationErrors into SubmissionErrors for Redux Form
      //     return Promise.reject(
      //       new SubmissionError({
      //         [location]: message
      //       })
      //     );
      //   }
      //   return Promise.reject(
      //     new SubmissionError({
      //       _error: "Error submitting message"
      //     })
      //   );
      // });


export const deleteItinerary = (id) => dispatch => {
    dispatch(fetchRequest());
    fetch(`${API_BASE_URL}/itinerary/${id}`, {
        method: "DELETE",
        // headers:
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(item => {
        dispatch(deleteSuccess('Deletion successful.'));
    }).catch(err => {
        dispatch(fetchFailure(err));
    });
};

export const editItinerary = (id, post) => dispatch => {
    dispatch(fetchRequest());
    fetch(`${API_BASE_URL}/itinerary/${id}`, {
        method: "PUT",
        // headers:
        body: JSON.stringify(post)
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(item => {
        dispatch(editItinerarySuccess(item));
    }).catch(err => {
        dispatch(fetchFailure(err));
    });
};

export const deleteItem = (id, category) => dispatch => {
    dispatch(fetchRequest());
    fetch(`${API_BASE_URL}/${category}/${id}`, {
        method: "DELETE",
        // headers:
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(item => {
        dispatch(deleteSuccess('Deletion successful.'));
    }).catch(err => {
        dispatch(fetchFailure(err));
    });
};

export const postItem = (post, category) => dispatch => {
    console.log('postItem', `${API_BASE_URL}/${category}`);
    dispatch(fetchRequest());
    fetch(`${API_BASE_URL}/${category}`, {
        method: "POST",
        // headers:
        body: JSON.stringify(post)
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(item => {
        dispatch(postItemSuccess(item, category));
    }).catch(err => {
        dispatch(fetchFailure(err));
    });
};

export const editItem = (id, category, post) => dispatch => {
    dispatch(fetchRequest());
    fetch(`${API_BASE_URL}/${category}/${id}`, {
        method: "PUT",
        // headers:
        body: JSON.stringify(post)
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(item => {
        dispatch(editItemSuccess(item, category, id));
    }).catch(err => {
        dispatch(fetchFailure(err));
    });
};


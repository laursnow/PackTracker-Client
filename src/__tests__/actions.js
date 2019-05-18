
import {
    FETCH_FAILURE,
    fetchRequest,
    FETCH_REQUEST,
    fetchFailure,
    FETCH_DB_SUCCESS,
    fetchDbSuccess,
    POST_PACKLIST_SUCCESS,
    postPackListSuccess,
    DELETE_SUCCESS,
    deleteSuccess,
    ADD,
    add,
    REMOVE,
    remove,
    STRIKEOUT,
    strikeout,
    FETCH_PACKLIST_SUCCESS,
    fetchPackListSuccess,
    EDIT_PACKLIST_SUCCESS,
    editPackListSuccess
  } from "../redux/actions/index";

describe('fetchRequest', () => {
  it('Should return the action', () => {
    const status = "loading";
    const action = fetchRequest();
    expect(action.type).toEqual(FETCH_REQUEST);
    expect(action.status).toEqual(status)
  })
})

describe('fetchFailure', () => {
    it('Should return the action', () => {
      const status = "error";
      const action = fetchFailure();
      expect(action.type).toEqual(FETCH_FAILURE);
      expect(action.status).toEqual(status)
    })
  })
  
  describe('fetchDbSuccess', () => {
    it('Should return the action', () => {
      const packListSnippets = {key: "value"}
      const action = fetchDbSuccess(packListSnippets);
      expect(action.type).toEqual(FETCH_DB_SUCCESS);
      expect(action.packListSnippets).toEqual(packListSnippets)
    })
  })
  



  describe('postPackListSuccess', () => {
    it('Should return the action', () => {
        const post = {key: "value"}
        const action = postPackListSuccess(post);
        expect(action.type).toEqual(POST_PACKLIST_SUCCESS);
        expect(action.post).toEqual(post);
    });
});

describe('deleteSuccess', () => {
    it('Should return the action', () => {
        const index = 0
        const action = deleteSuccess(index);
        expect(action.type).toEqual(DELETE_SUCCESS);
        expect(action.index).toEqual(index);
    });
});

describe('fetchPackListSuccess', () => {
    it('Should return the action', () => {
        const viewOne = {key: "value"}
        const action = fetchPackListSuccess(viewOne);
        expect(action.type).toEqual(FETCH_PACKLIST_SUCCESS);
        expect(action.viewOne).toEqual(viewOne);
    });
});

describe('editPackListSuccess', () => {
    it('Should return the action', () => {
        const post = {key: "value"}
        const action = editPackListSuccess(post);
        expect(action.type).toEqual(EDIT_PACKLIST_SUCCESS);
        expect(action.post).toEqual(post);
    });
});

describe('add', () => {
    it('Should return the action', () => {
        const values = [{key: "value"}]
        const action = add(values);
        expect(action.type).toEqual(ADD);
        expect(action.values).toEqual(values);
    });
});

describe('remove', () => {
    it('Should return the action', () => {
        const index = 0
        const action = remove(index);
        expect(action.type).toEqual(REMOVE);
        expect(action.index).toEqual(index);
    });
});

describe('strikeout', () => {
    it('Should return the action', () => {
        const toggle = true;
        const index = 0;
        const action = strikeout(toggle, index);
        expect(action.type).toEqual(STRIKEOUT);
        expect(action.index).toEqual(index);
    });
});

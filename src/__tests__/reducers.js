import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  fetchDbSuccess,
  postPackListSuccess,
  deleteSuccess,
  add,
  remove,
  strikeout,
  fetchPackListSuccess
} from "../redux/actions/index";

import packApp from "../redux/reducers/index";

Enzyme.configure({ adapter: new Adapter() });

describe("packApp", () => {
  // dummy data

  let initialState = {
    status: "",
    error: "",

    packLists: [{}],

    currentData: null
  };

  let stateAfterFetch = {
    status: "success",
    error: "",

    packLists: [
      [
        {
          title: "Chicago",
          date_leave: "06/01/2019",
          date_return: "06/03/2019",
          pack: [
            { pack_item: "Wallet" },
            { pack_item: "Sunglasses" },
            { pack_item: "Towel" },
            { pack_item: "Bathing Suit" },
            { pack_item: "Sandals" }
          ]
        },
        {
          title: "Toronto",
          date_leave: "08/02/2019",
          date_return: "08/16/2019",
          pack: [
            { pack_item: "Wallet" },
            { pack_item: "Jacket" },
            { pack_item: "Passport" }
          ]
        }
      ]
    ],
    currentData: {
      title: "Toronto",
      date_leave: "08/02/2019",
      date_return: "08/16/2019",
      pack: [
        { pack_item: "Wallet" },
        { pack_item: "Jacket", complete: false },
        { pack_item: "Passport" }
      ]
    }
  };

  it("Should set the initial state when nothing is passed in", () => {
    const state = packApp(undefined, { type: "__UNKNOWN" });
    expect(state).toEqual({
      status: "",
      error: "",

      packLists: [{}],

      currentData: null
    });
  });

  it("Should return the current state on an unknown action", () => {
    let currentState = {};
    const state = packApp(currentState, { type: "__UNKNOWN" });
    expect(state).toBe(currentState);
  });

  describe("fetchDbSuccess", () => {
    it("Update state with snippets of each user's saved list, to be rendered in dashboard component", () => {
      let packListSnippets = [
        [
          {
            title: "Chicago",
            date_leave: "06/01/2019",
            date_return: "06/03/2019",
            pack: [
              { pack_item: "Wallet" },
              { pack_item: "Sunglasses" },
              { pack_item: "Towel" },
              { pack_item: "Bathing Suit" },
              { pack_item: "Sandals" }
            ]
          },
          {
            title: "Toronto",
            date_leave: "08/02/2019",
            date_return: "08/16/2019",
            pack: [
              { pack_item: "Wallet" },
              { pack_item: "Jacket" },
              { pack_item: "Passport" }
            ]
          }
        ]
      ];
      let state = packApp(initialState, fetchDbSuccess(packListSnippets));
      let received = [state.packLists];
      let expected = stateAfterFetch.packLists;
      expect(received).toEqual(expected);
    });
  });
  describe("postPackListSuccess", () => {
    it("Successfully updates status, indicating post success; nothing else in state is changed", () => {
      let newPost = [
        [
          {
            title: "Tokyo",
            date_leave: "06/01/2019",
            date_return: "06/03/2019",
            pack: [
              { pack_item: "Backpack" },
              { pack_item: "Sneakers" },
              { pack_item: "Earphones" }
            ]
          }
        ]
      ];
      let state = packApp(initialState, postPackListSuccess(newPost));
      let received = state.status;
      let expected = "success";
      expect(received).toEqual(expected);
      expect(state.packLists).toEqual(initialState.packLists);
    });
  });
  describe("deleteSuccess", () => {
    it("Successfully updates store status", () => {
      let index = 0;
      let state = packApp(
        stateAfterFetch,
        deleteSuccess("List deleted successfully.", index)
      );
      let received = state.status;
      let expected = "success";
      expect(received).toEqual(expected);
      expect(state.message).toEqual("List deleted successfully.");
    });
  });
  describe("add", () => {
    it("Adds item(s) to store of selected pack list", () => {
      let values = {
        pack: [
          { pack_item: "Backpack" },
          { pack_item: "Sneakers" },
          { pack_item: "Earphones" }
        ]
      };

      let state = packApp(stateAfterFetch, add(values));
      let received = state.currentData.pack;
      let one = { pack_item: "Backpack" };
      let two = { pack_item: "Sneakers" };
      let three = { pack_item: "Earphones" };
      let original = stateAfterFetch.currentData.pack[0];
      expect(received).toContainEqual(one); // does the array contain each item?
      expect(received).toContainEqual(two);
      expect(received).toContainEqual(three);
      if (original != null) {
        expect(received).toContainEqual(original); // checking to make sure original item in array (if it existed) was not moved or overwritten
      }
    });
  });
  describe("remove", () => {
    it("Removes item(s) from store of selected pack list", () => {
      let expected = stateAfterFetch.currentData.pack[0]; // false
      let state = packApp(stateAfterFetch, remove(0));
      let received = state.currentData.pack[0]; // should NOT be false if successful
      expect(received).not.toBe(expected);
    });
  });

  describe("strikeout", () => {
    it("toggles strikethrough on list items by changing boolean value", () => {
      let expected = stateAfterFetch.currentData.pack[1].complete;
      let state = packApp(stateAfterFetch, strikeout(expected, 1));
      let received = state.currentData.pack[1].complete;
      expect(received).not.toBe(expected);
    });
  });

  describe("fetchPackListSuccess", () => {
    it("displays selected single list", () => {
      let viewOne = stateAfterFetch.packLists[0]; // Sending in the list at index 0 for display (currentData in store), which currently holds the list at index 1
      let state = packApp(initialState, fetchPackListSuccess(viewOne));
      let received = state.currentData;
      let expected = viewOne;
      expect(received).toEqual(expected); // what we sent in to the reducer is what we expect to be returned from the new store
    });
  });
});

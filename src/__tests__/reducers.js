import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
import packApp from "../redux/reducers/index";


Enzyme.configure({ adapter: new Adapter() });

describe("packApp", () => {

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

});

import React from "react";
import { CreatePackList } from "../components/display/create";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("<CreatePackList />", () => {
  it("Renders without crashing", () => {
    shallow(<CreatePackList handleSubmit={() => {}} />);
  });
});

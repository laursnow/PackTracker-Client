import React from "react";
import { Registration } from "../components/registration-page";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("<Registration />", () => {
  it("Renders without crashing", () => {
    shallow(<Registration />);
  });
});

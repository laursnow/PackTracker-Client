import React from "react";

import { Nav } from "../components/nav";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

describe("<Nav />", () => {
  it("Renders without crashing", () => {
    shallow(<Nav />);
  });
});

import React from "react";
import { ListItem } from "../components/display/listitem";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("<ListItem />", () => {
  it("Renders without crashing", () => {
    shallow(<ListItem />);
  });
});

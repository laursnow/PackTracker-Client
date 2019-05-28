import React from "react";
import { LandingPage } from "../components/landing-page";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("<LandingPage />", () => {
  it("Renders without crashing", () => {
    shallow(<LandingPage />);
  });
});

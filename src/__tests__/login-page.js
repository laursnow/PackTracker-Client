import React from "react";
import { Login } from "../components/login-page";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("<LoginPage />", () => {
  it("Renders without crashing", () => {
    shallow(<Login />);
  });
});

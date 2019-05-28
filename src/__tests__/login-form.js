import React from "react";
import { LoginForm } from "../components/forms/login-form";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("<RegistrationForm />", () => {
  it("Renders without crashing", () => {
    shallow(<LoginForm handleSubmit={() => {}} />);
  });
});

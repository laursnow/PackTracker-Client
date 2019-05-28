import React from "react";

import { RegistrationForm } from "../components/forms/registration-form";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

describe("<RegistrationForm />", () => {
  it("Renders without crashing", () => {
    shallow(<RegistrationForm handleSubmit={() => {}} />);
  });
});

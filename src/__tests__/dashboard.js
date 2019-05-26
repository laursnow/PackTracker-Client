import React from 'react';
import {Dashboard} from '../components/display/dashboard';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});


describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
        <Dashboard />
        </Provider>);
    })
})
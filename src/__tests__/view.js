import React from 'react';
import {shallow} from 'enzyme';
import {ViewPackListPage} from '../components/display/view'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
 
Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});


describe('<ViewPackListPage />', () => {
    it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
        <ViewPackListPage />
        </Provider>);
    })
})


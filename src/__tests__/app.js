import React from 'react';
import {App} from '../components/App';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('Renders without crashing', () => {
        shallow(<App />);
    })
})

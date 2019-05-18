import React from 'react';

import {About} from '../components/about';
import {LandingPage} from '../components/landing-page';
import {ErrorComponent} from '../components/error'; 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('<About />', () => {
    it('Renders without crashing', () => {
        shallow(<About />);
    })
});

describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingPage/>);
    })
});


describe('<ErrorComponent />', () => {
    it('Renders without crashing', () => {
        shallow(<ErrorComponent />);
    })
});

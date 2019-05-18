import React from 'react';
import {shallow} from 'enzyme';
import About from '../components/about';
import LandingPage from '../components/landing-page';
import Loader from '../components/Loader';
import ErrorComponent from '../components/error'; 


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

describe('<Loader />', () => {
    it('Renders without crashing', () => {
        shallow(<Loader />);
    })
});

describe('<ErrorComponent />', () => {
    it('Renders without crashing', () => {
        shallow(<ErrorComponent />);
    })
});

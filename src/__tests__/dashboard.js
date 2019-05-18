import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from '../components/display/dashboard';
import Snippet from '../components/snippet';

describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
        shallow(<Dashboard />);
    })
});

describe('<Snippet />', () => {
    it('Renders without crashing', () => {
        shallow(<Snippet />);
    })
})
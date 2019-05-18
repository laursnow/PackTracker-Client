import React from 'react';

import {Login} from '../components/login-page';
import {LoginForm} from '../components/forms/login-form';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('<Login />', () => {
    it('Renders without crashing', () => {
        shallow(<Login />);
    })
});

describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
        shallow(<LoginForm handleSubmit={() => {}}/>);
    })
})
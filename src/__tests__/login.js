import React from 'react';
import {shallow} from 'enzyme';
import Login from '../components/login-page';
import LoginForm from '../components/forms/login-form';

describe('<Login />', () => {
    it('Renders without crashing', () => {
        shallow(<Login />);
    })
});

describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
        shallow(<LoginForm />);
    })
})
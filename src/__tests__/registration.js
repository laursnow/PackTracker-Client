import React from 'react';
import {shallow} from 'enzyme';
import Registration from '../components/registration-page';
import RegistrationForm from '../components/forms/registration-form';

describe('<Registration />', () => {
    it('Renders without crashing', () => {
        shallow(<Registration />);
    })
});

describe('<RegistrationForm />', () => {
    it('Renders without crashing', () => {
        shallow(<RegistrationForm />);
    })
})
import React from 'react';
import {shallow} from 'enzyme';
import CreatePackList from '../components/display/create';
import CreatePackListForm from '../components/forms/add-packlist';

describe('<CreatePackList />', () => {
    it('Renders without crashing', () => {
        shallow(<CreatePackList />);
    })
})

describe('<CreatePackListForm />', () => {
    it('Renders without crashing', () => {
        shallow(<CreatePackListForm />);
    })
})
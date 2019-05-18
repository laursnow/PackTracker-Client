import React from 'react';
import {shallow} from 'enzyme';
import ViewPackList from '../components/display/view';
import ListItem from '../components/display/listitem'
import AddListItemForm from '../components/forms/add-listitemform';

describe('<ViewPackListLogin />', () => {
    it('Renders without crashing', () => {
        shallow(<ViewPackList />);
    })
});

describe('<ListItem />', () => {
    it('Renders without crashing', () => {
        shallow(<ListItem />);
    })
})

describe('<AddListItemForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddListItemForm />);
    })
})
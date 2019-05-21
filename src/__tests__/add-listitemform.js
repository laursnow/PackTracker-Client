import React from 'react';
import {AddListItemForm} from '../components/forms/add-listitemform';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('<AddListItemForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddListItemForm handleSubmit={() => {}}/>);
    })
});


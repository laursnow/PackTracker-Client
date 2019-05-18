import React from 'react';
import {shallow} from 'enzyme';
import {ListItem} from '../components/display/listitem'
import {AddListItemForm} from '../components/forms/add-listitemform';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });


describe('<ListItem />', () => {
    it('Renders without crashing', () => {
        shallow(<ListItem />);
    })
})

describe('<AddListItemForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddListItemForm handleSubmit={() => {}}/>);
    })
})
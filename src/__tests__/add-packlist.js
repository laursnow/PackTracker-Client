import React from 'react';
import {CreatePackListForm} from '../components/forms/create-packlist';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
 
Enzyme.configure({ adapter: new Adapter() });


describe('<CreatePackListForm />', () => {
    it('Renders without crashing', () => {
        shallow(<CreatePackListForm handleSubmit={() => {}}/>);
    })
})
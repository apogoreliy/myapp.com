import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import HandleHeader from '../../app/containers/HandleHeader';
import {storeFake} from '../storeFake'

describe('HandleHeader' , () => {
    let component;

    beforeEach(() => {
        const store = storeFake({});
        const wrapper = shallow(
            <Provider store={store}>
                <HandleHeader />
            </Provider>
        );

        component = wrapper.find(HandleHeader);
    });

    it('renders correct', () => {
        expect(component).to.exist;
    });
});
import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';

import Body from '../../app/components/App';
import HandleCategory from '../../app/containers/HandleCategory';
import HandleProduct from '../../app/containers/HandleProduct';

describe('Body' , () => {
    let component;

    beforeEach(() => {
        component = shallow(<Body />);
    });

    it('renders correct', () => {
        expect(component).to.exist;
    });

    it('has HandleHeader element"', () => {
        expect(component.find(HandleCategory)).to.exist;
    });

    it('has Body element"', () => {
        expect(component.find(HandleProduct)).to.exist;
    });

    it('has 2 children"', () => {
        expect(component.children()).to.have.length(2);
    });
});
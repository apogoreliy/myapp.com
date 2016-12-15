import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Body from '../../app/components/Body';
import HandleCategoriesList from '../../app/containers/HandleCategoriesList';
import HandleProductsList from '../../app/containers/HandleProductsList';

describe('Body' , () => {
    let component;

    beforeEach(() => {
        component = shallow(<Body />);
    });

    it('renders correct', () => {
        expect(component).to.exist;
    });

    it('has HandleHeader element"', () => {
        expect(component.find(HandleCategoriesList)).to.exist;
    });

    it('has HandleProduct element"', () => {
        expect(component.find(HandleProductsList)).to.exist;
    });

    it('has 2 children"', () => {
        expect(component.children()).to.have.length(2);
    });
});
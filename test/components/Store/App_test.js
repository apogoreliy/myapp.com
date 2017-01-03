import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../../../app/components/Store/App';
import HandleHeader from '../../../app/containers/Store/HandleHeader';
import Body from '../../../app/components/Store/Body';

describe('App' , () => {
    let component;

    beforeEach(() => {
        component = shallow(<App />);
    });

    it('renders correct', () => {
        expect(component).to.exist;
    });

    it('has class "container"', () => {
        expect(component.hasClass('container')).to.equal(true);
    });

    it('has HandleHeader element"', () => {
        expect(component.find(HandleHeader)).to.exist;
    });

    it('has Body element"', () => {
        expect(component.find(Body)).to.exist;
    });

    it('has 2 children"', () => {
        expect(component.children()).to.have.length(2);
    });
});
import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';

import App from '../../app/components/App';
import HandleHeader from '../../app/containers/HandleHeader';
import Body from '../../app/components/Body';
import DeleteModal from '../../app/containers/DeleteModal';

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

    it('has DeleteModal element"', () => {
        expect(component.find(DeleteModal)).to.exist;
    });

    it('has 3 children"', () => {
        expect(component.children()).to.have.length(3);
    });
});
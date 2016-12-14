import React from 'react';
import App from '../../app/components/App';
import { shallow, mount, render } from 'enzyme';
import chai, { expect } from 'chai';

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

});
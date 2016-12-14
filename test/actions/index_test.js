import * as ActionCreators from '../../app/actions/index';
import * as ActionTypes from '../../app/actions/types';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

chai.use(sinonChai);

describe('Actions', () => {
    before(() => {

        //MockDate.set(new Date());
    });
    //after(() => MockDate.reset());

    /*const appState = {
        newMpg: 20,
        tradeMpg: 10,
        newPpg: 1.50,
        tradePpg: 1.50,
        milesDriven: 100,
        milesDrivenTimeframe: 'week',
        displayResults: false,
        dateModified: null,
        necessaryDataIsProvidedToCalculateSavings: false,
        savings: {
            monthly: 0,
            annual: 0,
            threeYear: 0
        }
    };
    */

/*
    it('should create an action to save fuel savings', () => {
        const dispatch = sinon.spy();
        const expected = {
            type: ActionTypes.SAVE_FUEL_SAVINGS,
            dateModified,
            settings: appState
        };

        // we expect this to return a function since it is a thunk
        expect(typeof (ActionCreators.saveFuelSavings(appState))).to.equal('function');
        // then we simulate calling it with dispatch as the store would do
        ActionCreators.saveFuelSavings(appState)(dispatch);
        // finally assert that the dispatch was called with our expected action
        expect(dispatch).to.have.been.calledWith(expected);
    });
*/

    it('create an action to close DeleteModal component', () => {
        const actual = ActionCreators.closeDeleteModal();
        const expected = {
            type: ActionTypes.CLOSE_DELETE_MODAL,
            openDeleteCategoryModal : false,
            openDeleteProductModal : false,
            productID : null,
            categoryID : null
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to open ProductModal component', () => {
        const id = 10;
        const actual = ActionCreators.openEditProductModal(id);
        const expected = {
            type: ActionTypes.OPEN_EDIT_PRODUCT_MODAL,
            openEditProductModal : true,
            productID : id
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to open DeleteProductModal component', () => {
        const id = 10;
        const actual = ActionCreators.openDeleteProductModal(id);
        const expected = {
            type: ActionTypes.OPEN_DELETE_PRODUCT_MODAL,
            openDeleteProductModal : true,
            productID : id
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to open ProductModal component', () => {
        const actual = ActionCreators.openProductModal();
        const expected = {
            type: ActionTypes.OPEN_ADD_PRODUCT_MODAL,
            openAddProductModal : true
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to close ProductModal component', () => {
        const actual = ActionCreators.closeProductModal();
        const expected = {
            type: ActionTypes.CLOSE_PRODUCT_MODAL,
            openAddProductModal : false,
            openEditProductModal: false
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to select category', () => {
        const selectedCategory = 2;
        const actual = ActionCreators.selectCategory(selectedCategory);
        const expected = {
            type: ActionTypes.SELECT_CATEGORY,
            selectedCategory
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to open CategoryModal component', () => {
        const actual = ActionCreators.openCategoryModal();
        const expected = {
            type: ActionTypes.OPEN_ADD_CATEGORY_MODAL,
            openAddCategoryModal : true
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to close CategoryModal component', () => {
        const actual = ActionCreators.closeCategoryModal();
        const expected = {
            type: ActionTypes.CLOSE_CATEGORY_MODAL,
            openAddCategoryModal : false
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to open DeleteCategoryModal component', () => {
        const id = 10;
        const actual = ActionCreators.openDeleteCategoryModal(id);
        const expected = {
            type: ActionTypes.OPEN_DELETE_CATEGORY_MODAL,
            openDeleteCategoryModal : true,
            categoryID : id
        };

        expect(actual).to.deep.equal(expected);
    });

});

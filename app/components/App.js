import React from 'react';
import HandleHeader from '../containers/HandleHeader';
import Body from './Body';
import DeleteModal from '../containers/DeleteModal';

export default () => (
    <div className="container">
        <HandleHeader />
        <Body/>
        <DeleteModal />
    </div>
);
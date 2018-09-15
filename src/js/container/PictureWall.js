import React, { Component, Fragment } from 'react';
import PictureWall from '@Component/PictureWall2'
import BottomToolbar from '@Component/BottomToolbar'

export default class extends Component {
    render() {
        return (
            <Fragment>
                <PictureWall />
                <BottomToolbar des='lottery' />
            </Fragment>
        );
    }
};
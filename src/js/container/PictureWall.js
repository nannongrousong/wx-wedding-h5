import React, { Component, Fragment } from 'react';
import PictureWall from '@Component/PictureWall'
import BottomAnchor from '@Component/BottomAnchor'

export default class extends Component {
    componentDidMount() {
        this.scroll()
    }

    scroll = () => {
        document.documentElement.scrollTop += 3;
        if (document.documentElement.scrollTop + 1000 > document.documentElement.scrollHeight) {
            document.documentElement.scrollTop = 0;
        }
        this.frameID = window.requestAnimationFrame(this.scroll)
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.frameID)
    }

    render() {
        return (
            <Fragment>
                <PictureWall />
                <BottomAnchor anchors={['lottery']} />
            </Fragment>
        );
    }
};
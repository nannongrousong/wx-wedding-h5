import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import styles from './BottomAnchor.css'
import { isMobile } from '../../common/utils';

class BottomToolbar extends Component {
    handleJump = (des) => {
        if (des == 'home') {
            window.location.replace("#/")
        } else if (des == 'wall') {
            window.location.replace("#/wall")
        } else if (des == 'lottery') {
            window.location.replace("#/lottery")
        }
    }

    render() {
        const { anchors } = this.props;
        let iconMap = { home: 'home', lottery: 'gift', wall: 'gift' };

        return (
            anchors.map((des, index) => (
                <div
                    key={index}
                    style={{right: `${(isMobile ? 20 : 40) + (isMobile ? 50 : 80) * index}px`}}
                    className={styles['fixed-btn-wrapper']}
                    onClick={this.handleJump.bind(this, des)}>
                    <FontAwesome className={styles['fixed-btn']} name={iconMap[des]} />
                </div>
            ))
        )
    }
}

export default BottomToolbar
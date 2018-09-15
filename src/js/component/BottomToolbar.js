import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import styles from './BottomToolbar.css'

class BottomToolbar extends Component {
    handleJump = () => {
        const { where } = this.props;
        if (where == 'home') {
            window.location.replace("#/lottery")
        } else if (where == 'wall') {
            window.location.replace("#/lottery")
        } else {
            window.location.replace("#/")
        }
    }

    render() {
        const { where } = this.props;
        let name = { home: 'gift', lottery: 'home', wall: 'gift' }[where];
        return (
            <div className={styles['fixed-btn-wrapper']} onClick={this.handleJump}>
                <FontAwesome className={styles['fixed-btn']} name={name} />
            </div>
        )
    }
}

export default BottomToolbar
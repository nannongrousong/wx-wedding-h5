import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import styles from './BottomToolbar.css'

class BottomToolbar extends Component {
    handleJump = () => {
        const { des } = this.props;
        if (des == 'home') {
            window.location.replace("#/")
        } else if (des == 'wall') {
            window.location.replace("#/wall")
        } else if (des == 'lottery') {
            window.location.replace("#/lottery")
        }
    }

    render() {
        const { des, right } = this.props;
        let name = { home: 'home', lottery: 'gift', wall: 'gift' }[des];
        let myStyle = right ? {
            right
        } : null;
        return (
            <div className={styles['fixed-btn-wrapper']} onClick={this.handleJump} style={myStyle}>
                <FontAwesome className={styles['fixed-btn']} name={name} />
            </div>
        )
    }
}

export default BottomToolbar
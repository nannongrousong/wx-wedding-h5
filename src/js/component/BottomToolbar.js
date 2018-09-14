import React, { Component } from 'react'
import { Button, Row, Col } from 'antd';
import FontAwesome from 'react-fontawesome';
import styles from './BottomToolbar.css'
import fetch from 'isomorphic-fetch'

class BottomToolbar extends Component {
    handleJump = () => {
        const { where } = this.props;
        if (where == 'home') {
            window.location.replace("#/lottery")
        } else {
            window.location.replace("#/")
        }
    }

    render() {
        const { where } = this.props;
        return (
            <div className={styles['fixed-btn-wrapper']} onClick={this.handleJump}>
                <FontAwesome className={styles['fixed-btn']} name={{ home: 'gift', lottery: 'home' }[where]} />
            </div>
        )
    }
}

export default BottomToolbar
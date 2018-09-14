import React, { Component } from 'react'
import { Button, Row, Col } from 'antd';
import FontAwesome from 'react-fontawesome';
import styles from './BottomToolbar.css'
import fetch from 'isomorphic-fetch'

class BottomToolbar extends Component {
    lottery = () => {
        window.location.replace("#/lottery")
    }

    jumpHome = () => {
        window.location.replace("#/")
    }


    render() {
        const { where } = this.props;
        return (
            <div className={styles.wrapper} >
                <div className={styles.buttons}>
                    <Row className={`${where == 'map' ? styles.hidden : ''}`}>
                        <Col span={24}>
                            <Button className={styles['lottery-button']} onClick={this.lottery} size="small">
                                <FontAwesome name='gift' className={styles['button-icon']} />
                                抽奖
                            </Button>
                        </Col>
                    </Row>

                    <Row className={`${where == 'map' ? '' : styles.hidden}`}>
                        <Col span={24}>
                            <Button className={styles['return-button']} onClick={this.jumpHome} size="small">
                                <FontAwesome name='reply-all' className={styles['button-icon']} />
                                返回
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default BottomToolbar
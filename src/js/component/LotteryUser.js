import React, { Component } from 'react';
import { message } from 'antd';
import styles from './LotteryUser.css';
import fetch from 'isomorphic-fetch'
import { getApiUrl } from '../../config/global';

const apiUrl = getApiUrl();

class LotteryUser extends Component {
    state = {
        signUsers: [],
        resultUsers: [],
        lotteryState: false,
        lotteryingUser: {
            user_id: 'default',
            nick_name: '会是谁呢',
            portrait_url: 'https://nannongrousong-app-private.oss-cn-shanghai.aliyuncs.com/wedding/default-portrait.jpg'
        }
    }

    componentDidMount() {
        fetch(apiUrl.LIST_SIGN_RECORD)
            .then(res => res.json())
            .then((res) => {
                if (!res.code) {
                    return message.error(res.info);
                }

                this.setState({
                    signUsers: res.data
                })
            })
    }

    controlLottery = (e) => {
        e.preventDefault();
        const { signUsers, lotteryState, resultUsers, lotteryingUser } = this.state;
        if (!lotteryState) {
            this.lotteryScheduleID = setInterval(() => {
                let ran = parseInt(Math.random() * signUsers.length);
                let ranUser = signUsers[ran];
                this.setState({
                    lotteryingUser: ranUser,
                    lotteryState: true
                })
            }, 20)
        } else {
            clearInterval(this.lotteryScheduleID);
            //  过滤掉当前已抽奖用户
            let newSignUsers = signUsers.filter((user) => (user.user_id != lotteryingUser.user_id));
            this.setState({
                signUsers: newSignUsers,
                lotteryState: false,
                resultUsers: [...resultUsers, lotteryingUser]
            })
        }
    }

    clearRes = (e) => {
        e.preventDefault();
        this.setState({
            resultUsers: []
        })
    }

    render() {
        const { resultUsers, lotteryingUser, lotteryState } = this.state;
        return (
            <div className={styles.background}>
                <div className={styles['lottery-wrapper']}>
                    <div className={styles['lottery-user']}>
                        <div className={styles['lottery-portrait']} style={{ backgroundImage: `url(${lotteryingUser.portrait_url})` }}>
                            <span className={styles['lottery-name']}>{lotteryingUser.nick_name}</span>
                        </div>
                    </div>
                    <div className={styles['start-btn-wrapper']}>
                        <a href='#' className={styles['start-btn']} onClick={this.controlLottery}>{lotteryState ? '停止' : '开始'}</a>
                    </div>
                    <div className={styles['result']}>
                        <div className={styles['result-title']}>中奖名单</div>
                        <ul className={styles['result-list']}>
                            {
                                resultUsers.map((result, index) => (
                                    <li key={index}>
                                        <div className={styles['result-item-portrait']} style={{ backgroundImage: `url(${result.portrait_url})` }}></div>
                                        <div className={styles['result-item-name']}>{result.nick_name}</div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className={styles['result-btn']}>
                            <a href='#' onClick={this.clearRes}>清空</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LotteryUser;
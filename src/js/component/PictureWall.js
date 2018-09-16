import React, { Component, Fragment } from 'react';
import { message } from 'antd';
import fetch from 'isomorphic-fetch'
import { getApiUrl } from '../../config/global';
import styles from './PictureWall.css'

const apiUrl = getApiUrl();

class PictureWall extends Component {
    state = {
        signUsers: [],
    }

    componentDidMount() {
        fetch(apiUrl.LIST_SIGN_RECORD)
            .then(res => res.json())
            .then((res) => {
                if (!res.code) {
                    return message.error(res.info);
                }

                let signUsers = res.data;
                signUsers.forEach((user) => {
                    user.rotate = Math.random() * 40 - 20;
                })

                this.setState({
                    signUsers
                })
            })
    }

    render() {
        const { signUsers } = this.state;
        return (
            <div className={styles.wrapper}>
                {
                    signUsers.map((user) => (
                        <div key={user.user_id} className={styles.item} style={{transform: `rotate(${user.rotate}deg)`}}>
                            <img src={user.portrait_url} alt={user.nick_name} className={styles.img} />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default PictureWall;
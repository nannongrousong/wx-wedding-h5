import React, { Component, Fragment } from 'react';
import { message } from 'antd';
import fetch from 'isomorphic-fetch'
import { getApiUrl } from '../../config/global';
import styles from './PictureWall2.css'

const apiUrl = getApiUrl();

const getPosition = (r, deg) => {
    let x = 0;
    let y = 0;
    if (0 <= deg && deg < 90) {
        x = r + r * Math.cos(Math.PI * (90 - deg) / 180);
        y = r - r * Math.sin(Math.PI * (90 - deg) / 180);
    } else if (90 <= deg && deg < 180) {
        x = r + r * Math.sin(Math.PI * (180 - deg) / 180);
        y = r + r * Math.cos(Math.PI * (180 - deg) / 180);
    } else if (180 <= deg && deg < 270) {
        x = r - r * Math.sin(Math.PI * (deg - 180) / 180);
        y = r + r * Math.cos(Math.PI * (deg - 180) / 180);
    } else {
        x = r - r * Math.sin(Math.PI * (360 - deg) / 180);
        y = r - r * Math.cos(Math.PI * (360 - deg) / 180);
    }
    return [x, y];
}

class PictureWall extends Component {
    state = {
        signUsers: [],
    }

    componentDidMount() {
        this.shiftDeg = 0;

        fetch(apiUrl.LIST_SIGN_RECORD)
            .then(res => res.json())
            .then((res) => {
                if (!res.code) {
                    return message.error(res.info);
                }

                let signUsers = res.data;
                this.layoutImgs(signUsers, 0);

                this.startCircle();
            })
    }

    componentWillUnmount() {
        clearInterval(this.timeID)
    }

    startCircle = () => {
        this.timeID = setInterval(() => {
            this.shiftDeg = (this.shiftDeg + 20) % 360;
            this.layoutImgs(this.state.signUsers)
        }, 2000)
    }

    layoutImgs = (signUsers) => {
        let pieceDeg = parseInt(360 / signUsers.length);

        signUsers.forEach((user, index) => {
            let deg = pieceDeg * index + this.shiftDeg;
            let position = getPosition(350, deg);
            user.deg = deg;
            user.left = position[0] - 40;
            user.top = position[1] - 40;
        })

        this.setState({
            signUsers
        })
    }

    render() {
        const { signUsers } = this.state;
        return (
            <div className={styles.wall}>
                {
                    signUsers.map((user) => (
                        <img
                            key={user.user_id}
                            src={user.portrait_url}
                            className={styles.img}
                            style={{ left: user.left, top: user.top }}
                        />
                    ))
                }
            </div>
        );
    }
}

export default PictureWall;
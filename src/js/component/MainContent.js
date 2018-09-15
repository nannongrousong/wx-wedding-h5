import React, { Component } from 'react'
import styles from './MainContent.css'

class MainContent extends Component {
    constructor() {
        super();
        let width = document.body.clientWidth;
        let imgs = [];
        for (let i = 0; i < 4; i++) {
            if (width > 500) {
                imgs.push(`https://nannongrousong-app-private.oss-cn-shanghai.aliyuncs.com/wedding/background-wide-${i}.jpg`);
            } else {
                imgs.push(`https://nannongrousong-app-private.oss-cn-shanghai.aliyuncs.com/wedding/background-${i}.jpg`);
            }
        }
        this.imgs = imgs.slice();
        this.state = {
            imgStyle: {
                backgroundImage: `url(${this.imgs[0]})`
            }
        }
    }

    componentDidMount() {
        this.timeID = setInterval(() => {
            this.setState({
                imgStyle: {
                    backgroundImage: `url(${this.imgs[parseInt(Math.random() * this.imgs.length)]})`
                }
            })
        }, 30000)
    }

    componentWillUnmount() {
        clearInterval(this.timeID)
    }

    render() {
        return (
            <div className={styles.content} style={this.state.imgStyle}></div>
        )
    }
}

export default MainContent
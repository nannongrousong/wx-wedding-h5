import React, { Component } from 'react'
import Barrage from '@Component/Barrage'
import styles from './Barrage.css'
import fetch from 'isomorphic-fetch'
import { getApiUrl } from '../../config/global';

const apiUrl = getApiUrl();

//  弹幕背景颜色随机
//  弹幕背景颜色随机
const getBarrageColor = () => {
    let colorMap = [
        ['#336699', '#FFFFFF'],
        ['#66CCCC', '#FFFFFF'],
        ['#00B271', '#FFFFFF'],
        ['#479AC7', '#FFFFFF'],
        ['#F0DAD2', '#343434'],
        ['#EFEFDA', '#E6421A'],
        ['#B45B3E', '#FFFFFF']
    ]
    return colorMap[parseInt(Math.random() * 7)];
}

//  获取弹幕的最终高度
function getBestTop(top) {
    let clientHeight = document.body.clientHeight - 100;
    return top % clientHeight
}

class BarrageTB extends Component {
    constructor() {
        super()
        this.state = {
            barrageList: []
        }
        this.barragePresentTop = 60;
        this.barragePresentLeft = document.body.clientWidth;
        this.barrageShowTime = 15;
    }

    componentDidMount() {
        this.loadBarrageList();
        this.scheduleID = setInterval(() => {
            this.loadBarrageList()
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.scheduleID);
    }

    removeBarrage = (barrageID) => {
        let { barrageList } = this.state;
        let newBarrageList = barrageList.filter((barrage) => {
            return barrage.barrageID != barrageID;
        })
        this.setState({ barrageList: newBarrageList })
    }

    loadBarrageList = () => {
        let lastST = localStorage.getItem('lastST') || '';
        fetch(`${apiUrl.LIST_BARRAGE}?lastST=${lastST}`)
            .then((res) => res.json())
            .then((res) => {
                if (!res.code) {
                    return message.error(res.info);
                }

                let barrageList = res.data;
                let showBarrageList = [];

                //  重置位置
                this.barragePresentLeft = document.body.clientWidth;
                this.barrageShowTime = 15;

                barrageList.forEach((barrage) => {
                    const { barrage_id, portrait_url, text } = barrage;
                    showBarrageList.push({
                        barrageID: barrage_id,
                        text,
                        bgColor: getBarrageColor()[0],
                        textColor: getBarrageColor()[1],
                        top: getBestTop(this.barragePresentTop),
                        left: this.barragePresentLeft,
                        portraitUrl: portrait_url,
                        showTime: this.barrageShowTime
                    })
                    this.barragePresentTop += 40;
                    this.barragePresentLeft += 40;
                    this.barrageShowTime += 0.25;
                })

                this.setState({
                    barrageList: [...this.state.barrageList, ...showBarrageList]
                }, () => {
                    //  记录下最后一个弹幕时间，以供下次查询携带参数
                    if (barrageList.length > 0) {
                        localStorage.setItem('lastST', barrageList[barrageList.length - 1].send_time);
                    }
                })
            })
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {
                    this.state.barrageList.map((barrage) => {
                        return <Barrage
                            key={barrage.barrageID}
                            removeBarrage={this.removeBarrage}
                            {...barrage}
                        />
                    })
                }
            </div>
        )
    }
}

export default BarrageTB
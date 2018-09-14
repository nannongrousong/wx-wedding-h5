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
        this.barragepresentTop = 60;
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

                barrageList.forEach((barrage) => {
                    const { barrage_id, portrait_url, text } = barrage;
                    showBarrageList.push({                        
                        barrageID: barrage_id,
                        text,
                        bgColor: getBarrageColor()[0],
                        textColor: getBarrageColor()[1],
                        top: getBestTop(this.barragepresentTop),
                        left: document.body.clientWidth,
                        portraitUrl: portrait_url
                    })
                    this.barragepresentTop += 40
                })

                this.setState({
                    barrageList: showBarrageList
                }, () => {
                    //  记录下最后一个弹幕时间，以供下次查询携带参数
                    if (barrageList.length > 0) {
                        localStorage.setItem('lastST', barrageList[barrageList.length - 1].send_time);
                    }
                })
            })
    }


    getBarrage = (data) => {
        let { barrageList } = this.state;
        barrageList.push({
            barrageID: data.barrageID,
            text: data.text,
            bgColor: getBarrageColor()[0],
            textColor: getBarrageColor()[1],
            top: getBestTop(this.presentTop),
            left: document.body.clientWidth,
            portraitUrl: data.portraitUrl
        });
        //  弹幕高度相隔60
        this.presentTop += 60;
        this.setState({ barrageList })
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {
                    this.state.barrageList.map((barrange) => {
                        return <Barrage
                            id={barrange.barrageID}
                            key={barrange.barrageID}
                            text={barrange.text}
                            top={barrange.top}
                            left={barrange.left}
                            bgColor={barrange.bgColor}
                            textColor={barrange.textColor}
                            portraitUrl={barrange.portraitUrl}
                            removeBarrage={this.removeBarrage}
                        />
                    })
                }
            </div>
        )
    }
}

export default BarrageTB
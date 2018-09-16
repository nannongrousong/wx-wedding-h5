import React, { Component } from 'react'
import TopInfo from '@Component/TopInfo'
import BarrageTB from '@Component/BarrageTB'
import BottomAnchor from '@Component/BottomAnchor'
import MainContent from '@Component/MainContent'

class AssemblyHall extends Component {
    constructor() {
        super();
        this.state = {
            showInfo: false,
            barrageText: ''
        }
    }

    switchShow = (status) => {
        this.setState({
            showInfo: (status != undefined) ? status : !this.state.showInfo
        })
    }

    sendBarrage = (text) => {
        this.setState({
            barrageText: text
        })
    }

    render() {
        return (
            <div>
                <BarrageTB />
                <BottomAnchor anchors={['lottery']}  />
                <MainContent />
                <TopInfo showInfo={this.state.showInfo} switchShow={this.switchShow} />
            </div>
        )
    }
}

export default AssemblyHall
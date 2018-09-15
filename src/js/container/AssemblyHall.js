import React, { Component } from 'react'
import TopInfo from '@Component/TopInfo'
import BarrageTB from '@Component/BarrageTB'
import BottomToolbar from '@Component/BottomToolbar'
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
                <BottomToolbar des='lottery' />
                <MainContent />
                <TopInfo showInfo={this.state.showInfo} switchShow={this.switchShow} />
            </div>
        )
    }
}

export default AssemblyHall
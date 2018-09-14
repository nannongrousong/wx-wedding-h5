import React from 'react'
import Lottery from '@Component/Lottery'
import BottomToolbar from '@Component/BottomToolbar'

const LotteryFun = (props) => {
    return (
        <div>
            <Lottery />
            <BottomToolbar where="map" />
        </div>
    )
}

export default LotteryFun
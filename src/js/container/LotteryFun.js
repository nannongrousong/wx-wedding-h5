import React, { Fragment } from 'react'
import LotteryUser from '@Component/LotteryUser'
import BottomAnchor from '@Component/BottomAnchor'

const LotteryFun = (props) => {
    return (
        <Fragment>
            <LotteryUser />
            <BottomAnchor anchors={['wall', 'home']} />
        </Fragment>
    )
}

export default LotteryFun
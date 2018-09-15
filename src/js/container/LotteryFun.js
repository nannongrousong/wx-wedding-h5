import React, { Fragment } from 'react'
import LotteryUser from '@Component/LotteryUser'
import BottomToolbar from '@Component/BottomToolbar'

const LotteryFun = (props) => {
    return (
        <Fragment>
            <LotteryUser />
            <BottomToolbar des='wall' right='120px' />
            <BottomToolbar des='home' />
        </Fragment>
    )
}

export default LotteryFun
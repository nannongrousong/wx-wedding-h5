import React, { Fragment } from 'react'
import LotteryUser from '@Component/LotteryUser'
import BottomToolbar from '@Component/BottomToolbar'

const LotteryFun = (props) => {
    return (
        <Fragment>
            <LotteryUser />
            <BottomToolbar where='lottery' />
        </Fragment>
    )
}

export default LotteryFun
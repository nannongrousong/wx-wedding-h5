import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import AssemblyHall from '@Container/AssemblyHall'
import BGMusic from '@Component/BGMusic'
import LotteryFun from '@Container/LotteryFun'
import PictureWall from '@Container/PictureWall'

import '../styles/index.css'

const App = (props) => {
    return (
        <Fragment>
            <BGMusic />
            <Switch>
                <Route exact path='/' component={AssemblyHall} />
                <Route path="/lottery" component={LotteryFun} />
                <Route path="/wall" component={PictureWall} />
                
            </Switch>
        </Fragment>
    )
}

ReactDOM.render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('root'));
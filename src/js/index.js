import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import AssemblyHall from '@Container/AssemblyHall'
import BGMusic from '@Component/BGMusic'
import LotteryFun from '@Container/LotteryFun'

import '../styles/index.css'

const App = (props) => {
    return (
        <div>
            <BGMusic />
            <Switch>
                <Route exact path='/' component={AssemblyHall} />
                <Route path="/lottery" component={LotteryFun} />
            </Switch>
        </div>
    )
}

ReactDOM.render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('root'));
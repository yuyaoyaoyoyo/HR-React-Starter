/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'

import './app.scss'
import Mainpage from '../../container/Mainpage/Mainpage.jsx'
import Earth_logo from '../../component/Earth_logo/Earth_logo.jsx'
class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('App' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('App' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('App' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('App' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('App' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('App' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('App' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('App' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('App' + 'rendering');
        return (
            <div className="container">
                {/*<Earth_logo/>*/}
                <Mainpage/>

            </div>
        )
    }
}

export default (App);
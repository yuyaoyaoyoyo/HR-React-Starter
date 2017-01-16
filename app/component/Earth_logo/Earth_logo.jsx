/**
 *
 * Earth_logo 项目主样式表，确定项目基调全局样式
 * @author yuyaoyao
 * @date 17/1/6
 *
 *
 *
 */
import React, {PureComponent} from 'react'
import './Earth_logo.css'
class Earth_logo extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Earth_logo' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('Earth_logo' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('Earth_logo' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('Earth_logo' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('Earth_logo' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('Earth_logo' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('Earth_logo' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('Earth_logo' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('Earth_logo' + 'rendering');
        return (
            <div className="box">
                <div className="circle c1">
                    <div className="diqiu"></div>
                    <div className="guang"></div>
                    <div className="cube">
                        <div className="group group_one">
                            <div className="side one">
                                1
                            </div>
                        </div>
                        <div className="group group_two">
                            <div className="side two">
                                2
                            </div>
                        </div>
                        <div className="group group_three">
                            <div className="side three">
                                3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (Earth_logo);
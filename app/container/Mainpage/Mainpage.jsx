/**
 *
 * Mainpage 项目主样式表，确定项目基调全局样式
 * @author yuyaoyao
 * @date 17/1/16
 *
 *
 *
 */
import React, {PureComponent} from 'react'
import './Mainpage.css'
class Mainpage extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Mainpage' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('Mainpage' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('Mainpage' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('Mainpage' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('Mainpage' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('Mainpage' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('Mainpage' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('Mainpage' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('Mainpage' + 'rendering');
        return (
            <div className="Mainpage">
                <div className="Button">
                    <div className="hi-icon"></div>
                    <div className="text 1">修理加工</div>
                </div>


            </div>
        )
    }
}

export default (Mainpage);
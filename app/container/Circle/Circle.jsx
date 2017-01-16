/**
 *
 * Circle 项目主样式表，确定项目基调全局样式
 * @author yuyaoyao
 * @date 16/12/28
 *
 *
 *
 */
import React, {PureComponent} from 'react'
import './Circle.scss'
class Circle extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Circle' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('Circle' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('Circle' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('Circle' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('Circle' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('Circle' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('Circle' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('Circle' + ' componentWillUnmount' + arguments);
    }
    click(){
        
    }

    render() {
        console.log('Circle' + 'rendering');

        return (
            <div className="circle">
                Circle
            </div>
        )
    }
}

export default (Circle);
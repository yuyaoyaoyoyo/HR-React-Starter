/**
 *
 * Button 项目主样式表，确定项目基调全局样式
 * @author yuyaoyao
 * @date 17/1/16
 *
 *
 *
 */
import React, {PureComponent} from 'react'
class Button extends PureComponent {

    constructor(props) {

        super(props);
        console.log('Button' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('Button' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('Button' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('Button' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('Button' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('Button' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('Button' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('Button' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('Button' + 'rendering');
        return (
            <div>
                Button
            </div>
        )
    }
}

export default (Button);
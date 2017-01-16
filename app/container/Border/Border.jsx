/**
 *
 * Border 项目主样式表，确定项目基调全局样式
 * @author yuyaoyao
 * @date 16/12/28
 *
 *
 *
 */
import React, {PureComponent} from 'react'
import './Border.scss'
class Border extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Border' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('Border' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('Border' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('Border' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('Border' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('Border' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('Border' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('Border' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('Border' + 'rendering');
        return (
            <div className="flex-container">
                <div>flex-start</div>
                <div>flex-end</div>
                <div>center</div>
                <div>baseline</div>
                <div>stretch</div>
            </div>
        )
    }
}

export default (Border);
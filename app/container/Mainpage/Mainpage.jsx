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
import Earth_logo from '../../component/Earth_logo/Earth_logo.jsx'
class Mainpage extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Mainpage' + 'constructor' + arguments);
        this.state={
            scroll:0
        }
        this.dragSwitcher=false;
        this.step=1;
        this.current_x=0;
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
    mouseUpHandle(e){
        e.preventDefault()
        this.dragSwitcher=false
    }
    mouseDownHandle(e){
        e.preventDefault()
        const {clientX}=e;
        this.dragSwitcher=true;
        this.current_x=clientX;
    }
    mouseMoveHandle(e){
        e.preventDefault();
        if(this.dragSwitcher){
        let {clientX}=e;
        let x=-(this.current_x-clientX);
          let resultX = this.state.scroll+x*this.step;
          if (resultX>0){
              resultX=0;
          }
          if (-resultX > 860)
          {
             resultX = -860
          }

        this.setState({
            scroll: resultX
        })
        this.current_x=clientX
        }
    }
    mouseLeaveHandle(){
        e.preventDefault();
        this.dragSwitcher=false
    }
    render() {
        console.log('Mainpage' + 'rendering');
        return (
            <div className="Mainpage">
                <div className="text_picture"></div>
                <div className="Earth_logo">
                    <div className="Earth_logo_container">
                        {<Earth_logo/>}
                    </div>
                </div>
                <div className="Button_container">
                    <div className="Button_container_row1">
                        <div ref={(ref)=>{this.scrollContainer=ref}} onMouseDown={this.mouseDownHandle.bind(this)} onMouseUp={this.mouseUpHandle.bind(this)} onMouseMove={(e)=>{this.mouseMoveHandle(e).bind(this)}} onMouseLeave={this.mouseLeaveHandle.bind(this)} style={{transform:`translateX(${this.state.scroll}px)`}} className="Button_container_scroll">
                        <div className="Button">
                            <div className="hi-icon1"></div>
                            <div className="text 1">供暖系统</div>
                        </div>
                        <div className="Button">
                            <div className="hi-icon2"></div>
                            <div className="text 2">供水系统</div>
                        </div>
                        <div className="Button">
                            <div className="hi-icon3"></div>
                            <div className="text 3">供电系统</div>
                        </div>
                        <div className="Button">
                            <div className="hi-icon4"></div>
                            <div className="text 4">修理加工</div>
                        </div>
                        <div className="Button">
                            <div className="hi-icon5"></div>
                            <div className="text 5">军交油料</div>
                        </div>
                        <div className="Button">
                            <div className="hi-icon6"></div>
                            <div className="text 6">军需特装</div>
                        </div>
                        <div className="Button">
                            <div className="hi-icon7"></div>
                            <div className="text 7">卫勤救护</div>
                        </div>
                        <div className="Button">
                            <div className="hi-icon8"></div>
                            <div className="text 8">情报资料</div>
                        </div>
                        <div className="Button">
                            <div className="hi-icon9"></div>
                            <div className="text 9">消防系统</div>
                        </div>
                        <div className="Button">
                            <div className="hi-icon10"></div>
                            <div className="text 10">计量标校</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (Mainpage);
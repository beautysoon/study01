import React,{Component} from 'react';
import '../css/Welcome.css';
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';

class Welcome extends Component{
    render() {
        return(
            <div className="App">
                <img src={require("../logo.svg")} className="App-logo" alt="logo" />
                <h1>欢迎使用选课系统！</h1><br/>
                <ul>
                    <li><Link component={RouterLink} to={"/StuLogin"} color="secondary">学生登录</Link></li>
                    <li><Link component={RouterLink} to={"/TeaLogin"} color="secondary">教师登录</Link></li>
                    <li><Link component={RouterLink} to={"/AdmLogin"} color="secondary">管理员登录</Link></li>
                </ul>
            </div>
        );
    }
}
export default Welcome;
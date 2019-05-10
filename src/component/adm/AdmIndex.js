import React,{Component} from 'react';
import '../../css/Welcome.css';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from "react-router-dom";

class AdmIndex extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // 1学生 2教师 3课程
            userType: "1",
        };

    }

    render(){
        return(
            <div>
                <nav>
                    {/*<img src={require("../logo.svg")} className="App-logo" alt="logo" />*/}
                    <ul>
                        <li><Link component={RouterLink} to={"/StuManage"} color="secondary">学生管理</Link></li>
                        <li><Link component={RouterLink} to={"/TeaManage"} color="secondary">教师管理</Link></li>
                        <li><Link component={RouterLink} to={"/CourseManage"} color="secondary">课程管理</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default AdmIndex;
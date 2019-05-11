import React,{Component} from 'react';
import '../../css/manage.css';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from "react-router-dom";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../redux/conn";

class AdmIndex extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // 1学生 2教师 3课程
            userType: "1",
        };
    }

    render(){
        // const { value,onClick } = this.props;
        return(
            <div>
                <nav className="indexNav">
                    {/*<img src={require("../logo.svg")} className="App-logo" alt="logo" />*/}
                    <ul>
                        <li><Link component={RouterLink} to={"/StuManage"} color="secondary">学生管理</Link></li>
                        <li><Link component={RouterLink} to={"/TeaManage"} color="secondary">教师管理</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
const AdmIndexLogic = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdmIndex);
export default AdmIndexLogic;
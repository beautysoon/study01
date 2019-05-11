import React,{Component} from 'react';
import '../../css/login.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {Paper} from "@material-ui/core";
// import {connect} from "react-redux";
// import {mapStateToProps,mapDispatchToProps} from '../../redux/conn'
// import {Route,withRouter} from "react-router-dom";

class AdmLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            password: "",
            inputMsg1: "",
            inputMsg2: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.props.history.push("/AddCourse");
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        if (name==="id"){
            this.setState({
                id: value
            });
        } else {
            this.setState({
                password: value
            });
        }
    }

    onSubmit = (event)=> {
        const props = this.props;
        const state = this.state;
        // const { onClick } = this.props;
        if (this.state.id!==0 && this.state.password!=="") {
            this.setState({
                inputMsg1: "",
                inputMsg2: ""
            });
            axios.post('http://127.0.0.1:800/checkLogin/adm', {
                params: {
                    id: this.state.id,
                    password: this.state.password
                }
            })
                .then(function (res) {
                    console.log(res);
                    switch (res.data.staus) {
                        case 404:
                            alert("账号不存在！");
                            break;
                        case 403:
                            alert("密码不正确！");
                            break;
                        case 200:
                            console.log(state);
                            // onClick(state.id);
                            props.history.push('/AdmIndex');
                            // window.location.href=`http://127.0.0.1:3000/AdmIndex?${res.data.id}`;
                            break;
                        default:
                            console.log("AdmLoginDefault");
                    }
                }).catch(function (error) {
                console.log(error)
            });
        }else if (this.state.id==="") {
            this.setState({
                inputMsg1: "请检查用户名！"
            });
        }else if (this.state.password===""){
            this.setState({
                inputMsg1: "",
                inputMsg2: "请检查密码！"
            });
        }
        event.preventDefault();
    };

    render() {
        // const { value,onClick } = this.props;
        return (
            <div className="div_main">
                <Paper className="log">
                <form onSubmit={this.onSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <td>账号：</td>
                            <td><Input name="id" type="text" value={this.state.id} onChange={this.handleChange} /></td>
                            <td><label>{this.state.inputMsg1}</label></td>
                        </tr>
                        <tr>
                            <td>密码：</td>
                            <td><Input name="password" type="password" value={this.state.password} onChange={this.handleChange} /></td>
                            <td><label>{this.state.inputMsg2}</label></td>
                        </tr>
                        </tbody>
                    {/*<textarea value={`id is ${this.state.id},and password is ${this.state.password}`}/><br/>*/}
                        <tfoot><tr><td colSpan={3}><Button type="submit" color="secondary">登录</Button></td></tr></tfoot>
                    </table>
                </form>
                {/*<label>{value}</label>*/}
                {/*<button onClick={()=>onClick(this.state.id)}>click</button>*/}
                </Paper>
            </div>
        );
    }

}
// const AdmLoginLogic = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(AdmLogin);
export default AdmLogin;
// export default withRouter(AdmLoginLogic);


import React,{Component} from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'
import axios from "axios";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../redux/conn";
import {Paper} from "@material-ui/core";

class TeaLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
        const { onClick } = this.props;
        if (this.state.id!==0 && this.state.password!=="") {
            this.setState({
                inputMsg1: "",
                inputMsg2: ""
            });
            axios.post('http://127.0.0.1:800/checkLogin/tea', {
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
                            onClick(state.id);
                            props.history.push('/AddCourse');
                            break;
                        default:
                            console.log("TeaLoginDefault");
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
        return (
            <div className="div_main">
                <Paper className="log">
                <form onSubmit={this.onSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <td>工号：  </td>
                            <td><Input name="id" type="text" value={this.state.id} onChange={this.handleChange} /></td>
                            <td><label>{this.state.inputMsg1}</label></td>
                        </tr>
                        <tr>
                            <td>密码：  </td>
                            <td><Input name="password" type="password" value={this.state.password} onChange={this.handleChange} /></td>
                            <td><label>{this.state.inputMsg2}</label></td>
                        </tr>
                        </tbody>
                        <tfoot><tr><td colSpan={3}><Button type="submit" color="secondary">登录</Button></td></tr></tfoot>
                    </table>
                </form>
                </Paper>
            </div>
        );
    }
}
const TeaLoginLogic = connect(
    mapStateToProps,
    mapDispatchToProps
)(TeaLogin);
export default TeaLoginLogic;


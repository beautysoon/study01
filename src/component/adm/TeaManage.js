import React,{Component} from 'react';
import '../../css/manage.css'
import Input from '@material-ui/core/Input';
import Button from "@material-ui/core/Button";
import axios from "axios";
import {Paper} from "@material-ui/core";

class TeaManage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            teaId: "",
            teaPass: "",
            teaName: "",
            institute: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange(event){
        const target = event.target;
        const id = target.id;
        const value = target.value;
        if (id==="teaId"){
            this.setState({
                teaId: value
            })
        }else if (id==="teaPass"){
            this.setState({
                teaPass: value
            });
        }else if (id==="teaName") {
            this.setState({
                teaName: value
            });
        }else {
            this.setState({
                institute: value
            });
        }
    }
    onSubmit(event){
        axios.post('http://127.0.0.1:800/teaManage', {
            params: {
                teaId: this.state.teaId,
                teaPass: this.state.teaPass,
                teaName: this.state.teaName,
                institute: this.state.institute
            }
        })
            .then(function (res) {
                console.log(res);
                switch (res.data.resMsg) {
                    case 404:
                        alert("账号不存在！");
                        break;
                    case 403:
                        alert("请先修改信息！");
                        break;
                    case 200:
                        alert("修改成功！");
                        break;
                    default:
                        console.log("TeaManageDefault");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <Paper className="pap">
                <form onSubmit={this.onSubmit}>
                    <table>
                        <thead>
                        <tr>
                            <td><h1>教师信息管理</h1></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>工号：</td>
                            <td><Input type="text" id="teaId" onChange={this.onChange}/></td>
                            {/*<td><label>{this.resMsg}</label></td>*/}
                        </tr>
                        <tr>
                            <td>密码：</td>
                            <td><Input type="text" id="teaPass" onChange={this.onChange}/></td>
                        </tr>
                        <tr>
                            <td>姓名：</td>
                            <td><Input type="text" id="teaName" onChange={this.onChange}/></td>
                        </tr>
                        <tr>
                            <td>学院：</td>
                            <td><Input type="text" id="institute" onChange={this.onChange}/></td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan="2"><Button type="submit" color="secondary">提交</Button></td>
                        </tr>
                        </tfoot>
                    </table>
                </form>
                </Paper>
            </div>
        );
    }
}
export default TeaManage;
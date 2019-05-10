import React,{Component} from 'react';
import Input from '@material-ui/core/Input';
import Button from "@material-ui/core/Button";
import axios from "axios";

class StuManage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            stuId: "",
            stuPass: "",
            stuName: "",
            // resMsg:""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange(event){
        const target = event.target;
        const id = target.id;
        const value = target.value;
        if (id==="stuId"){
            this.setState({
                stuId: value
            })
        }else if (id==="stuPass"){
            this.setState({
                stuPass: value
            });
        } else {
            this.setState({
                stuName: value
            });
        }
    }
    onSubmit(event){
        axios.post('http://127.0.0.1:800/stuManage', {
            params: {
                stuId: this.state.stuId,
                stuPass: this.state.stuPass,
                stuName: this.state.stuName
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
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        //阻止默认事件*********
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <table>
                        <thead>
                        <tr>
                            <td><h1>学生信息管理</h1></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>学号：</td>
                            <td><Input type="text" id="stuId" onChange={this.onChange}/></td>
                            {/*<td><label>{this.resMsg}</label></td>*/}
                        </tr>
                        <tr>
                            <td>密码：</td>
                            <td><Input type="text" id="stuPass" onChange={this.onChange}/></td>
                        </tr>
                        <tr>
                            <td>姓名：</td>
                            <td><Input type="text" id="stuName" onChange={this.onChange}/></td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td><Button type="submit" color="secondary">提交</Button></td>
                        </tr>
                        </tfoot>
                    </table>
                </form>
            </div>
        );
    }
}
export default StuManage;
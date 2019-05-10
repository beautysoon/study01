import React,{Component} from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'

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

    onSubmit(event) {
        // alert('A name was submitted: ' + this.state.id);
        event.preventDefault();
    }

    render() {
        return (
            <div className="div_main">
                <form onSubmit={this.onSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <td>工号:</td>
                            <td><Input name="id" type="text" value={this.state.id} onChange={this.handleChange} /></td>
                            <td><label>{this.state.inputMsg1}</label></td>
                        </tr>
                        <tr>
                            <td>密码:</td>
                            <td><Input name="password" type="password" value={this.state.password} onChange={this.handleChange} /></td>
                            <td><label>{this.state.inputMsg2}</label></td>
                        </tr>
                        </tbody>
                        {/*<textarea value={`id is ${this.state.id},and password is ${this.state.password}`}/><br/>*/}
                        <tfoot><tr><td aria-colspan="3"><Button type="submit" color="secondary">登录</Button></td></tr></tfoot>
                    </table>
                </form>
            </div>
        );
    }
}
export default TeaLogin;


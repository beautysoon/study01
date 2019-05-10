import React,{Component} from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'
import axios from "axios";
import store from '../../redux/store';

class AddCourse extends Component{
    constructor(props){
        super(props);
        this.state={
            courseName: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange(event){
        const target = event.target;
        const id = target.id;
        const value = target.value;
        if (id === "courseName") {
            this.setState({
                courseName: value
            });
        }
    }
    onSubmit(event){
        axios.post('http://127.0.0.1:800/addCourse', {
            params: {
                courseName: this.state.courseName
            }
        })
            .then(function (res) {
                console.log(res);
            })
            .catch(function (error) {
                console.log(error);
            });
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <table>
                        <thead>
                        <tr>
                            <td><h1>开设课程</h1></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>课程名：</td>
                            <td><Input type="text" id="courseName" onChange={this.onChange}/></td>
                            <td><label>{this.resMsg}</label></td>
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
export default AddCourse;
import React,{Component} from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'
import axios from "axios";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../redux/conn";
import {Paper} from "@material-ui/core";

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
        const {value} = this.props;
        axios.post('http://127.0.0.1:800/addCourse', {
            params: {
                teaId: value,
                courseName: this.state.courseName
            }
        })
            .then(function (res) {
                if (res.data.status === 200) {
                    alert("添加成功！");
                }else {
                    alert("添加失败！");
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
                            <td><h1>开设课程</h1></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>课程名：</td>
                            <td><Input type="text" id="courseName" onChange={this.onChange}/></td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan={2}><Button type="submit" color="secondary">提交</Button></td>
                        </tr>
                        </tfoot>
                    </table>
                </form>
                </Paper>
            </div>
        );
    }
}
const AddCourseLogic = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCourse);
export default AddCourseLogic;
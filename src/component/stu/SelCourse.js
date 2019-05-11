import React,{Component} from 'react';
import '../../css/Welcome.css';
import '../../css/table.css';
import axios from 'axios';
import {Button, Paper, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {Table} from "@material-ui/core";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../redux/conn";

class SelCourse extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listCourse:[]
        };
        let self = this;
        axios.get('http://127.0.0.1:800/selCourse/list')
            .then(function (res) {
                console.log(res);
                self.setState({listCourse: res.data});
            })
            .catch(function (error) {
                console.log(error);
            });
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (courseId)=>{
        const {value} = this.props;
        axios.post('http://127.0.0.1:800/selCourse/selected', {
            params: {
                stuId: value,
                courseId: courseId
            }
        })
            .then(function (res) {
                if (res.data.status === 200) {
                    alert("选课成功！");
                }else {
                    alert("选课失败！");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render(){
        const href = this;
        let list = this.state.listCourse.map(function (item, index) {
            return (
                <TableRow key={index}>
                    <TableCell className="td" key={`name${index}`}>{item.CourseName}</TableCell>
                    <TableCell className="td" key={`type${index}`}>{item.TeacherId}</TableCell>
                    <TableCell className="td" key={`btn${index}`}>
                        <Button id={item.CourseId} onClick={() => href.handleClick(item.CourseId)}>选课</Button>
                    </TableCell>
                </TableRow>
            );
        });
        return(
            <div>
                <Paper className="paper">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>课程名</TableCell>
                            <TableCell>教师</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {list}
                    </TableBody>
                </Table>
                </Paper>
            </div>
        );
    }
}
const AddCourseLogic = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelCourse);
export default AddCourseLogic;